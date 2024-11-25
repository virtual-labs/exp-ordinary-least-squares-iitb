function activity2_p1() {
    let btn = (document.getElementById('act2-btn-3'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Calculate Var(X), Var(Y), Cov(X,Y)', 'act2-p1-div');
    maindiv.innerHTML += `
      ${btn_text}
      <div class="collapse divide center-text" id="act2-p1-div">
         <div class="fs-16px" id="var-x-var-y-div">
            <div class="row justify-content-evenly">
               <div class="col-lg-6 row" style="justify-content:left;align-items:center;">
                  <div class="col-lg-7">
                     $$
                        S_{xx} = \\sum(x - \\bar{x})^2 =
                     $$
                  </div>
                  <div class="col-lg-5">
                     <input type='number' id='act2-sxx-inp' class='form-control fs-16px' />
                  </div>
               </div>
               <div class="col-lg-6 row" style="justify-content:left;align-items:center;">
                  <div class="col-lg-7">
                     $$
                     Var(X) = \\frac{S_{xx}}{n-1} =
                     $$
                  </div>
                  <div class="col-lg-5">
                     <input type='number' id='act2-var-x-inp' class='form-control fs-16px' />
                  </div>
               </div>
            </div>
            <div class="row justify-content-evenly">
               <div class="col-lg-6 row" style="justify-content:left;align-items:center;">
                  <div class="col-lg-7">
                     $$
                        S_{yy} = \\sum(Y - \\bar{Y})^2 =
                     $$
                  </div>
                  <div class="col-lg-5">
                     <input type='number' id='act2-syy-inp' class='form-control fs-16px' />
                  </div>
               </div>
               <div class="col-lg-6 row" style="justify-content:left;align-items:center;">
                  <div class="col-lg-7">
                     $$
                        Var(Y) = \\frac{S_{yy}}{n-1} =
                     $$
                  </div>
                  <div class="col-lg-5">
                     <input type='number' id='act2-var-y-inp' class='form-control fs-16px' />
                  </div>
               </div>
            </div>
            <div class="row justify-content-evenly">
               <div class="col-lg-6 row" style="justify-content:left;align-items:center;">
                  <div class="col-lg-7">
                     $$
                        S_{xy} = \\sum(x - \\bar{x})(Y - \\bar{Y}) =
                     $$
                  </div>
                  <div class="col-lg-5">
                     <input type='number' id='act2-sxy-inp' class='form-control fs-16px' />
                  </div>
               </div>
               <div class="col-lg-6 row" style="justify-content:left;align-items:center;">
                  <div class="col-lg-7">
                     $$
                        Cov(X,Y) = \\frac{S_{xy}}{n-1} =
                     $$
                  </div>
                  <div class="col-lg-5">
                     <input type='number' id='act2-cov-inp' class='form-control fs-16px' />
                  </div>
               </div>
            </div>
            <br>
            <div class="text-center">
               <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p1-btn-1' onclick='a2_verify_sxx_syy();' >Verify</button>
            </div>
         </div>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p1-btn-2' onclick='covariance_matrix()' >Next</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-p1-div');
    }, 150);
}
function covariance_matrix() {
    let btn = (document.getElementById('act2-p1-btn-2'));
    btn && btn.remove();
    let div = (document.getElementById('act2-p1-div'));
    div.innerHTML += `
      <br>
      <div class="fs-16px" style="text-align: left">
         We have the following terms.
         <br>
         We will determine the Covariance matrix as follows

         $$
            S = \\begin{bmatrix}
            Var(X) & Cov(X,Y) \\\\
            Cov(X,Y) & Var(Y)
            \\end{bmatrix}
         $$
         <div id="act2-p1-tb-box-1">
            So, S = 
         </div>
      </div>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p1-btn-3' onclick='activity2_p2()' >Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    // S = [];
    S[0][0] = var_x;
    S[0][1] = cov;
    S[1][0] = cov;
    S[1][1] = var_Y;
    let tb_box = (document.getElementById('act2-p1-tb-box-1'));
    let new_table = new Verify_Rows_Cols([], S, [0, 1], [
        [0, 1],
        [0, 1],
    ], '', tb_box, true, false, move_to_activity2_p2);
    new_table.load_table();
}
function a2_verify_sxx_syy() {
    let div = (document.getElementById('var-x-var-y-div'));
    let btn = (document.getElementById('act2-p1-btn-2'));
    let sxx_inp = (document.getElementById('act2-sxx-inp'));
    let syy_inp = (document.getElementById('act2-syy-inp'));
    let sxy_inp = (document.getElementById('act2-sxy-inp'));
    let var_x_inp = (document.getElementById('act2-var-x-inp'));
    let var_y_inp = (document.getElementById('act2-var-y-inp'));
    let cov_inp = (document.getElementById('act2-cov-inp'));
    console.log(Sxx_a2, Syy_a2, Sxy_a2);
    console.log(var_x, var_Y, cov);
    if (!verify_values(parseFloat(sxx_inp.value), Sxx_a2)) {
        sxx_inp.style.border = '1px solid red';
        alert('Incorrect Sxx Value');
        return;
    }
    else {
        sxx_inp.style.border = '1px solid #ced4da';
        sxx_inp.disabled = true;
    }
    if (!verify_values(parseFloat(syy_inp.value), Syy_a2)) {
        syy_inp.style.border = '1px solid red';
        alert('Incorrect Syy Value');
        return;
    }
    else {
        syy_inp.style.border = '1px solid #ced4da';
        syy_inp.disabled = true;
    }
    if (!verify_values(parseFloat(sxy_inp.value), Sxy_a2)) {
        sxy_inp.style.border = '1px solid red';
        alert('Incorrect Sxy Value');
        return;
    }
    else {
        sxy_inp.style.border = '1px solid #ced4da';
        sxy_inp.disabled = true;
    }
    if (!verify_values(parseFloat(var_x_inp.value), var_x)) {
        var_x_inp.style.border = '1px solid red';
        alert('Incorrect Var(X) Value');
        return;
    }
    else {
        var_x_inp.style.border = '1px solid #ced4da';
        var_x_inp.disabled = true;
    }
    if (!verify_values(parseFloat(var_y_inp.value), var_Y)) {
        var_y_inp.style.border = '1px solid red';
        alert('Incorrect Var(Y) Value');
        return;
    }
    else {
        var_y_inp.style.border = '1px solid #ced4da';
        var_y_inp.disabled = true;
    }
    if (!verify_values(parseFloat(cov_inp.value), cov)) {
        cov_inp.style.border = '1px solid red';
        alert('Incorrect Cov(X,Y) Value');
        return;
    }
    else {
        cov_inp.style.border = '1px solid #ced4da';
        cov_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    div.innerHTML = '';
    div.innerHTML = `
   <div class="row justify-content-evenly">
      <div class="col-lg-6 row" style="justify-content:center;align-items:center;">
         <div class="col-lg-7">
            $$ S_{xx} = \\sum(x - \\bar{x})^2 = ${Sxx_a2}$$
         </div>
      </div>
      <div class="col-lg-6 row" style="justify-content:center;align-items:center;">
         <div class="col-lg-7">
            $$ Var(X) = \\frac{S_{xx}}{n-1} = ${var_x} $$
         </div>
      </div>
   </div>
   <div class="row justify-content-evenly">
      <div class="col-lg-6 row" style="justify-content:center;align-items:center;">
         <div class="col-lg-7">
            $$ S_{yy} = \\sum(Y - \\bar{Y})^2 = ${Syy_a2} $$
         </div>
      </div>
      <div class="col-lg-6 row" style="justify-content:center;align-items:center;">
         <div class="col-lg-7">
            $$ Var(Y) = \\frac{S_{yy}}{n-1} = ${var_Y} $$
         </div>
      </div>
   </div>
   <div class="row justify-content-evenly">
      <div class="col-lg-6 row" style="justify-content:center;align-items:center;">
         <div class="col-lg-7">
            $$ S_{xy} = \\sum(x - \\bar{x})(Y - \\bar{Y}) = ${Sxy_a2} $$
         </div>
      </div>
      <div class="col-lg-6 row" style="justify-content:center;align-items:center;">
         <div class="col-lg-7">
            $$ Cov(X,Y) = \\frac{S_{xy}}{n-1} = ${cov} $$
         </div>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    btn.style.display = 'block';
}
function move_to_activity2_p2() {
    let tb_box = (document.getElementById('act2-p1-tb-box-1'));
    let btn = (document.getElementById('act2-p1-btn-3'));
    tb_box.innerHTML = '';
    let mat = new Matrix('S', S, tb_box);
    mat.load_matrix();
    btn.style.display = 'block';
}
// activity2_p1();
//# sourceMappingURL=activity2_p1.js.map