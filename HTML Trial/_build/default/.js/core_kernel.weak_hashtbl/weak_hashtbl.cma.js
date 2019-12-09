(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global;
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_weak_hashtbl=caml_new_string("weak_hashtbl"),
     cst_weak_hashtbl_src_import_ml=
      caml_new_string("weak_hashtbl/src/import.ml"),
     cst=caml_new_string(""),
     cst_weak_hashtbl$0=caml_new_string("weak_hashtbl"),
     cst_weak_hashtbl$1=caml_new_string("weak_hashtbl"),
     cst_Weak_hashtbl_add_exn_of_key_in_use=
      caml_new_string("Weak_hashtbl.add_exn of key in use"),
     cst_weak_hashtbl$2=caml_new_string("weak_hashtbl"),
     cst_weak_hashtbl_src_weak_hashtbl_ml=
      caml_new_string("weak_hashtbl/src/weak_hashtbl.ml"),
     cst$0=caml_new_string(""),
     cst_weak_hashtbl$3=caml_new_string("weak_hashtbl"),
     cst_weak_hashtbl$4=caml_new_string("weak_hashtbl"),
     Ppx_bench_lib_Benchmark_accumulator=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     include=global_data.Core_kernel,
     Weak_pointer=global_data.Weak_pointer,
     Core_kernel_Hashtbl=global_data.Core_kernel__Hashtbl,
     Thread_safe_queue=global_data.Thread_safe_queue,
     Core_kernel_Gc=global_data.Core_kernel__Gc,
     Base_Hashable=global_data.Base__Hashable,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Weak_hashtbl=[0];
    caml_register_global(17,Weak_hashtbl,"Weak_hashtbl__");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_weak_hashtbl);
    caml_call1(Expect_test_collector[4][1],cst_weak_hashtbl_src_import_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_weak_hashtbl$0,cst);
    var
     _aK_=include[91],
     _cP_=include[224],
     _a_=include[1],
     _b_=include[2],
     _c_=include[3],
     _d_=include[4],
     _e_=include[5],
     _f_=include[6],
     _g_=include[7],
     _h_=include[8],
     _i_=include[9],
     _j_=include[10],
     _k_=include[11],
     _l_=include[12],
     _m_=include[13],
     _n_=include[14],
     _o_=include[15],
     _p_=include[16],
     _q_=include[17],
     _r_=include[18],
     _s_=include[19],
     _t_=include[20],
     _u_=include[21],
     _v_=include[22],
     _w_=include[23],
     _x_=include[24],
     _y_=include[25],
     _z_=include[26],
     _A_=include[27],
     _B_=include[28],
     _C_=include[29],
     _D_=include[30],
     _E_=include[31],
     _F_=include[32],
     _G_=include[33],
     _H_=include[34],
     _I_=include[35],
     _J_=include[36],
     _K_=include[37],
     _L_=include[38],
     _M_=include[39],
     _N_=include[40],
     _O_=include[41],
     _P_=include[42],
     _Q_=include[43],
     _R_=include[44],
     _S_=include[45],
     _T_=include[46],
     _U_=include[47],
     _V_=include[48],
     _W_=include[49],
     _X_=include[50],
     _Y_=include[51],
     _Z_=include[52],
     ___=include[53],
     _$_=include[54],
     _aa_=include[55],
     _ab_=include[56],
     _ac_=include[57],
     _ad_=include[58],
     _ae_=include[59],
     _af_=include[60],
     _ag_=include[61],
     _ah_=include[62],
     _ai_=include[63],
     _aj_=include[64],
     _ak_=include[65],
     _al_=include[66],
     _am_=include[67],
     _an_=include[68],
     _ao_=include[69],
     _ap_=include[70],
     _aq_=include[71],
     _ar_=include[72],
     _as_=include[73],
     _at_=include[74],
     _au_=include[75],
     _av_=include[76],
     _aw_=include[77],
     _ax_=include[78],
     _ay_=include[79],
     _az_=include[80],
     _aA_=include[81],
     _aB_=include[82],
     _aC_=include[83],
     _aD_=include[84],
     _aE_=include[85],
     _aF_=include[86],
     _aG_=include[87],
     _aH_=include[88],
     _aI_=include[89],
     _aJ_=include[90],
     _aL_=include[92],
     _aM_=include[93],
     _aN_=include[94],
     _aO_=include[95],
     _aP_=include[96],
     _aQ_=include[97],
     _aR_=include[98],
     _aS_=include[99],
     _aT_=include[100],
     _aU_=include[101],
     _aV_=include[102],
     _aW_=include[103],
     _aX_=include[104],
     _aY_=include[105],
     _aZ_=include[106],
     _a0_=include[107],
     _a1_=include[108],
     _a2_=include[109],
     _a3_=include[110],
     _a4_=include[111],
     _a5_=include[112],
     _a6_=include[113],
     _a7_=include[114],
     _a8_=include[115],
     _a9_=include[116],
     _a__=include[117],
     _a$_=include[118],
     _ba_=include[119],
     _bb_=include[120],
     _bc_=include[121],
     _bd_=include[122],
     _be_=include[123],
     _bf_=include[124],
     _bg_=include[125],
     _bh_=include[126],
     _bi_=include[127],
     _bj_=include[128],
     _bk_=include[129],
     _bl_=include[130],
     _bm_=include[131],
     _bn_=include[132],
     _bo_=include[133],
     _bp_=include[134],
     _bq_=include[135],
     _br_=include[136],
     _bs_=include[137],
     _bt_=include[138],
     _bu_=include[139],
     _bv_=include[140],
     _bw_=include[141],
     _bx_=include[142],
     _by_=include[143],
     _bz_=include[144],
     _bA_=include[145],
     _bB_=include[146],
     _bC_=include[147],
     _bD_=include[148],
     _bE_=include[149],
     _bF_=include[150],
     _bG_=include[151],
     _bH_=include[152],
     _bI_=include[153],
     _bJ_=include[154],
     _bK_=include[155],
     _bL_=include[156],
     _bM_=include[157],
     _bN_=include[158],
     _bO_=include[159],
     _bP_=include[160],
     _bQ_=include[161],
     _bR_=include[162],
     _bS_=include[163],
     _bT_=include[164],
     _bU_=include[165],
     _bV_=include[166],
     _bW_=include[167],
     _bX_=include[168],
     _bY_=include[169],
     _bZ_=include[170],
     _b0_=include[171],
     _b1_=include[172],
     _b2_=include[173],
     _b3_=include[174],
     _b4_=include[175],
     _b5_=include[176],
     _b6_=include[177],
     _b7_=include[178],
     _b8_=include[179],
     _b9_=include[180],
     _b__=include[181],
     _b$_=include[182],
     _ca_=include[183],
     _cb_=include[184],
     _cc_=include[185],
     _cd_=include[186],
     _ce_=include[187],
     _cf_=include[188],
     _cg_=include[189],
     _ch_=include[190],
     _ci_=include[191],
     _cj_=include[192],
     _ck_=include[193],
     _cl_=include[194],
     _cm_=include[195],
     _cn_=include[196],
     _co_=include[197],
     _cp_=include[198],
     _cq_=include[199],
     _cr_=include[200],
     _cs_=include[201],
     _ct_=include[202],
     _cu_=include[203],
     _cv_=include[204],
     _cw_=include[205],
     _cx_=include[206],
     _cy_=include[207],
     _cz_=include[208],
     _cA_=include[209],
     _cB_=include[210],
     _cC_=include[211],
     _cD_=include[212],
     _cE_=include[213],
     _cF_=include[214],
     _cG_=include[215],
     _cH_=include[216],
     _cI_=include[217],
     _cJ_=include[218],
     _cK_=include[219],
     _cL_=include[220],
     _cM_=include[221],
     _cN_=include[222],
     _cO_=include[223],
     _cQ_=include[225],
     _cR_=include[226],
     _cS_=include[227],
     _cT_=include[228],
     _cU_=include[229],
     _cV_=include[230],
     _cW_=include[231],
     _cX_=include[232],
     _cY_=include[233],
     _cZ_=include[234],
     _c0_=include[235],
     _c1_=include[236],
     _c2_=include[237],
     _c3_=include[238],
     _c4_=include[239],
     _c5_=include[240],
     _c6_=include[241],
     _c7_=include[242],
     _c8_=include[243],
     _c9_=include[244],
     _c__=include[245],
     _c$_=include[246],
     _da_=include[247],
     _db_=include[248],
     _dc_=include[249],
     _dd_=include[250],
     _de_=include[251],
     _df_=include[252],
     _dg_=include[253],
     _dh_=include[254],
     _di_=include[255],
     _dj_=include[256],
     _dk_=include[257],
     _dl_=include[258],
     _dm_=include[259],
     _dn_=include[260],
     _do_=include[261],
     _dp_=include[262],
     _dq_=include[263],
     _dr_=include[264],
     _ds_=include[265],
     _dt_=include[266],
     _du_=include[267],
     _dv_=include[268],
     _dw_=include[269],
     _dx_=include[270],
     _dy_=include[271],
     _dz_=include[272],
     _dA_=include[273],
     _dB_=include[274],
     _dC_=include[275],
     _dD_=include[276],
     _dE_=include[277],
     _dF_=include[278],
     _dG_=include[279],
     _dH_=include[280],
     _dI_=include[281],
     _dJ_=include[282],
     _dK_=include[283],
     _dL_=include[284],
     _dM_=include[285],
     _dN_=include[286],
     _dO_=include[287],
     _dP_=include[288],
     _dQ_=include[289],
     _dR_=include[290],
     _dS_=include[291],
     _dT_=include[292],
     _dU_=include[293],
     _dV_=include[294],
     _dW_=include[295],
     _dX_=include[296],
     _dY_=include[297],
     _dZ_=include[298],
     _d0_=include[299],
     _d1_=include[300],
     _d2_=include[301],
     _d3_=include[302],
     _d4_=include[303],
     _d5_=include[304],
     _d6_=include[305],
     _d7_=include[306],
     _d8_=include[307],
     _d9_=include[308],
     _d__=include[309],
     _d$_=include[310],
     _ea_=include[311],
     _eb_=include[312],
     _ec_=include[313],
     _ed_=include[314],
     _ee_=include[315],
     _ef_=include[316],
     _eg_=include[317],
     _eh_=include[318],
     _ei_=include[319],
     _ej_=include[320],
     _ek_=include[321],
     _el_=include[322],
     _em_=include[323],
     _en_=include[324],
     _eo_=include[325],
     _ep_=include[326],
     _eq_=include[327],
     _er_=include[328],
     _es_=include[329],
     _et_=include[330],
     _eu_=include[331],
     _ev_=include[332],
     _ew_=include[333],
     _ex_=include[334],
     _ey_=include[335],
     _ez_=include[336],
     _eA_=include[337],
     _eB_=include[338],
     _eC_=include[339],
     _eD_=include[340],
     _eE_=include[341],
     _eF_=include[342],
     _eG_=include[343],
     _eH_=include[344],
     _eI_=include[345],
     _eJ_=include[346],
     _eK_=include[347],
     _eL_=include[348],
     _eM_=include[349],
     _eN_=include[350],
     _eO_=include[351],
     _eP_=include[352],
     _eQ_=include[353],
     _eR_=include[354],
     _eS_=include[355],
     _eT_=include[356],
     _eU_=include[357],
     _eV_=include[358],
     _eW_=include[359],
     _eX_=include[360],
     _eY_=include[361],
     _eZ_=include[362],
     _e0_=include[363],
     _e1_=include[364],
     _e2_=include[365],
     _e3_=include[366],
     _e4_=include[367],
     _e5_=include[368],
     _e6_=include[369],
     _e7_=include[370],
     _e8_=include[371],
     _e9_=include[372],
     _e__=include[373],
     _e$_=include[374],
     _fa_=include[375],
     _fb_=include[376],
     _fc_=include[377],
     _fd_=include[378],
     _fe_=include[379],
     _ff_=include[380],
     _fg_=include[381],
     _fh_=include[382],
     _fi_=include[383],
     _fj_=include[384],
     _fk_=include[385],
     _fl_=include[386],
     _fm_=include[387],
     _fn_=include[388],
     _fo_=include[389],
     _fp_=include[390],
     _fq_=include[391],
     _fr_=include[392],
     _fs_=include[393],
     _ft_=include[394],
     _fu_=include[395],
     _fv_=include[396],
     _fw_=include[397],
     _fx_=include[398],
     _fy_=include[399],
     _fz_=include[400],
     _fA_=include[401],
     _fB_=include[402],
     _fC_=include[403],
     _fD_=include[404],
     _fE_=include[405],
     _fF_=include[406],
     _fG_=include[407],
     _fH_=include[408],
     _fI_=include[409],
     _fJ_=include[410],
     _fK_=include[411],
     _fL_=include[412],
     _fM_=include[413],
     _fN_=include[414],
     _fO_=include[415],
     _fP_=include[416],
     _fQ_=include[417],
     _fR_=include[418],
     _fS_=include[419],
     _fT_=include[420],
     _fU_=include[421],
     _fV_=include[422],
     _fW_=include[423],
     _fX_=include[424],
     _fY_=include[425],
     _fZ_=include[426],
     _f0_=include[427],
     _f1_=include[428],
     _f2_=include[429],
     _f3_=include[430],
     _f4_=include[431],
     _f5_=include[432],
     _f6_=include[433],
     _f7_=include[434],
     _f8_=include[435],
     _f9_=include[436],
     _f__=include[437],
     _f$_=include[438],
     _ga_=include[439],
     _gb_=include[440],
     _gc_=include[441],
     _gd_=include[442],
     _ge_=include[443],
     _gf_=include[444],
     _gg_=include[445],
     _gh_=include[446],
     _gi_=include[447],
     _gj_=include[448],
     _gk_=include[449],
     _gl_=include[450],
     _gm_=include[451],
     _gn_=include[452],
     _go_=include[453],
     _gp_=include[454],
     _gq_=include[455],
     _gr_=include[456],
     _gs_=include[457],
     _gt_=include[458],
     _gu_=include[459],
     _gv_=include[460],
     _gw_=include[461],
     _gx_=include[462],
     _gy_=include[463],
     _gz_=include[464],
     _gA_=include[465],
     _gB_=include[466],
     _gC_=include[467],
     _gD_=include[468],
     _gE_=include[469],
     _gF_=include[470],
     _gG_=include[471],
     _gH_=include[472],
     _gI_=include[473],
     _gJ_=include[474],
     _gK_=include[475],
     _gL_=include[476],
     _gM_=include[477],
     _gN_=include[478],
     _gO_=include[479],
     _gP_=include[480],
     _gQ_=include[481],
     _gR_=include[482],
     _gS_=include[483],
     _gT_=include[484],
     _gU_=include[485],
     _gV_=include[486],
     _gW_=include[487],
     _gX_=include[488],
     _gY_=include[489],
     _gZ_=include[490],
     _g0_=include[491],
     _g1_=include[492],
     _g2_=include[493],
     _g3_=include[494],
     _g4_=include[495],
     _g5_=include[496],
     _g6_=include[497],
     _g7_=include[498],
     _g8_=include[499],
     _g9_=include[500],
     _g__=include[501],
     _g$_=include[502],
     _ha_=include[503],
     _hb_=include[504],
     _hc_=include[505],
     _hd_=include[506],
     _he_=include[507],
     _hf_=include[508],
     _hg_=include[509],
     _hh_=include[510],
     _hi_=include[511],
     _hj_=include[512],
     _hk_=include[513],
     _hl_=include[514],
     _hm_=include[515],
     _hn_=include[516],
     _ho_=include[517],
     _hp_=include[518],
     _hq_=include[519],
     _hr_=include[520],
     _hs_=include[521],
     _ht_=include[522],
     _hu_=include[523],
     _hv_=include[524],
     _hw_=include[525],
     _hx_=include[526],
     _hy_=include[527],
     _hz_=include[528],
     _hA_=include[529],
     _hB_=include[530],
     _hC_=include[531],
     _hD_=include[532],
     _hE_=include[533],
     _hF_=include[534],
     _hG_=include[535],
     _hH_=include[536],
     _hI_=include[537],
     _hJ_=include[538],
     _hK_=include[539],
     _hL_=include[540],
     _hM_=include[541],
     _hN_=include[542],
     _hO_=include[543],
     _hP_=include[544],
     _hQ_=include[545],
     _hR_=include[546],
     _hS_=include[547],
     _hT_=include[548],
     _hU_=include[549],
     _hV_=include[550],
     _hW_=include[551],
     _hX_=include[552],
     _hY_=include[553],
     _hZ_=include[554],
     _h0_=include[555],
     _h1_=include[556],
     _h2_=include[557],
     _h3_=include[558],
     _h4_=include[559],
     _h5_=include[560],
     _h6_=include[561],
     _h7_=include[562],
     _h8_=include[563],
     _h9_=include[564],
     _h__=include[565],
     _h$_=include[566],
     _ia_=include[567],
     _ib_=include[568],
     _ic_=include[569],
     _id_=include[570],
     _ie_=include[571],
     _if_=include[572],
     _ig_=include[573],
     _ih_=include[574],
     _ii_=include[575],
     _ij_=include[576];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_weak_hashtbl$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Weak_hashtbl_Import=
      [0,
       _a_,
       _b_,
       _c_,
       _d_,
       _e_,
       _f_,
       _g_,
       _h_,
       _i_,
       _j_,
       _k_,
       _l_,
       _m_,
       _n_,
       _o_,
       _p_,
       _q_,
       _r_,
       _s_,
       _t_,
       _u_,
       _v_,
       _w_,
       _x_,
       _y_,
       _z_,
       _A_,
       _B_,
       _C_,
       _D_,
       _E_,
       _F_,
       _G_,
       _H_,
       _I_,
       _J_,
       _K_,
       _L_,
       _M_,
       _N_,
       _O_,
       _P_,
       _Q_,
       _R_,
       _S_,
       _T_,
       _U_,
       _V_,
       _W_,
       _X_,
       _Y_,
       _Z_,
       ___,
       _$_,
       _aa_,
       _ab_,
       _ac_,
       _ad_,
       _ae_,
       _af_,
       _ag_,
       _ah_,
       _ai_,
       _aj_,
       _ak_,
       _al_,
       _am_,
       _an_,
       _ao_,
       _ap_,
       _aq_,
       _ar_,
       _as_,
       _at_,
       _au_,
       _av_,
       _aw_,
       _ax_,
       _ay_,
       _az_,
       _aA_,
       _aB_,
       _aC_,
       _aD_,
       _aE_,
       _aF_,
       _aG_,
       _aH_,
       _aI_,
       _aJ_,
       _aK_,
       _aL_,
       _aM_,
       _aN_,
       _aO_,
       _aP_,
       _aQ_,
       _aR_,
       _aS_,
       _aT_,
       _aU_,
       _aV_,
       _aW_,
       _aX_,
       _aY_,
       _aZ_,
       _a0_,
       _a1_,
       _a2_,
       _a3_,
       _a4_,
       _a5_,
       _a6_,
       _a7_,
       _a8_,
       _a9_,
       _a__,
       _a$_,
       _ba_,
       _bb_,
       _bc_,
       _bd_,
       _be_,
       _bf_,
       _bg_,
       _bh_,
       _bi_,
       _bj_,
       _bk_,
       _bl_,
       _bm_,
       _bn_,
       _bo_,
       _bp_,
       _bq_,
       _br_,
       _bs_,
       _bt_,
       _bu_,
       _bv_,
       _bw_,
       _bx_,
       _by_,
       _bz_,
       _bA_,
       _bB_,
       _bC_,
       _bD_,
       _bE_,
       _bF_,
       _bG_,
       _bH_,
       _bI_,
       _bJ_,
       _bK_,
       _bL_,
       _bM_,
       _bN_,
       _bO_,
       _bP_,
       _bQ_,
       _bR_,
       _bS_,
       _bT_,
       _bU_,
       _bV_,
       _bW_,
       _bX_,
       _bY_,
       _bZ_,
       _b0_,
       _b1_,
       _b2_,
       _b3_,
       _b4_,
       _b5_,
       _b6_,
       _b7_,
       _b8_,
       _b9_,
       _b__,
       _b$_,
       _ca_,
       _cb_,
       _cc_,
       _cd_,
       _ce_,
       _cf_,
       _cg_,
       _ch_,
       _ci_,
       _cj_,
       _ck_,
       _cl_,
       _cm_,
       _cn_,
       _co_,
       _cp_,
       _cq_,
       _cr_,
       _cs_,
       _ct_,
       _cu_,
       _cv_,
       _cw_,
       _cx_,
       _cy_,
       _cz_,
       _cA_,
       _cB_,
       _cC_,
       _cD_,
       _cE_,
       _cF_,
       _cG_,
       _cH_,
       _cI_,
       _cJ_,
       _cK_,
       _cL_,
       _cM_,
       _cN_,
       _cO_,
       _cP_,
       _cQ_,
       _cR_,
       _cS_,
       _cT_,
       _cU_,
       _cV_,
       _cW_,
       _cX_,
       _cY_,
       _cZ_,
       _c0_,
       _c1_,
       _c2_,
       _c3_,
       _c4_,
       _c5_,
       _c6_,
       _c7_,
       _c8_,
       _c9_,
       _c__,
       _c$_,
       _da_,
       _db_,
       _dc_,
       _dd_,
       _de_,
       _df_,
       _dg_,
       _dh_,
       _di_,
       _dj_,
       _dk_,
       _dl_,
       _dm_,
       _dn_,
       _do_,
       _dp_,
       _dq_,
       _dr_,
       _ds_,
       _dt_,
       _du_,
       _dv_,
       _dw_,
       _dx_,
       _dy_,
       _dz_,
       _dA_,
       _dB_,
       _dC_,
       _dD_,
       _dE_,
       _dF_,
       _dG_,
       _dH_,
       _dI_,
       _dJ_,
       _dK_,
       _dL_,
       _dM_,
       _dN_,
       _dO_,
       _dP_,
       _dQ_,
       _dR_,
       _dS_,
       _dT_,
       _dU_,
       _dV_,
       _dW_,
       _dX_,
       _dY_,
       _dZ_,
       _d0_,
       _d1_,
       _d2_,
       _d3_,
       _d4_,
       _d5_,
       _d6_,
       _d7_,
       _d8_,
       _d9_,
       _d__,
       _d$_,
       _ea_,
       _eb_,
       _ec_,
       _ed_,
       _ee_,
       _ef_,
       _eg_,
       _eh_,
       _ei_,
       _ej_,
       _ek_,
       _el_,
       _em_,
       _en_,
       _eo_,
       _ep_,
       _eq_,
       _er_,
       _es_,
       _et_,
       _eu_,
       _ev_,
       _ew_,
       _ex_,
       _ey_,
       _ez_,
       _eA_,
       _eB_,
       _eC_,
       _eD_,
       _eE_,
       _eF_,
       _eG_,
       _eH_,
       _eI_,
       _eJ_,
       _eK_,
       _eL_,
       _eM_,
       _eN_,
       _eO_,
       _eP_,
       _eQ_,
       _eR_,
       _eS_,
       _eT_,
       _eU_,
       _eV_,
       _eW_,
       _eX_,
       _eY_,
       _eZ_,
       _e0_,
       _e1_,
       _e2_,
       _e3_,
       _e4_,
       _e5_,
       _e6_,
       _e7_,
       _e8_,
       _e9_,
       _e__,
       _e$_,
       _fa_,
       _fb_,
       _fc_,
       _fd_,
       _fe_,
       _ff_,
       _fg_,
       _fh_,
       _fi_,
       _fj_,
       _fk_,
       _fl_,
       _fm_,
       _fn_,
       _fo_,
       _fp_,
       _fq_,
       _fr_,
       _fs_,
       _ft_,
       _fu_,
       _fv_,
       _fw_,
       _fx_,
       _fy_,
       _fz_,
       _fA_,
       _fB_,
       _fC_,
       _fD_,
       _fE_,
       _fF_,
       _fG_,
       _fH_,
       _fI_,
       _fJ_,
       _fK_,
       _fL_,
       _fM_,
       _fN_,
       _fO_,
       _fP_,
       _fQ_,
       _fR_,
       _fS_,
       _fT_,
       _fU_,
       _fV_,
       _fW_,
       _fX_,
       _fY_,
       _fZ_,
       _f0_,
       _f1_,
       _f2_,
       _f3_,
       _f4_,
       _f5_,
       _f6_,
       _f7_,
       _f8_,
       _f9_,
       _f__,
       _f$_,
       _ga_,
       _gb_,
       _gc_,
       _gd_,
       _ge_,
       _gf_,
       _gg_,
       _gh_,
       _gi_,
       _gj_,
       _gk_,
       _gl_,
       _gm_,
       _gn_,
       _go_,
       _gp_,
       _gq_,
       _gr_,
       _gs_,
       _gt_,
       _gu_,
       _gv_,
       _gw_,
       _gx_,
       _gy_,
       _gz_,
       _gA_,
       _gB_,
       _gC_,
       _gD_,
       _gE_,
       _gF_,
       _gG_,
       _gH_,
       _gI_,
       _gJ_,
       _gK_,
       _gL_,
       _gM_,
       _gN_,
       _gO_,
       _gP_,
       _gQ_,
       _gR_,
       _gS_,
       _gT_,
       _gU_,
       _gV_,
       _gW_,
       _gX_,
       _gY_,
       _gZ_,
       _g0_,
       _g1_,
       _g2_,
       _g3_,
       _g4_,
       _g5_,
       _g6_,
       _g7_,
       _g8_,
       _g9_,
       _g__,
       _g$_,
       _ha_,
       _hb_,
       _hc_,
       _hd_,
       _he_,
       _hf_,
       _hg_,
       _hh_,
       _hi_,
       _hj_,
       _hk_,
       _hl_,
       _hm_,
       _hn_,
       _ho_,
       _hp_,
       _hq_,
       _hr_,
       _hs_,
       _ht_,
       _hu_,
       _hv_,
       _hw_,
       _hx_,
       _hy_,
       _hz_,
       _hA_,
       _hB_,
       _hC_,
       _hD_,
       _hE_,
       _hF_,
       _hG_,
       _hH_,
       _hI_,
       _hJ_,
       _hK_,
       _hL_,
       _hM_,
       _hN_,
       _hO_,
       _hP_,
       _hQ_,
       _hR_,
       _hS_,
       _hT_,
       _hU_,
       _hV_,
       _hW_,
       _hX_,
       _hY_,
       _hZ_,
       _h0_,
       _h1_,
       _h2_,
       _h3_,
       _h4_,
       _h5_,
       _h6_,
       _h7_,
       _h8_,
       _h9_,
       _h__,
       _h$_,
       _ia_,
       _ib_,
       _ic_,
       _id_,
       _ie_,
       _if_,
       _ig_,
       _ih_,
       _ii_,
       _ij_];
    caml_register_global(22,Weak_hashtbl_Import,"Weak_hashtbl__Import");
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][1],cst_weak_hashtbl$2);
    caml_call1
     (Expect_test_collector[4][1],cst_weak_hashtbl_src_weak_hashtbl_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_weak_hashtbl$3,cst$0);
    var
     _io_=[0,caml_new_string("_")],
     _in_=[0,caml_new_string("_")],
     _ip_=
      [0,[0,caml_new_string("weak_hashtbl/src/weak_hashtbl.ml"),68,2177,2184]],
     _ik_=[0,caml_new_string("thread_safe_run_when_unused_data")],
     _il_=[0,caml_new_string("keys_with_unused_data")],
     _im_=[0,caml_new_string("entry_by_key")];
    function sexp_of_t(of_a,of_b,param)
     {var v_keys_with_unused_data=param[2],v_entry_by_key=param[1],bnds=0;
      function _iz_(_iB_){return 0}
      var
       arg=caml_call1(Sexplib0_Sexp_conv[24],_iz_),
       bnds$0=[0,[1,[0,_ik_,[0,arg,0]]],bnds],
       arg$0=caml_call2(Thread_safe_queue[1],of_a,v_keys_with_unused_data),
       bnds$1=[0,[1,[0,_il_,[0,arg$0,0]]],bnds$0],
       _iA_=caml_call1(Weak_pointer[1],of_b),
       arg$1=caml_call3(Core_kernel_Hashtbl[3],of_a,_iA_,v_entry_by_key),
       bnds$2=[0,[1,[0,_im_,[0,arg$1,0]]],bnds$1];
      return [1,bnds$2]}
    function create(growth_allowed,size,hashable)
     {function _iw_(_iy_){return 0}
      var _ix_=caml_call1(Thread_safe_queue[3],0);
      return [0,
              caml_call4
               (Core_kernel_Hashtbl[79][1],growth_allowed,size,hashable,0),
              _ix_,
              _iw_]}
    var Using_hashable=[0,create];
    function create$0(growth_allowed,size,m)
     {var _iv_=caml_call1(Base_Hashable[3],m);
      return caml_call3(Using_hashable[1],growth_allowed,size,_iv_)}
    function set_run_when_unused_data(t,thread_safe_f)
     {t[3] = thread_safe_f;return 0}
    function remove(t,key)
     {return caml_call2(Core_kernel_Hashtbl[31],t[1],key)}
    function reclaim_space_for_keys_with_unused_data(t)
     {for(;;)
       {if(caml_call2(_aK_,caml_call1(Thread_safe_queue[4],t[2]),0))
         {var
           key=caml_call1(Thread_safe_queue[6],t[2]),
           match=caml_call2(Core_kernel_Hashtbl[52],t[1],key);
          if(match)
           {var entry=match[1];
            if(caml_call1(Weak_pointer[5],entry))remove(t,key)}
          continue}
        return 0}}
    function get_entry(t,key)
     {function _iu_(param){return caml_call1(Weak_pointer[2],0)}
      return caml_call3(Core_kernel_Hashtbl[50],t[1],key,_iu_)}
    function mem(t,key)
     {var match=caml_call2(Core_kernel_Hashtbl[52],t[1],key);
      if(match){var entry=match[1];return caml_call1(Weak_pointer[4],entry)}
      return 0}
    function key_is_using_space(t,key)
     {return caml_call2(Core_kernel_Hashtbl[30],t[1],key)}
    function set_data(t,key,entry,data)
     {caml_call2(Weak_pointer[6],entry,data);
      function _it_(param)
       {caml_call2(Thread_safe_queue[5],t[2],key);return caml_call1(t[3],0)}
      return caml_call2(Core_kernel_Gc[9][3],data,_it_)}
    function replace(t,key,data){return set_data(t,key,get_entry(t,key),data)}
    function add_exn(t,key,data)
     {var entry=get_entry(t,key);
      if(caml_call1(Weak_pointer[4],entry))
       {var
         _iq_=function(param){return _in_},
         _ir_=function(param){return _io_};
        caml_call5
         (_cP_,
          0,
          _ip_,
          cst_Weak_hashtbl_add_exn_of_key_in_use,
          t,
          function(_is_){return sexp_of_t(_ir_,_iq_,_is_)})}
      return set_data(t,key,entry,data)}
    function find(t,key)
     {var match=caml_call2(Core_kernel_Hashtbl[52],t[1],key);
      if(match){var entry=match[1];return caml_call1(Weak_pointer[3],entry)}
      return 0}
    function find_or_add(t,key,default$0)
     {var entry=get_entry(t,key),match=caml_call1(Weak_pointer[3],entry);
      if(match){var v=match[1];return v}
      var data=caml_call1(default$0,0);
      set_data(t,key,entry,data);
      return data}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_weak_hashtbl$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumulator[1][2],0);
    var
     Weak_hashtbl$0=
      [0,
       sexp_of_t,
       create$0,
       Using_hashable,
       mem,
       find,
       find_or_add,
       remove,
       add_exn,
       replace,
       key_is_using_space,
       reclaim_space_for_keys_with_unused_data,
       set_run_when_unused_data];
    caml_register_global(29,Weak_hashtbl$0,"Weak_hashtbl");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ3ZWFrX2hhc2h0YmwuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==