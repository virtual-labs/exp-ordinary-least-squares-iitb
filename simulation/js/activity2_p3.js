function activity2_p3() {
    let btn = (document.getElementById('act2-p2-btn-6'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Total Least Square Estimators', 'gaussian-div');
    //S - lambda_0*I
    //lambda_min = lambda_0
    S_lambdaMinI = [];
    for (let i = 0; i < S.length; i++) {
        let temp = [];
        for (let j = 0; j < S[i].length; j++) {
            if (i == j) {
                temp.push(parseFloat((S[i][j] - lambda_min).toFixed(3)));
            }
            else {
                temp.push(parseFloat((S[i][j] - 0).toFixed(3)));
            }
        }
        S_lambdaMinI.push(temp);
    }
    console.log('S_lambdaMinI', S_lambdaMinI);
    maindiv.innerHTML += `
      ${btn_text}
      <div class="collapse divide" id="gaussian-div">
         <h4 style="text-align:left" class="fb-800 fs-20px">Step 3:</h4>
         <p class="fs-16px">
            Now we will find the eigen vectors corresponding to &lambda;<sub>0</sub>.
         </p>
         <br>
         <p class="fs-16px">
            Solve the following equation,
         </p>

         $$
            (S - \λ_0I)v = 0
         $$

         <div>
            Here,
            $$
               S = \\begin{bmatrix}
                  p_1 & p_2 \\\\
                  p_3 & p_4
               \\end{bmatrix}
               =
               \\begin{bmatrix}
                  ${S[0][0]} & ${S[0][1]} \\\\
                  ${S[1][0]} & ${S[1][1]}
               \\end{bmatrix}
            $$
            <br>
            $$
               v = \\begin{bmatrix}
                  \\hat{v_1} \\\\
                  \\hat{v_2}
               \\end{bmatrix}
            $$
         </div>

         <div>
         Now, we will solve following,

         $$
            (S-\\lambda_0I) = \\begin{bmatrix}
               p_1 & p_2 \\\\
               p_3 & p_4
            \\end{bmatrix}

            -

            \\begin{bmatrix}
               \\lambda_0 & 0 \\\\
               0 & \\lambda_0
            \\end{bmatrix}
         $$
         </div>
         <div id="act2-p3-tb-box1">
         (S - &lambda;<sub>0</sub>I) = 
         </div>
      </div>
   `;
    let tb_box = (document.getElementById('act2-p3-tb-box1'));
    let new_table = new Verify_Rows_Cols([], S_lambdaMinI, [0, 1], [
        [0, 1],
        [0, 1],
    ], '', tb_box, false, false, a2_p3_load_matrix);
    new_table.load_table();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('gaussian-div');
    }, 150);
}
function a2_p3_load_matrix() {
    let tb_box = (document.getElementById('act2-p3-tb-box1'));
    let div = (document.getElementById('gaussian-div'));
    let text = `(S-\\lambda_0I) = \\begin{bmatrix}
         p_1' & p_2' \\\\
         p_3' & p_4'
      \\end{bmatrix}
   `;
    tb_box.innerHTML = '';
    let new_mat = new Matrix(text, S_lambdaMinI, tb_box);
    new_mat.load_matrix();
    v2 = 0;
    v2 = parseFloat((-S_lambdaMinI[1][0] / S_lambdaMinI[1][1]).toFixed(3));
    div.innerHTML += `
      <br>
      <p class='fs-16px'>
         Solve the following by using Gaussian Elimination method.
      </p>

      $$
         \\begin{bmatrix}
            p_1' & p_2' \\\\
            p_3' & p_4'
         \\end{bmatrix}

         \\begin{bmatrix}
            \\hat{v_1} \\\\
            \\hat{v_2}
         \\end{bmatrix}
         =
         \\begin{bmatrix}
            0 \\\\
            0
         \\end{bmatrix}
      $$

      <div id='v2-div'>
      Here,
      $$ \\hat{v_1} = ${v1} $$

      Find,

      <div class="row justify-content-center" style="align-items:center">
         <div class="col-lg-2">
            $$ \\hat{v_2} = $$
         </div>
         <div class="col-lg-4">
            <span class="fs-16px" id="act2-v2-dsp"></span>
            <input type='number' id='act2-v2-inp' class='form-control fs-16px' />
         </div>
      </div>
      </div>
      <br>
      <div class="text-center">
         <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p3-btn-1' onclick='a2_verify_v2();' >Verify</button>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p3-btn-2' onclick='total_least_square()' >Next</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_v2() {
    let btn = (document.getElementById('act2-p3-btn-1'));
    let next_btn = (document.getElementById('act2-p3-btn-2'));
    let v2_inp = (document.getElementById('act2-v2-inp'));
    let v2_div = (document.getElementById('v2-div'));
    console.log(v2);
    if (!verify_values(parseFloat(v2_inp.value), v2)) {
        v2_inp.style.border = '1px solid red';
        alert('Incorrect v_2 cap Value');
        return;
    }
    else {
        v2_inp.style.border = '1px solid #ced4da';
        v2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    v2_inp.remove();
    v2_div.innerHTML = '';
    v2_div.innerHTML = `
   <br>
      $$
         \\hat{v_1} = 1 \\ \\ \\ \\ \\ \\ \\ \\hat{v_2} = ${v2}
      $$
   `;
    btn && btn.remove();
    next_btn.style.display = 'block';
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function total_least_square() {
    let btn = (document.getElementById('act2-p3-btn-2'));
    btn && btn.remove();
    let div = (document.getElementById('gaussian-div'));
    beta_t0 = 0;
    beta_t1 = 0;
    beta_t1 = parseFloat((-(v1 / v2)).toFixed(3));
    beta_t0 = parseFloat((Y_bar_val_a2 - beta_t1 * x_bar_val_a2).toFixed(3));
    div.innerHTML += `
      <br>
      <div>
         Now we will estimate the Total Least Square Estimators
         <div class="row justify-content-between">
            <div class="row col-lg-6 align-items-center ">
               <div class="col-lg-6">
                  $$
                     \\hat{\\beta_{T_1}} = -\\frac{\\hat{v_1}}{\\hat{v_2}} = 
                  $$
               </div>
               <div class='col-lg-6'>
                  <span class="fs-18px fb-600" id="act2-beta-t1-dsp"></span>
                  <input type='number' id='act2-beta-t1-inp' class='form-control fs-16px' />
               </div>
            </div>
            <div class="row col-lg-6 align-items-center ">
               <div class="col-lg-6">
                  $$
                     \\hat{\\beta_{T_0}} = \\bar{Y} - \\hat{\\beta_{T_1}} \\bar{X} = 
                  $$
               </div>
               <div class='col-lg-6'>
                  <span class="fs-18px fb-600" id="act2-beta-t0-dsp"></span>
                  <input type='number' id='act2-beta-t0-inp' class='form-control fs-16px' />
               </div>
            </div>      
         </div>
         <div class="text-center">
            <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p3-btn-3' onclick='a2_verify_total_least_square();' >Verify</button>
            <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p3-btn-4' onclick='activity2_p4()' >Next</button>
      </div>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_total_least_square() {
    let btn = (document.getElementById('act2-p3-btn-3'));
    let next_btn = (document.getElementById('act2-p3-btn-4'));
    let beta_t1_inp = (document.getElementById('act2-beta-t1-inp'));
    let beta_t1_dsp = (document.getElementById('act2-beta-t1-dsp'));
    let beta_t0_inp = (document.getElementById('act2-beta-t0-inp'));
    let beta_t0_dsp = (document.getElementById('act2-beta-t0-dsp'));
    console.log(beta_t1, beta_t0);
    if (!verify_values(parseFloat(beta_t1_inp.value), beta_t1)) {
        beta_t1_inp.style.border = '1px solid red';
        alert('Incorrect &beta;&#770;_T_1 Value');
        return;
    }
    else {
        beta_t1_inp.style.border = '1px solid #ced4da';
        beta_t1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(beta_t0_inp.value), beta_t0)) {
        beta_t0_inp.style.border = '1px solid red';
        alert('Incorrect &beta;&#770;_T_0 Value');
        return;
    }
    else {
        beta_t0_inp.style.border = '1px solid #ced4da';
        beta_t0_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    beta_t1_inp.remove();
    beta_t0_inp.remove();
    beta_t1_dsp.innerText = beta_t1.toString();
    beta_t0_dsp.innerText = beta_t0.toString();
    btn && btn.remove();
    next_btn.style.display = 'block';
}
// activity2_p3();
//# sourceMappingURL=activity2_p3.js.map