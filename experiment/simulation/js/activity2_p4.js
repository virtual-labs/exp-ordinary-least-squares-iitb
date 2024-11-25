function activity2_p4() {
    let btn = (document.getElementById('act2-p3-btn-4'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Calculate SS<sub>R</sub> and MR<sub>es</sub>', 'act2-ssr-mres-div');
    maindiv.innerHTML += `
      ${btn_text}
      <div class="collpase divide" id="act2-ssr-mres-div">
         <h4 style='text-align: left;'  class='fb-800 fs-20px'>Step 4: </h4>
         <div>
            We have,

            <div class="row">
               <div class="col-lg-3">
                  $$
                     \\hat{\\beta_{T_1}} = ${beta_t1}
                  $$
               </div>
               <div class="col-lg-3">
                  $$ \\hat{\\beta_{T_0}} = ${beta_t0} $$
               </div>
               <div class="col-lg-3">
                  $$ \\bar{x} = ${x_bar_val_a2} $$
               </div>
               <div class="col-lg-3">
                  $$ \\bar{Y} = ${Y_bar_val_a2} $$
               </div>
            </div>
         </div>

         The regression equation of given data set is,
         $$
         Y' = \\hat{\\beta_{T_0}} + \\hat{\\beta_{T_1}}x
         $$
         (The estimated value of a and b will be displayed in equation)
         <br><br>
         Calculate Y' and Y-Y':
         <br><br>
         <div id='act2-p4-tb-box1'></div>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p4-btn-1' onclick='a2_ssr_mres();' >Next</button>
      </div>
   `;
    generate_a2_p4_table_data1();
    let tb_box = (document.getElementById('act2-p4-tb-box1'));
    let header = ['x', 'Y', "(Y-Y')", "(Y-Y')<sup>2</sup>"];
    let tab = new Verify_Rows_Cols(header, act2_p4_table_data_1, [0], [[2, 3]], '', tb_box, true, true, show_a2_p4_btn1);
    tab.load_table();
    let tab_ele = tab.get_table_element();
    tab_ele.style.textAlign = 'center';
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-ssr-mres-div');
    }, 150);
}
function show_a2_p4_btn1() {
    let btn = (document.getElementById('act2-p4-btn-1'));
    btn.style.display = 'block';
}
function generate_a2_p4_table_data1() {
    act2_p4_table_data_1 = [];
    SSr_a2 = 0;
    MRes_a2 = 0;
    y_dash_a2 = [];
    let temp = 0;
    for (let i = 0; i < x_a2.length; i++) {
        let temp_ar = [];
        temp = 0;
        let y_dash_i = beta_t0 + beta_t1 * x_a2[i];
        temp = Math.pow((Y_a2[i][0] - y_dash_i), 2);
        y_dash_a2.push(parseFloat(y_dash_i.toFixed(3)));
        temp_ar.push(x_a2[i]);
        temp_ar.push(Y_a2[i][0]);
        temp_ar.push(parseFloat((Y_a2[i][0] - y_dash_i).toFixed(3)));
        temp_ar.push(parseFloat(temp.toFixed(3)));
        SSr_a2 += temp;
        act2_p4_table_data_1.push(temp_ar);
    }
    SSr_a2 = parseFloat(SSr_a2.toFixed(3));
    MRes_a2 = parseFloat((SSr_a2 / (N_a2 - 2)).toFixed(3));
}
function a2_ssr_mres() {
    let btn = (document.getElementById('act2-p4-btn-1'));
    btn && btn.remove();
    let div = (document.getElementById('act2-ssr-mres-div'));
    div.innerHTML += `
      <br><br>
      <div id='act2-ssr-div'>
         <div class="row justify-content-center" style="align-items:center">
            <div class="col-lg-3">
               $$ SS_R = \\sum(Y-Y')^2 =  $$
            </div>
            <div class="col-lg-4">
               <input type='number' id='act2-ssr-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center">
            <div class="col-lg-3">
               $$ MR_{es} = \\frac{SS_R}{n-2} =  $$
            </div>
            <div class="col-lg-4">
               <input type='number' id='act2-mres-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <div class="text-center">
            <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p4-btn-2'    onclick='a2_verify_ssr_mres();' >Verify</button>
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p4-btn-3' onclick='activity2_p5()' >Next</button>
      
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_ssr_mres() {
    let div = (document.getElementById('act2-ssr-div'));
    let btn = (document.getElementById('act2-p4-btn-3'));
    let ssr_inp = (document.getElementById('act2-ssr-inp'));
    let mres_inp = (document.getElementById('act2-mres-inp'));
    console.log(SSr_a2, MRes_a2);
    if (!verify_values(parseFloat(ssr_inp.value), SSr_a2)) {
        ssr_inp.style.border = '1px solid red';
        alert('Incorrect SSr Value');
        return;
    }
    else {
        ssr_inp.style.border = '1px solid #ced4da';
        ssr_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mres_inp.value), MRes_a2)) {
        mres_inp.style.border = '1px solid red';
        alert('Incorrect MRes Value');
        return;
    }
    else {
        mres_inp.style.border = '1px solid #ced4da';
        mres_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    div.innerHTML = '';
    div.innerHTML = `
      <div class="row justify-content-center" style="align-items:center">
         <div class="col-lg-5">
            $$ SS_R = \\sum(Y-Y')^2 = ${SSr_a2} $$
         </div>
         <div class="col-lg-5">
            $$ MR_{es} = \\frac{SS_R}{n-2} = ${MRes_a2} $$
         </div>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    btn.style.display = 'block';
}
// activity2_p4();
//# sourceMappingURL=activity2_p4.js.map