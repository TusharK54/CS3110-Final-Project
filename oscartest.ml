open Lwt
open Str
open Encryption
open Emoji
open Cohttp_lwt_unix
open Cohttp_lwt__Body
open Soup
open Lwt.Infix

let messages = ref ""
let names = ref [] 
let enc = ref [] 
let emojis = ref []

let listen_address = Unix.inet_addr_loopback
let port = 9000
let backlog = 10
let key = Encryption.generate_keys () (* (m,k,ki) *)
(*Currently only works for 2 users*)

(* let e = !emojis in  
   begin
    match e with 
    |[] -> "a" 
    | h::t -> h 
   end *) (*TESTS EMOJI PARSED ONLINE*) 

let fst key = 
  match key with 
  | (m,k,ki) -> m

let snd key = 
  match key with 
  | (m,k,ki) -> k

let thrd key = 
  match key with 
  | (m,k,ki) -> ki

let explode s =
  let rec exp i l =
    if i < 0 then l else exp (i - 1) (s.[i] :: l) in
  exp (String.length s - 1) []

(*FOR EMOJIS*)
let program =
  (* Cohttp_lwt_unix.Client.get
      ("http://www.unicode.org/emoji/charts/emoji-list.html"
       |> Uri.of_string) >>= fun (_, body) ->
     Cohttp_lwt__Body.to_string body >>= fun html ->
  *)
  let soup = Soup.read_file "./emo.htm" |> Soup.parse in
  let just_innards l =
    l |> List.map (fun l -> l |> Soup.trimmed_texts |> String.concat "")
  in
  emojis := !emojis @ List.map (fun x -> String.lowercase_ascii x) 
              (Soup.select "tbody > tr > td.name" soup |> Soup.to_list |> just_innards)

let rec replace_with_underscore_words h = 
  let exploded = explode h in 
  let rec helper lst acc = 
    match exploded with 
    | [] -> acc
    | h::t -> if h <> ' ' then helper t (acc ^ Char.escaped h) else helper t (acc ^ "_")
  in helper exploded ""

let replace_with_underscore_list () = 
  let e = !emojis in 
  let rec repl e acc= 
    match e with 
    | [] -> acc
    | h::t -> repl t [replace_with_underscore_words h]@acc
  in repl e []

(*END EMOJIS*)

(*For debugging purposes*)
let rec print_list = function 
  | [] -> ()
  | e::l -> print_endline e ; print_string " " ; print_list l
(*END*)

let decryption_stuff encrypted_message = 
  let decrypted = List.map (fun x -> Encryption.decrypt (fst key) (thrd key) x) encrypted_message in 
  let decrypted_message = List.map (fun x -> char_of_int x) decrypted in 
  let final_string cl = String.concat "" (List.map (String.make 1) cl) in 
  "\n" ^ final_string decrypted_message

