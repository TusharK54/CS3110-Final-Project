(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_equal=runtime.caml_equal,
     caml_js_from_array=runtime.caml_js_from_array,
     caml_js_object=runtime.caml_js_object,
     caml_js_to_string=runtime.caml_js_to_string,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    function caml_call9(f,a0,a1,a2,a3,a4,a5,a6,a7,a8)
     {return f.length == 9
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_async_js=caml_new_string("async_js"),
     cst_src_import_ml=caml_new_string("src/import.ml"),
     cst=caml_new_string(""),
     cst_async_js$0=caml_new_string("async_js"),
     cst_async_js$1=caml_new_string("async_js"),
     cst_async_js$2=caml_new_string("async_js"),
     cst_src_ocaml_uri_ml=caml_new_string("src/ocaml_uri.ml"),
     cst$0=caml_new_string(""),
     cst_async_js$3=caml_new_string("async_js"),
     cst_async_js$4=caml_new_string("async_js"),
     cst_async_js$5=caml_new_string("async_js"),
     cst_src_ocaml_uri_sexp_ml=caml_new_string("src/ocaml_uri_sexp.ml"),
     cst$1=caml_new_string(""),
     cst_async_js$6=caml_new_string("async_js"),
     cst_async_js$7=caml_new_string("async_js"),
     cst_https=caml_new_string("https:"),
     cst_wss=caml_new_string("wss"),
     cst_ws=caml_new_string("ws"),
     cst_https$0=caml_new_string("https:"),
     cst_via_WS=caml_new_string("via WS"),
     cst_Client_connected_via_WS=caml_new_string("Client connected via WS"),
     cst$3=caml_new_string(""),
     cst_unknown_reason=caml_new_string("unknown reason"),
     cst_cleanly=caml_new_string(" cleanly"),
     cst$4=caml_new_string(""),
     cst_Client_closed_writer_pipe=
      caml_new_string("Client closed writer pipe"),
     cst_Client_closed_reader_pipe=
      caml_new_string("Client closed reader pipe"),
     cst_CLOSE_NORMAL=caml_new_string("CLOSE_NORMAL"),
     cst_CLOSE_GOING_AWAY=caml_new_string("CLOSE_GOING_AWAY"),
     cst_CLOSE_PROTOCOL_ERROR=caml_new_string("CLOSE_PROTOCOL_ERROR"),
     cst_CLOSE_UNSUPPORTED=caml_new_string("CLOSE_UNSUPPORTED"),
     cst_CLOSE_NO_STATUS=caml_new_string("CLOSE_NO_STATUS"),
     cst_CLOSE_ABNORMAL=caml_new_string("CLOSE_ABNORMAL"),
     cst_Unsupported_Data=caml_new_string("Unsupported Data"),
     cst_Policy_Violation=caml_new_string("Policy Violation"),
     cst_CLOSE_TOO_LARGE=caml_new_string("CLOSE_TOO_LARGE"),
     cst_Missing_Extension=caml_new_string("Missing Extension"),
     cst_Internal_Error=caml_new_string("Internal Error"),
     cst_Service_Restart=caml_new_string("Service Restart"),
     cst_Try_Again_Later=caml_new_string("Try Again Later"),
     cst_TLS_Handshake=caml_new_string("TLS Handshake"),
     cst_async_js$8=caml_new_string("async_js"),
     cst_src_rpc_ml=caml_new_string("src/rpc.ml"),
     cst$2=caml_new_string(""),
     cst_async_js$9=caml_new_string("async_js"),
     cst_async_js$10=caml_new_string("async_js"),
     cst_async_js$11=caml_new_string("async_js"),
     cst_src_persistent_connection_ml=
      caml_new_string("src/persistent_connection.ml"),
     cst$5=caml_new_string(""),
     cst_async_js$12=caml_new_string("async_js"),
     cst_async_js$13=caml_new_string("async_js"),
     cst_No_response_returned_despite_successful_request=
      caml_new_string("No response returned despite successful request"),
     cst_Request_failed=caml_new_string("Request failed"),
     cst_Timeout=caml_new_string("Timeout"),
     cst_Network_error=caml_new_string("Network error"),
     cst_GET=caml_new_string("GET"),
     cst$7=caml_new_string("&"),
     cst$8=caml_new_string("?"),
     cst_POST=caml_new_string("POST"),
     cst_async_js$14=caml_new_string("async_js"),
     cst_src_http_ml=caml_new_string("src/http.ml"),
     cst$6=caml_new_string(""),
     cst_async_js$15=caml_new_string("async_js"),
     cst_async_js$16=caml_new_string("async_js"),
     cst_src_debug_ml$13=caml_new_string("src/debug.ml"),
     cst_A_B_A_C=caml_new_string(" ((A B) (A C)) "),
     cst_src_debug_ml$8=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$0=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$1=caml_new_string("src/debug.ml"),
     cst$10=caml_new_string(""),
     cst_async_js$17=caml_new_string("async_js"),
     cst_src_debug_ml=caml_new_string("src/debug.ml"),
     cst$9=caml_new_string(""),
     cst_async_js$18=caml_new_string("async_js"),
     cst_src_debug_ml$2=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$3=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$4=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$5=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$6=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$7=caml_new_string("src/debug.ml"),
     cst_690615347b751d6d6ffe69ea60597431=
      caml_new_string("690615347b751d6d6ffe69ea60597431"),
     cst_src_debug_ml$9=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$10=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$11=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$12=caml_new_string("src/debug.ml"),
     cst_690615347b751d6d6ffe69ea60597431$0=
      caml_new_string("690615347b751d6d6ffe69ea60597431"),
     cst_src_debug_ml$14=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$15=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$16=caml_new_string("src/debug.ml"),
     cst_src_debug_ml$17=caml_new_string("src/debug.ml"),
     cst_690615347b751d6d6ffe69ea60597431$1=
      caml_new_string("690615347b751d6d6ffe69ea60597431"),
     cst_async_js$19=caml_new_string("async_js"),
     cst_Async_kernel_Monitor_try_with=
      caml_new_string("Async_kernel: Monitor.try_with"),
     cst_Async_kernel_Unhandled_exception=
      caml_new_string("Async_kernel: Unhandled exception"),
     cst_async_js$20=caml_new_string("async_js"),
     cst_src_async_js0_ml=caml_new_string("src/async_js0.ml"),
     cst$11=caml_new_string(""),
     cst_async_js$21=caml_new_string("async_js"),
     s=caml_new_string("readystatechange"),
     cst_async_js$22=caml_new_string("async_js"),
     cst_async_js$23=caml_new_string("async_js"),
     cst_src_async_js_ml=caml_new_string("src/async_js.ml"),
     cst$12=caml_new_string(""),
     cst_async_js$24=caml_new_string("async_js"),
     cst_async_js$25=caml_new_string("async_js"),
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Async_kernel=global_data.Async_kernel,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Async_rpc_kernel_Transport=global_data.Async_rpc_kernel__Transport,
     Js_of_ocaml_Url=global_data.Js_of_ocaml__Url,
     Uri=global_data.Uri,
     Uri_sexp=global_data.Uri_sexp,
     Core_kernel_Info=global_data.Core_kernel__Info,
     Async_rpc_kernel_Pipe_transport=
      global_data.Async_rpc_kernel__Pipe_transport,
     Async_kernel_Pipe=global_data.Async_kernel__Pipe,
     Js_of_ocaml_Typed_array=global_data.Js_of_ocaml__Typed_array,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Js_of_ocaml_Dom=global_data.Js_of_ocaml__Dom,
     Async_kernel_Monitor=global_data.Async_kernel__Monitor,
     Js_of_ocaml_WebSockets=global_data.Js_of_ocaml__WebSockets,
     Core_kernel=global_data.Core_kernel,
     Async_rpc_kernel_Rpc=global_data.Async_rpc_kernel__Rpc,
     Core_kernel_Host_and_port=global_data.Core_kernel__Host_and_port,
     Persistent_connection_kernel=global_data.Persistent_connection_kernel,
     Async_kernel_Deferred_or_error=
      global_data.Async_kernel__Deferred_or_error,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Core_kernel_Result=global_data.Core_kernel__Result,
     Js_of_ocaml_File=global_data.Js_of_ocaml__File,
     Base_Or_error=global_data.Base__Or_error,
     Async_kernel_Ivar=global_data.Async_kernel__Ivar,
     Js_of_ocaml_XmlHttpRequest=global_data.Js_of_ocaml__XmlHttpRequest,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Set=global_data.Core_kernel__Set,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Expect_test_common_File=global_data.Expect_test_common__File,
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Js_of_ocaml_Firebug=global_data.Js_of_ocaml__Firebug,
     Expect_test_config=global_data.Expect_test_config,
     Inline_test_config=global_data.Inline_test_config,
     Js_of_ocaml_Dom_html=global_data.Js_of_ocaml__Dom_html,
     Async_kernel_Deferred=global_data.Async_kernel__Deferred,
     Async_kernel_Scheduler=global_data.Async_kernel__Scheduler,
     Base_Exn=global_data.Base__Exn,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     Core_kernel_Float=global_data.Core_kernel__Float,
     Core_kernel_Stack=global_data.Core_kernel__Stack,
     Async_kernel_Clock_ns=global_data.Async_kernel__Clock_ns,
     Async_js=[0];
    caml_register_global(221,Async_js,"Async_js__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js);
    caml_call1(Expect_test_collector[4][1],cst_src_import_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_js_Import=[0];
    caml_register_global(225,Async_js_Import,"Async_js__Import");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$2);
    caml_call1(Expect_test_collector[4][1],cst_src_ocaml_uri_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$3,cst$0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_js_Ocaml_uri=[0];
    caml_register_global(226,Async_js_Ocaml_uri,"Async_js__Ocaml_uri");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$5);
    caml_call1(Expect_test_collector[4][1],cst_src_ocaml_uri_sexp_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$6,cst$1);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_js_Ocaml_uri_sexp=[0];
    caml_register_global
     (227,Async_js_Ocaml_uri_sexp,"Async_js__Ocaml_uri_sexp");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$8);
    caml_call1(Expect_test_collector[4][1],cst_src_rpc_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$9,cst$2);
    var
     include=Async_rpc_kernel_Rpc[4],
     sexp_of_t=include[1],
     Client_implementations=include[3],
     create=include[4],
     contains_magic_prefix=include[5],
     description=include[6],
     add_heartbeat_callback=include[7],
     close=include[8],
     close_finished=include[9],
     close_reason=include[10],
     is_closed=include[11],
     bytes_to_write=include[12],
     flushed=include[13],
     with_close=include[14],
     server_with_close=include[15],
     _c_=
      [0,
       [11,caml_new_string("Connection close with error"),0],
       caml_new_string("Connection close with error")],
     _b_=
      [0,
       [11,
        caml_new_string("Connection closed"),
        [2,
         0,
         [11,
          caml_new_string(": "),
          [2,0,[11,caml_new_string(" ("),[2,0,[12,41,0]]]]]]],
       caml_new_string("Connection closed%s: %s (%s)")],
     _a_=
      [0,
       [11,caml_new_string("Unknown CloseEvent code: "),[4,0,0,0,0]],
       caml_new_string("Unknown CloseEvent code: %d")],
     _e_=[0,caml_new_string("status_text")],
     _f_=[0,caml_new_string("code")],
     _g_=[0,caml_new_string("status_text")],
     _h_=[0,caml_new_string("code")],
     _I_=[0,[12,102,[4,0,0,0,0]],caml_new_string("f%d")],
     _J_=[0,[4,0,0,0,0],caml_new_string("%d")],
     _k_=[0,caml_new_string("field2")],
     _l_=[0,caml_new_string("field1")],
     _m_=[0,caml_new_string("Bar")],
     _n_=[0,caml_new_string("Foo")],
     _j_=[0,caml_new_string("some_name")],
     _o_=[0,[0,caml_new_string("debug")],[0,caml_new_string("other string")]],
     _q_=[1,caml_new_string(' "Foo" ')],
     _r_=[0,caml_new_string("")],
     _u_=
      [1,
       caml_new_string
        (' {"Bar":null,"field1":{"some_name":"debug"},"field2":["other string"]} ')],
     _v_=[0,caml_new_string("")],
     _B_=[1,caml_new_string(' [{"A":"B"},{"A":"C"}] ')],
     _C_=[0,caml_new_string("")],
     _E_=[0,caml_new_string("duplicate keys are displayed correctly")],
     _L_=[1,caml_new_string(" 999 ")],
     _M_=[0,caml_new_string("")],
     _O_=[0,caml_new_string("no stack overflow")];
    function client(uri,heartbeat_config,description,implementations,param)
     {if(uri)
       var uri$0=uri[1],uri$1=uri$0;
      else
       {var
         scheme=
          caml_string_equal(Js_of_ocaml_Url[10][3],cst_https)?cst_wss:cst_ws,
         _bq_=Js_of_ocaml_Url[10][2];
        if(_bq_)
         var port=_bq_[1],port$0=port;
        else
         var
          port$0=
           caml_string_equal(Js_of_ocaml_Url[10][3],cst_https$0)
            ?Js_of_ocaml_Url[4]
            :Js_of_ocaml_Url[3];
        var
         host=Js_of_ocaml_Url[10][1],
         uri$1=caml_call8(Uri[10],[0,scheme],0,[0,host],[0,port$0],0,0,0,0)}
      var
       url=caml_call1(Uri[7],uri$1),
       ws=new (Js_of_ocaml_WebSockets[1])(url.toString()),
       match=caml_call1(Async_kernel_Pipe[8],0),
       reader_w=match[2],
       pipe_reader=match[1],
       match$0=caml_call1(Async_kernel_Pipe[8],0),
       pipe_writer=match$0[2],
       writer_r=match$0[1],
       fatal_error=[0,0];
      function close(param)
       {caml_call1(Async_kernel_Pipe[14],pipe_writer);
        caml_call1(Async_kernel_Pipe[14],reader_w);
        caml_call1(Async_kernel_Pipe[15],pipe_reader);
        caml_call1(Async_kernel_Pipe[15],writer_r);
        fatal_error[1] = 1;
        return 0}
      var monitor=caml_call1(Async_kernel_Monitor[7],0);
      function onclose(this$0,close_event)
       {var
         _bA_=close_event.wasClean | 0,
         _bB_=_bA_?1000 === close_event.code?1:0:_bA_;
        if(1 - _bB_)
         {var
           reason=caml_js_to_string(close_event.reason),
           reason$0=caml_string_equal(reason,cst$3)?cst_unknown_reason:reason,
           cleanly=close_event.wasClean | 0?cst_cleanly:cst$4,
           code=close_event.code,
           switcher=code - 1000 | 0;
          if(15 < switcher >>> 0)
           var switch$0=0;
          else
           switch(switcher)
            {case 0:var _bC_=cst_CLOSE_NORMAL,switch$0=1;break;
             case 1:var _bC_=cst_CLOSE_GOING_AWAY,switch$0=1;break;
             case 2:var _bC_=cst_CLOSE_PROTOCOL_ERROR,switch$0=1;break;
             case 3:var _bC_=cst_CLOSE_UNSUPPORTED,switch$0=1;break;
             case 5:var _bC_=cst_CLOSE_NO_STATUS,switch$0=1;break;
             case 6:var _bC_=cst_CLOSE_ABNORMAL,switch$0=1;break;
             case 7:var _bC_=cst_Unsupported_Data,switch$0=1;break;
             case 8:var _bC_=cst_Policy_Violation,switch$0=1;break;
             case 9:var _bC_=cst_CLOSE_TOO_LARGE,switch$0=1;break;
             case 10:var _bC_=cst_Missing_Extension,switch$0=1;break;
             case 11:var _bC_=cst_Internal_Error,switch$0=1;break;
             case 12:var _bC_=cst_Service_Restart,switch$0=1;break;
             case 13:var _bC_=cst_Try_Again_Later,switch$0=1;break;
             case 15:var _bC_=cst_TLS_Handshake,switch$0=1;break;
             default:var switch$0=0}
          if(! switch$0)var _bC_=caml_call2(Core_kernel[244],_a_,code);
          var
           _bD_=caml_call4(Core_kernel_Error[17],_b_,cleanly,reason$0,_bC_),
           _bE_=caml_call1(Core_kernel_Error[23],_bD_);
          caml_call3(Async_kernel_Monitor[15],monitor,0,_bE_)}
        close(0);
        return Js_of_ocaml_Js[8]}
      function onerror(this$0,event)
       {var
         _by_=caml_call1(Core_kernel_Error[17],_c_),
         _bz_=caml_call1(Core_kernel_Error[23],_by_);
        caml_call3(Async_kernel_Monitor[15],monitor,0,_bz_);
        close(0);
        return Js_of_ocaml_Js[8]}
      function onopen(ws,event)
       {function _bv_(param,event)
         {if(fatal_error[1])return Js_of_ocaml_Js[8];
          var data=caml_call1(Js_of_ocaml_Typed_array[47][3],event.data);
          caml_call2(Async_kernel_Pipe[27],reader_w,data);
          return Js_of_ocaml_Js[7]}
        ws.onmessage = caml_call1(Js_of_ocaml_Dom[11],_bv_);
        function _bw_(data)
         {var match=ws.readyState;
          if(2 <= match)return 0;
          if(fatal_error[1])return 0;
          var buffer=caml_call1(Js_of_ocaml_Typed_array[47][1],data);
          return ws.send(buffer)}
        var _bx_=caml_call5(Async_kernel_Pipe[52],0,0,0,writer_r,_bw_);
        caml_call1(Async_kernel[6],_bx_);
        return Js_of_ocaml_Js[7]}
      ws.binaryType = "arraybuffer";
      ws.onopen = caml_call1(Js_of_ocaml_Dom[11],onopen);
      ws.onerror = caml_call1(Js_of_ocaml_Dom[11],onerror);
      ws.onclose = caml_call1(Js_of_ocaml_Dom[11],onclose);
      function close_because(pipe,reason)
       {function _bt_(param)
         {var match=ws.readyState;
          return 2 <= match?0:ws.close(1000,reason.toString())}
        var _bu_=caml_call1(Async_kernel_Pipe[17],pipe);
        return caml_call2(Async_kernel[21],_bu_,_bt_)}
      var _bm_=close_because(pipe_writer,cst_Client_closed_writer_pipe);
      caml_call1(Async_kernel[6],_bm_);
      var _bn_=close_because(pipe_reader,cst_Client_closed_reader_pipe);
      caml_call1(Async_kernel[6],_bn_);
      if(description)
       var
        desc=description[1],
        description$0=
         caml_call4(Core_kernel_Info[20],desc,cst_via_WS,uri$1,Uri_sexp[4]);
      else
       var
        description$0=
         caml_call5
          (Core_kernel_Info[15],
           0,
           0,
           cst_Client_connected_via_WS,
           uri$1,
           Uri_sexp[4]);
      var
       transport=
        caml_call3
         (Async_rpc_kernel_Pipe_transport[2],
          Async_rpc_kernel_Pipe_transport[1][2],
          pipe_reader,
          pipe_writer);
      function _bo_(param)
       {if(0 === param[0])
         {var connection=param[1];
          return caml_call1(Async_kernel[19],[0,connection])}
        var exn=param[1];
        function _br_(param)
         {return [1,caml_call2(Core_kernel_Error[22],0,exn)]}
        var _bs_=caml_call1(Async_rpc_kernel_Transport[5],transport);
        return caml_call2(Async_kernel[21],_bs_,_br_)}
      if(implementations)
       var
        match$1=implementations[1],
        implementations$0=match$1[2],
        connection_state=match$1[1],
        _bp_=
         caml_call7
          (create,
           [0,implementations$0],
           connection_state,
           0,
           heartbeat_config,
           [0,description$0],
           0,
           transport);
      else
       var
        match$2=caml_call1(Client_implementations[1],0),
        implementations$1=match$2[2],
        connection_state$0=match$2[1],
        _bp_=
         caml_call7
          (create,
           [0,implementations$1],
           connection_state$0,
           0,
           heartbeat_config,
           [0,description$0],
           0,
           transport);
      return caml_call2(Async_kernel[20],_bp_,_bo_)}
    function client_exn
     (uri,heartbeat_config,description,implementations,param)
     {var
       _bk_=Core_kernel_Or_error[36],
       _bl_=client(uri,heartbeat_config,description,implementations,0);
      return caml_call2(Async_kernel[21],_bl_,_bk_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     _d_=
      [0,
       sexp_of_t,
       create,
       contains_magic_prefix,
       description,
       add_heartbeat_callback,
       close,
       close_finished,
       close_reason,
       is_closed,
       bytes_to_write,
       flushed,
       with_close,
       server_with_close,
       client,
       client_exn],
     Async_js_Rpc=[0,_d_];
    caml_register_global(245,Async_js_Rpc,"Async_js__Rpc");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$11);
    caml_call1(Expect_test_collector[4][1],cst_src_persistent_connection_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$12,cst$5);
    function close$0(t){return caml_call3(_d_[6],0,0,t)}
    function is_closed$0(t){return caml_call1(_d_[9],t)}
    function close_finished$0(t){return caml_call1(_d_[7],t)}
    var
     Rpc=
      caml_call1
       (Persistent_connection_kernel[1],
        [0,
         [0,Core_kernel_Host_and_port[14],Core_kernel_Host_and_port[24]],
         close$0,
         is_closed$0,
         close_finished$0]);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_js_Persistent_connection=[0,Rpc];
    caml_register_global
     (248,Async_js_Persistent_connection,"Async_js__Persistent_connection");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$14);
    caml_call1(Expect_test_collector[4][1],cst_src_http_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$15,cst$6);
    var Response_type=[0],Response=[0],Post_body=[0],Method_with_args=[0];
    function request
     (opt,on_progress,on_upload_progress,url,response_type,method_with_args)
     {if(opt)var sth=opt[1],headers=sth;else var headers=0;
      if(0 === method_with_args[0])
       var
        args=method_with_args[1],
        _aV_=caml_call1(Js_of_ocaml_Url[6],args),
        _aU_=caml_call2(Core_kernel_String[31],url,63),
        _aW_=caml_call1(Core_kernel_Option[44],_aU_)?cst$7:cst$8,
        _aX_=caml_call2(Core_kernel[18],_aW_,_aV_),
        match=[0,caml_call2(Core_kernel[18],url,_aX_),cst_GET];
      else
       var match=[0,url,cst_POST];
      var
       method_string=match[2],
       url$0=match[1],
       req=caml_call1(Js_of_ocaml_XmlHttpRequest[1],0);
      req.open(method_string.toString(),url$0.toString(),Js_of_ocaml_Js[7]);
      switch(response_type)
       {case 0:req.responseType = "arraybuffer";break;
        case 1:req.responseType = "blob";break;
        case 2:req.responseType = "document";break;
        case 3:req.responseType = "json";break;
        case 4:req.responseType = "text";break;
        default:req.responseType = ""}
      function _aY_(param)
       {var value=param[2],name=param[1];
        return req.setRequestHeader(name.toString(),value.toString())}
      caml_call2(Core_kernel_List[8],headers,_aY_);
      var response=caml_call1(Async_kernel_Ivar[12],0);
      function _aZ_(param)
       {var _bj_=caml_call1(Core_kernel_Or_error[41],cst_Network_error);
        caml_call2(Async_kernel_Ivar[15],response,_bj_);
        return Js_of_ocaml_Js[7]}
      req.onerror = caml_call1(Js_of_ocaml_Dom[10],_aZ_);
      function _a0_(param)
       {var _bi_=caml_call1(Core_kernel_Or_error[41],cst_Timeout);
        caml_call2(Async_kernel_Ivar[15],response,_bi_);
        return Js_of_ocaml_Js[7]}
      req.ontimeout = caml_call1(Js_of_ocaml_Dom[10],_a0_);
      req.onreadystatechange
      =
      runtime.caml_js_wrap_callback
       (function(param)
         {var match=req.readyState;
          if(4 <= match)
           {if(caml_call2(Core_kernel[88],req.status,200))
             if(caml_call2(Core_kernel[92],req.status,300))
              {var
                _a6_=
                 function(content)
                  {function get_header(s)
                    {function _bf_(v){return [0,caml_js_to_string(v)]}
                     function _bg_(param){return 0}
                     var
                      _bh_=
                       req.getResponseHeader(runtime.caml_jsbytes_of_string(s));
                     return caml_call3(Js_of_ocaml_Js[5][7],_bh_,_bg_,_bf_)}
                   return [0,[0,req.status,get_header,content]]},
                get_text_contents_or_error=
                 function(param)
                  {var _ba_=Core_kernel_Result[19];
                   function _bb_(param)
                    {var
                      _bc_=
                       [0,
                        [1,
                         [0,
                          _e_,
                          [0,
                           caml_call1
                            (Core_kernel[447],caml_js_to_string(req.statusText)),
                           0]]],
                        0],
                      _bd_=
                       [0,
                        [1,
                         [0,
                          [1,[0,_f_,[0,caml_call1(Core_kernel[339],req.status),0]]],
                          _bc_]],
                        0],
                      _be_=
                       [1,
                        [0,
                         caml_call1
                          (Sexplib0_Sexp_conv[7],
                           cst_No_response_returned_despite_successful_request),
                         _bd_]];
                     return caml_call1(Core_kernel[221],_be_)}
                   return caml_call3
                           (Js_of_ocaml_Js[5][7],req.responseText,_bb_,_ba_)};
               switch(response_type)
                {case 0:
                  var
                   _a7_=
                    [0,caml_call1(Js_of_ocaml_File[3][5],req.response)];
                  break;
                 case 1:
                  var
                   _a7_=
                    [0,caml_call1(Js_of_ocaml_File[3][2],req.response)];
                  break;
                 case 2:
                  var
                   _a7_=
                    [0,caml_call1(Js_of_ocaml_File[3][1],req.response)];
                  break;
                 case 3:
                  var
                   _a7_=
                    [0,caml_call1(Js_of_ocaml_File[3][3],req.response)];
                  break;
                 case 4:var _a7_=get_text_contents_or_error(0);break;
                 default:
                  var
                   _a8_=get_text_contents_or_error(0),
                   _a7_=
                    caml_call2(Core_kernel_Or_error[47],_a8_,caml_js_to_string)}
               var
                res=caml_call2(Base_Or_error[24][4][2],_a7_,_a6_),
                switch$0=1}
             else
              var switch$0=0;
            else
             var switch$0=0;
            if(! switch$0)
             var
              _a9_=
               [0,
                [1,
                 [0,
                  _g_,
                  [0,
                   caml_call1
                    (Core_kernel[447],caml_js_to_string(req.statusText)),
                   0]]],
                0],
              _a__=
               [0,
                [1,
                 [0,
                  [1,[0,_h_,[0,caml_call1(Core_kernel[339],req.status),0]]],
                  _a9_]],
                0],
              _a$_=
               [1,
                [0,caml_call1(Sexplib0_Sexp_conv[7],cst_Request_failed),_a__]],
              res=caml_call1(Core_kernel_Or_error[40],_a$_);
            return caml_call2(Async_kernel_Ivar[15],response,res)}
          return 0});
      function _a1_(on_progress)
       {function _a5_(e)
         {caml_call2(on_progress,e.loaded,e.total);return Js_of_ocaml_Js[7]}
        return req.onprogress = caml_call1(Js_of_ocaml_Dom[10],_a5_)}
      caml_call2(Core_kernel_Option[18],on_progress,_a1_);
      function _a2_(upload)
       {function _a3_(on_upload_progress)
         {function _a4_(e)
           {caml_call2(on_upload_progress,e.loaded,e.total);
            return Js_of_ocaml_Js[7]}
          return upload.onprogress = caml_call1(Js_of_ocaml_Dom[10],_a4_)}
        return caml_call2(Core_kernel_Option[18],on_upload_progress,_a3_)}
      caml_call2(Js_of_ocaml_Js[6][6],req.upload,_a2_);
      if(0 === method_with_args[0])
       req.send(Js_of_ocaml_Js[1]);
      else
       {var body=method_with_args[1];
        if(body)
         {var body$0=body[1];
          switch(body$0[0])
           {case 0:var b=body$0[1];req.send(b);break;
            case 1:var d=body$0[1];req.send(d);break;
            case 2:
             var s=body$0[1];
             req.send(caml_call1(Js_of_ocaml_Js[2],s.toString()));
             break;
            default:var fd=body$0[1];req.send(fd)}}
        else
         req.send(Js_of_ocaml_Js[1])}
      return caml_call1(Async_kernel_Ivar[18],response)}
    function get(opt,url)
     {if(opt)var sth=opt[1],arguments$0=sth;else var arguments$0=0;
      function _aS_(resp){return resp[3]}
      var _aT_=request(0,0,0,url,5,[0,arguments$0]);
      return caml_call2(Async_kernel_Deferred_or_error[14],_aT_,_aS_)}
    function post(body,url)
     {function _aQ_(resp){return resp[3]}
      var _aR_=request(0,0,0,url,5,[1,body]);
      return caml_call2(Async_kernel_Deferred_or_error[14],_aR_,_aQ_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$16);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_js_Http=
      [0,Response_type,Post_body,Method_with_args,Response,request,get,post];
    caml_register_global(259,Async_js_Http,"Async_js__Http");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$17);
    caml_call1(Expect_test_collector[4][1],cst_src_debug_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$18,cst$9);
    function is_valid_field_name(seen,name)
     {if(caml_string_equal(name,cst$10))
       var _aO_=0;
      else
       {var match=runtime.caml_string_get(name,0),switcher=match - 48 | 0;
        if(9 < switcher >>> 0)
         var
          _aN_=
           function(param)
            {var
              switch$0=
               91 <= param
                ?97 <= param?123 <= param?0:1:95 === param?1:0
                :58 <= param?65 <= param?1:0:48 <= param?1:0;
             return switch$0?1:0},
          _aO_=caml_call2(Core_kernel_String[10],name,_aN_);
        else
         var _aO_=0}
      var _aP_=_aO_?1 - caml_call2(Core_kernel_Set[10],seen,name):_aO_;
      return _aP_}
    function any_of_sexp(param)
     {if(0 === param[0]){var s=param[1];return s.toString()}
      var _aE_=param[1];
      if(_aE_)
       {var _aF_=_aE_[1];
        if(0 === _aF_[0])
         {var _aG_=_aE_[2];
          if(_aG_)
           if(! _aG_[2])
            {var v$0=_aG_[1],name$1=_aF_[1];
             return caml_js_object([0,[0,name$1,any_of_sexp(v$0)]])}}}
      var seen=Core_kernel_String[122][54],rev_acc=0,list=_aE_;
      for(;;)
       {if(list)
         {var _aA_=list[1];
          if(0 === _aA_[0])
           {var rest=list[2],name=_aA_[1];
            if(is_valid_field_name(seen,name))
             {var
               rev_acc$0=[0,[0,name,0],rev_acc],
               seen$0=caml_call2(Core_kernel_Set[11],seen,name),
               seen=seen$0,
               rev_acc=rev_acc$0,
               list=rest;
              continue}}
          else
           {var _aB_=_aA_[1];
            if(_aB_)
             {var _aC_=_aB_[1];
              if(0 === _aC_[0])
               {var _aD_=_aB_[2];
                if(_aD_)
                 if(! _aD_[2])
                  {var rest$0=list[2],v=_aD_[1],name$0=_aC_[1];
                   if(is_valid_field_name(seen,name$0))
                    {var
                      rev_acc$1=[0,[0,name$0,[0,v]],rev_acc],
                      seen$1=caml_call2(Core_kernel_Set[11],seen,name$0),
                      seen=seen$1,
                      rev_acc=rev_acc$1,
                      list=rest$0;
                     continue}}}}}
          var match=0}
        else
         var match=[0,caml_call1(Core_kernel_List[32],rev_acc)];
        if(match)
         {var _aH_=match[1];
          if(_aH_)
           {var
             _aI_=
              function(param)
               {var _aL_=param[2],_aM_=param[1];
                if(_aL_){var v=_aL_[1];return [0,_aM_,any_of_sexp(v)]}
                return [0,_aM_,Js_of_ocaml_Js[1]]},
             _aJ_=caml_call2(Core_kernel_List[69],_aH_,_aI_);
            return caml_js_object(caml_call1(Core_kernel_Array[47],_aJ_))}
          return caml_js_from_array([0])}
        var _aK_=caml_call2(Core_kernel_List[69],_aE_,any_of_sexp);
        return caml_js_from_array(caml_call1(Core_kernel_Array[47],_aK_))}}
    function log_s(sexp)
     {var _az_=any_of_sexp(sexp);return Js_of_ocaml_Firebug[1].log(_az_)}
    var
     Expect_test_collector$0=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _i_(param)
     {function sexp_of_t(param)
       {if(param)
         {var
           v_field2=param[2],
           v_field1=param[1],
           arg$1=caml_call2(Core_kernel[431],Core_kernel[447],v_field2),
           bnds$0=[0,[1,[0,_k_,[0,arg$1,0]]],0],
           v_some_name=v_field1[1],
           arg=caml_call1(Core_kernel[447],v_some_name),
           bnds=[0,[1,[0,_j_,[0,arg,0]]],0],
           arg$0=[1,bnds],
           bnds$1=[0,[1,[0,_l_,[0,arg$0,0]]],bnds$0];
          return [1,[0,_m_,bnds$1]]}
        return _n_}
      function to_string(any)
       {return caml_js_to_string(Js_of_ocaml_Js[36].stringify(any))}
      var _av_=to_string(any_of_sexp(sexp_of_t(0)));
      caml_call1(Core_kernel[32],_av_);
      var
       _aw_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$0),
         68,
         1971,
         1975,
         1981];
      caml_call1(Expect_test_collector$0[1],_aw_);
      var _ax_=to_string(any_of_sexp(sexp_of_t(_o_)));
      caml_call1(Core_kernel[32],_ax_);
      var
       _ay_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$1),
         74,
         2158,
         2162,
         2168];
      return caml_call1(Expect_test_collector$0[1],_ay_)}
    var
     _p_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$2),
       68,
       1971,
       1982,
       1993],
     _s_=
      [0,
       [0,
        _r_,
        _q_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$3),
         68,
         1971,
         1975,
         1981],
        _p_],
       0],
     _t_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$4),
       74,
       2158,
       2169,
       2244],
     _w_=
      [0,
       [0,
        _v_,
        _u_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$5),
         74,
         2158,
         2162,
         2168],
        _t_],
       _s_],
     _x_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$7),
       50,
       1531,
       1531,
       2245],
     _y_=
      caml_call1
       (Expect_test_common_File[4][3],cst_690615347b751d6d6ffe69ea60597431);
    caml_call9
     (Expect_test_collector$0[3],
      _y_,
      _x_,
      cst_src_debug_ml$6,
      0,
      0,
      _w_,
      0,
      Inline_test_config,
      _i_);
    var
     Expect_test_collector$1=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _z_(param)
     {var
       sexp_with_duplicate_keys=caml_call1(Core_kernel_Sexp[73],cst_A_B_A_C),
       any=any_of_sexp(sexp_with_duplicate_keys),
       _at_=caml_js_to_string(Js_of_ocaml_Js[36].stringify(any));
      caml_call1(Core_kernel[32],_at_);
      var
       _au_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$8),
         83,
         2574,
         2578,
         2584];
      return caml_call1(Expect_test_collector$1[1],_au_)}
    var
     _A_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$9),
       83,
       2574,
       2585,
       2612],
     _D_=
      [0,
       [0,
        _C_,
        _B_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$10),
         83,
         2574,
         2578,
         2584],
        _A_],
       0],
     _F_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$12),
       77,
       2250,
       2250,
       2613],
     _G_=
      caml_call1
       (Expect_test_common_File[4][3],cst_690615347b751d6d6ffe69ea60597431$0);
    caml_call9
     (Expect_test_collector$1[3],
      _G_,
      _F_,
      cst_src_debug_ml$11,
      _E_,
      0,
      _D_,
      0,
      Inline_test_config,
      _z_);
    var
     Expect_test_collector$2=
      caml_call1
       (Expect_test_collector[2],
        [0,
         Expect_test_config[2],
         Expect_test_config[3],
         Expect_test_config[4],
         Expect_test_config[5],
         Expect_test_config[6],
         Expect_test_config[7]]);
    function _H_(param)
     {function _aq_(i){return [0,caml_call2(Core_kernel[244],_I_,i),i]}
      var a=caml_call2(Core_kernel_Array[36],10000,_aq_);
      function _ar_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Core_kernel[447],v0),
         v1$0=caml_call1(Core_kernel[339],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       sexp=caml_call1(caml_call1(Core_kernel[275],_ar_),a),
       x=any_of_sexp(sexp);
      caml_call2(Core_kernel[238],_J_,x.f999);
      var
       _as_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$13),
         91,
         2843,
         2847,
         2853];
      return caml_call1(Expect_test_collector$2[1],_as_)}
    var
     _K_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$14),
       91,
       2843,
       2854,
       2863],
     _N_=
      [0,
       [0,
        _M_,
        _L_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$15),
         91,
         2843,
         2847,
         2853],
        _K_],
       0],
     _P_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$17),
       86,
       2618,
       2618,
       2864],
     _Q_=
      caml_call1
       (Expect_test_common_File[4][3],cst_690615347b751d6d6ffe69ea60597431$1);
    caml_call9
     (Expect_test_collector$2[3],
      _Q_,
      _P_,
      cst_src_debug_ml$16,
      _O_,
      0,
      _N_,
      0,
      Inline_test_config,
      _H_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$19);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var Async_js_Debug=[0,log_s,any_of_sexp];
    caml_register_global(268,Async_js_Debug,"Async_js__Debug");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$20);
    caml_call1(Expect_test_collector[4][1],cst_src_async_js0_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$21,cst$11);
    function sleep(d)
     {var _ap_=caml_call1(Core_kernel_Time_ns[1][80],d);
      return caml_call1(Async_kernel_Clock_ns[4],_ap_)}
    function yield$0(param)
     {var _ao_=caml_call1(Async_kernel_Scheduler[2],0);
      return caml_call1(Async_kernel_Scheduler[61],_ao_)}
    var
     extract_js_error=[0,function(param){return 0}],
     state=[0,0],
     timeouts=caml_call1(Core_kernel_Stack[22],0);
    function run_after(f,ms)
     {caml_call2(Js_of_ocaml_Dom_html[118],f,ms);return 0}
    function loop(param)
     {var
       t=caml_call1(Async_kernel_Scheduler[2],0),
       _af_=state[1],
       match=caml_call1(Async_kernel_Scheduler[19],t);
      if(! match)
       if(1 !== _af_)
        {state[1] = 1;
         caml_call1(Async_kernel_Scheduler[13],t);
         if(caml_call1(Async_kernel_Scheduler[36],t))
          var next_wakeup=1;
         else
          {var match$0=caml_call1(Async_kernel_Scheduler[16],t);
           if(match$0)
            var
             next=match$0[1],
             now=caml_call1(Core_kernel_Time_ns[62],0),
             d=caml_call2(Core_kernel_Time_ns[69],next,now),
             d_ms$0=caml_call1(Core_kernel_Time_ns[1][89],d),
             _al_=
              caml_call2(Core_kernel_Float[120],d_ms$0,0.)?1:[0,next,d_ms$0],
             _am_=_al_;
           else
            var _am_=0;
           var next_wakeup=_am_}
         var
          _ag_=
           function(param)
            {var exn=param[1],exn$0=caml_call1(Async_kernel_Monitor[13],exn);
             if(exn$0[1] === Js_of_ocaml_Js[35])
              {var err=exn$0[2];return caml_call1(Js_of_ocaml_Js[34],err)}
             var match=caml_call1(extract_js_error[1],exn$0);
             if(match)
              {var
                err$0=match[1],
                _an_=caml_call1(Base_Exn[9],exn$0).toString();
               Js_of_ocaml_Firebug[1].error(_an_);
               return caml_call1(Js_of_ocaml_Js[34],err$0)}
             throw exn$0},
          _ah_=caml_call1(Async_kernel_Scheduler[20],t);
         caml_call2(Core_kernel_Option[18],_ah_,_ag_);
         if(typeof next_wakeup === "number")
          return 0 === next_wakeup
                  ?(state[1] = 0,0)
                  :(state[1] = 2,run_after(loop,0.));
         var d_ms=next_wakeup[2],at=next_wakeup[1];
         state[1] = 0;
         var _ai_=caml_call1(Core_kernel_Stack[6],timeouts);
         if(_ai_)
          var _aj_=_ai_;
         else
          var
           _ak_=caml_call1(Core_kernel_Stack[28],timeouts),
           _aj_=caml_call2(Core_kernel_Time_ns[19],at,_ak_);
         return _aj_
                 ?(caml_call2(Core_kernel_Stack[24],timeouts,at),
                   run_after(run_timeout,d_ms))
                 :_aj_}
      return 0}
    function run_timeout(param)
     {caml_call1(Core_kernel_Stack[26],timeouts);return loop(0)}
    function run(param)
     {return 0 === state[1]?(run_after(loop,0.),state[1] = 2,0):0}
    function log(name,exn)
     {var exn$0=caml_call1(Async_kernel_Monitor[13],exn);
      if(exn$0[1] === Js_of_ocaml_Js[35])
       var err=exn$0[2],exn$1=[0,16617,err];
      else
       {var match$0=caml_call1(extract_js_error[1],exn$0);
        if(match$0)
         var err$2=match$0[1],_ae_=[0,566177629,[0,exn$0,err$2]];
        else
         var _ae_=[0,3458171,exn$0];
        var exn$1=_ae_}
      var _ab_=exn$1[1];
      if(3458171 === _ab_)
       {var exn$2=exn$1[2],_ac_=caml_call1(Base_Exn[9],exn$2).toString();
        return Js_of_ocaml_Firebug[1].error(name.toString(),_ac_)}
      if(566177629 <= _ab_)
       {var
         match=exn$1[2],
         err$0=match[2],
         exn$3=match[1],
         _ad_=caml_call1(Base_Exn[9],exn$3).toString();
        return Js_of_ocaml_Firebug[1].error(name.toString(),_ad_,err$0)}
      var err$1=exn$1[2];
      return Js_of_ocaml_Firebug[1].error(name.toString(),err$1)}
    var
     initialized_ref=[0,0],
     initialization=
      [246,
       function(_W_)
        {var t=caml_call1(Async_kernel_Scheduler[2],0);
         initialized_ref[1] = 1;
         function _X_(param){return run(0)}
         caml_call2(Async_kernel_Scheduler[43],t,_X_);
         function _Y_(param){return run(0)}
         caml_call2(Async_kernel_Scheduler[44],t,_Y_);
         caml_call2(Async_kernel_Scheduler[42],t,run);
         function _Z_(_aa_)
          {return log(cst_Async_kernel_Monitor_try_with,_aa_)}
         Async_kernel_Monitor[25][1][1] = _Z_;
         function ___(_$_)
          {return log(cst_Async_kernel_Unhandled_exception,_$_)}
         caml_call2(Async_kernel_Monitor[9],Async_kernel_Monitor[24],___);
         return run(0)}];
    function init(param){return caml_call1(Core_kernel[225],initialization)}
    function initialized(param){return initialized_ref[1]}
    function set_extract_js_error(f){extract_js_error[1] = f;return 0}
    var
     complete="complete",
     readystatechange_ev=caml_call1(Js_of_ocaml_Dom[14][1],s),
     readystatechange="readystatechange";
    function add_event(target,evt,handler)
     {caml_call4
       (Js_of_ocaml_Dom_html[17],target,evt,handler,Js_of_ocaml_Js[8]);
      return 0}
    function document_loaded(param)
     {if(caml_equal(Js_of_ocaml_Dom_html[2].readyState,complete))
       return Async_kernel_Deferred[18];
      var loaded=caml_call1(Async_kernel_Ivar[12],0);
      function handler(evt)
       {var
         _U_=runtime.caml_notequal(evt.type,readystatechange),
         _V_=_U_ || caml_equal(Js_of_ocaml_Dom_html[2].readyState,complete);
        if(_V_)caml_call2(Async_kernel_Ivar[15],loaded,0);
        return Js_of_ocaml_Js[7]}
      var _R_=caml_call1(Js_of_ocaml_Dom[10],handler);
      add_event(Js_of_ocaml_Dom_html[2],Js_of_ocaml_Dom_html[15][50],_R_);
      var _S_=caml_call1(Js_of_ocaml_Dom[10],handler);
      add_event(Js_of_ocaml_Dom_html[2],readystatechange_ev,_S_);
      var _T_=caml_call1(Js_of_ocaml_Dom[10],handler);
      add_event(Js_of_ocaml_Dom_html[8],Js_of_ocaml_Dom_html[15][32],_T_);
      return caml_call1(Async_kernel_Ivar[18],loaded)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$22);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     include$0=
      [0,sleep,yield$0,init,initialized,set_extract_js_error,document_loaded];
    caml_register_global(277,include$0,"Async_js__Async_js0");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_async_js$23);
    caml_call1(Expect_test_collector[4][1],cst_src_async_js_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$24,cst$12);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$25);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Async_js$0=
      [0,
       sleep,
       yield$0,
       init,
       initialized,
       set_extract_js_error,
       document_loaded,
       log_s];
    caml_register_global(278,Async_js$0,"Async_js");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJhc3luY19qcy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119