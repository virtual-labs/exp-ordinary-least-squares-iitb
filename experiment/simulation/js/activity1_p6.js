function activity1_p6() {
    let btn = (document.getElementById('act1-p5-btn-1'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text("Calculate Y'", 'y-dash-div');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="y-dash-div">
         <h4 style='text-align: left;'  class='fb-800 fs-20px'>Step 6: </h4>
         Now we will consider

         $$
         \\hat{\\beta} = \\begin{bmatrix}
         \\hat{\\beta_0} & \\hat{\\beta_1}
         \\end{bmatrix}
         $$

         Now comparing estimated β&#770; and above expression we have,

         $$
         \\hat{\\beta_0} = ${beta_cap0} \\quad \\quad
         \\hat{\\beta_1} = ${beta_cap1} \\quad \\quad  
         \\bar{x} = \\frac {\\Sigma{x}}{n} = ${parseFloat((sum_x / N).toFixed(3))} \\quad \\quad
         \\bar{Y} = \\frac {\\Sigma{Y}}{n} = ${parseFloat((sum_Y / N).toFixed(3))}
         $$

         The regression equation of given data set is,
         $$
         Y' = \\hat{\\beta_0} + \\hat{\\beta_1}x
         $$
         (The estimated value of a and b will be displayed in equation)
         <br><br>
         Using the above values and formulae, complete the following table:
         <br><br>
         <div id='act1-p6-tb-box1'></div>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p6-btn-1' onclick='ssr_mres();' >Next</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    let tb_box = (document.getElementById('act1-p6-tb-box1'));
    let header = [
        'x',
        'Y',
        '(x - x&#x0305;)<sup>2</sup>',
        '(Y-Y&#x0305;)<sup>2</sup>',
        "Y'",
        "(Y-Y')",
        "(Y-Y')<sup>2</sup>",
        '(x - x&#x0305;)(Y-Y&#x0305;)',
    ];
    generate_act1_p6_table_data_1();
    let tab = new Verify_Rows_Cols(header, act1_p6_table_data_1, [0], [[2, 3, 4, 5, 6, 7]], '', tb_box, true, true, show_btn1);
    tab.load_table();
    let tab_ele = tab.get_table_element();
    tab_ele.style.textAlign = 'center';
    hide_all_steps();
    setTimeout(() => {
        show_step('y-dash-div');
    }, 150);
}
function show_btn1() {
    let btn = (document.getElementById('act1-p6-btn-1'));
    btn.style.display = 'block';
}
function generate_act1_p6_table_data_1() {
    act1_p6_table_data_1 = [];
    SSr = 0;
    MRes = 0;
    y_dash = [];
    for (let i = 0; i < X.length; i++) {
        let y_dash_i = 0;
        for (let j = 0; j < beta_cap.length; j++) {
            y_dash_i += beta_cap[j][0] * Math.pow(x[i], j);
        }
        y_dash.push(parseFloat(y_dash_i.toFixed(3)));
        let x_x_bar = x[i] - x_bar_val;
        let y_y_bar = Y[i][0] - Y_bar_val;
        let ar = [];
        ar.push(x[i]);
        ar.push(Y[i][0]);
        ar.push(parseFloat((Math.pow(x_x_bar, 2)).toFixed(3)));
        ar.push(parseFloat((Math.pow(y_y_bar, 2)).toFixed(3)));
        ar.push(y_dash[i]);
        ar.push(parseFloat((Y[i][0] - y_dash_i).toFixed(3)));
        ar.push(parseFloat((Math.pow((Y[i][0] - y_dash_i), 2)).toFixed(3)));
        ar.push(parseFloat((x_x_bar * y_y_bar).toFixed(3)));
        act1_p6_table_data_1.push(ar);
        SSr += Math.pow((Y[i][0] - y_dash_i), 2);
    }
    SSr = parseFloat(SSr.toFixed(3));
    MRes = parseFloat((SSr / (N - 2)).toFixed(3));
}
function ssr_mres() {
    let btn = (document.getElementById('act1-p6-btn-1'));
    btn && btn.remove();
    let div = (document.getElementById('y-dash-div'));
    let text = `
      <br><br>
      <div class="fs-16px" id="ssr-div">
         <div class="row justify-content-center " style="align-items:center;">
            <div class="col-lg-3">
               $$ SS_R = \\sum(Y-Y')^2 = $$
            </div>
            <div class="col-lg-4">
               <input type='number' id='ssr-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row justify-content-center " style="align-items:center;">
            <div class="col-lg-3">
               $$ MR_{es} = \\frac{SS_R}{n-2} =  $$
            </div>
            <div class="col-lg-4">
               <input type='number' id='mres-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <div class="text-center">
            <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p6-btn-2' onclick='verify_ssr_mres();' >Verify</button>
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p6-btn-3' onclick='activity1_p7();' >Next</button>
   `;
    div.innerHTML += text;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_ssr_mres() {
    let div = (document.getElementById('ssr-div'));
    let btn = (document.getElementById('act1-p6-btn-3'));
    let ssr_inp = (document.getElementById('ssr-inp'));
    let mres_inp = (document.getElementById('mres-inp'));
    console.log(SSr, MRes);
    if (!verify_values(parseFloat(ssr_inp.value), SSr)) {
        ssr_inp.style.border = '1px solid red';
        alert('Incorrect SSr value');
        return;
    }
    else {
        ssr_inp.style.border = '1px solid #ced4da';
        ssr_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mres_inp.value), MRes)) {
        mres_inp.style.border = '1px solid red';
        alert('Incorrect MRes value');
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
         $$ SS_R = \\sum(Y-Y')^2 = ${SSr} $$
      </div>
      <div class="col-lg-5">
         $$ MR_{es} = \\frac{SS_R}{n-2} = ${MRes} $$
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    btn.style.display = 'block';
}
// activity1_p6();
//# sourceMappingURL=activity1_p6.js.map