let handle_message msg =
  let arrays = Str.split_delim (Str.regexp " ") msg in
  if List.length arrays = 1 then
    match String.lowercase_ascii(List.hd arrays) with
    | "test" -> 
      let e = !emojis in  
      begin
        match e with 
        |[] -> "a" 
        | h::t -> h 
      end 
    | "quit" -> (string_of_int (Sys.command "^C") ^ " Quitting Now") (*fix*)
    | "read" -> 
      let new_string = ref "" in  
      let iterator () = 
        for variable = 0 to List.length !enc - 1 do
          let encrypted_message = List.nth !enc (variable) in 
          new_string := !new_string ^ decryption_stuff encrypted_message
        done
      in 
      iterator (); !new_string ^ "\n"
    | "recent" -> 
      let encrypted_message = List.nth !enc (List.length !enc -1) in 
      decryption_stuff encrypted_message ^ "\n"
    (* old: !messages *)
    | _ -> "Unknown command"
  else
    match arrays with
    | h::"emoji"::t when  List.length arrays > 2 ->   
      let index = 
        try 
          int_of_string (String.sub (h) 0 (String.length h - 1))
        with _ -> int_of_string (String.sub (h) 0 (String.length h)) in
      if try List.length !names < index  with _ -> true 
      then "Error: User not Found. Remember to use the right number." else
        let new_message_with_emoji = Str.string_after msg ((String.index (msg ^ " ") ' ') + 1) in 
        let new_message = Str.string_after new_message_with_emoji ((String.index (new_message_with_emoji ^ " ") ' ') + 1) in
        let user = List.nth !names (index-1) in
        let final_message =  user ^ ": Emoji " ^ new_message in
        let exploded = explode final_message in
        let exploded_ascii = List.map (fun x -> Char.code x) exploded in
        let encrypted_explode = List.map (fun x -> Encryption.encrypt (fst key) (snd key) x) exploded_ascii in 
        enc := !enc @ [encrypted_explode];
        messages := !messages ^ "\n" ^ final_message; "Message Sent \n" (*for keeping track purposes*)
    | h::"send"::t when  List.length arrays > 2 ->   
      let index = 
        try 
          int_of_string (String.sub (h) 0 (String.length h - 1))
        with _ -> int_of_string (String.sub (h) 0 (String.length h)) in
      if try List.length !names < index  with _ -> true 
      then "Error: User not Found. Remember to use the right number." else
        let new_message_with_send = Str.string_after msg ((String.index (msg ^ " ") ' ') + 1) in 
        let new_message = Str.string_after new_message_with_send ((String.index (new_message_with_send ^ " ") ' ') + 1) in
        let user = List.nth !names (index-1) in
        let final_message =  user ^ ": " ^ new_message in
        let exploded = explode final_message in
        let exploded_ascii = List.map (fun x -> Char.code x) exploded in
        let encrypted_explode = List.map (fun x -> Encryption.encrypt (fst key) (snd key) x) exploded_ascii in 
        enc := !enc @ [encrypted_explode];
        messages := !messages ^ "\n" ^ final_message; "Message Sent \n" (*for keeping track purposes*)
    | _      -> "Unknown command"

let rec handle_connection ic oc num ()=
  let handle_name name = 
    names := !names@ [name];
    Lwt_io.write_line oc ("Your ID is: " ^ string_of_int (List.length !names));
    handle_connection ic oc 1 ();
  in
  if num = 0 then 
    (Lwt_io.write_line oc "What is your name: "; 
     Lwt_io.read_line_opt ic >>= 
     (fun name ->
        match name with
        | None -> handle_connection ic oc 0 ()
        | Some n -> handle_name n))
  else
    Lwt_io.read_line_opt ic >>=
    (fun msg ->
       match msg with
       | Some msg when msg <> "" ->
         let reply = handle_message msg in
         Lwt_io.write_line oc reply >>= handle_connection ic oc 1
       | Some _ -> Logs_lwt.info (fun m -> m "Nothing happened") >>= handle_connection ic oc 1
       | None -> Logs_lwt.info (fun m -> m "Connection closed") >>= return)

let accept_connection conn =
  let fd, _ = conn in
  let ic = Lwt_io.of_fd Lwt_io.Input fd in
  let oc = Lwt_io.of_fd Lwt_io.Output fd in
  Lwt.on_failure (handle_connection ic oc 0 ()) (fun e -> Logs.err (fun m -> m "%s" (Printexc.to_string e) ));
  Logs_lwt.info (fun m -> m "New connection") >>= return

let create_socket () =
  let open Lwt_unix in
  let sock = socket PF_INET SOCK_STREAM 0 in
  (bind sock @@ ADDR_INET(listen_address, port);
   listen sock backlog;
   sock)

let create_server sock =
  let rec server () =
    Lwt_unix.accept sock >>= accept_connection >>= server
  in server

let () =
  let () = Logs.set_reporter (Logs.format_reporter ()) in
  let () = Logs.set_level (Some Logs.Info) in
  let sock = create_socket () in
  let server = create_server sock in
  Lwt_main.run @@ server ()