function activity2_p2() {
    let btn = (document.getElementById('act2-p1-btn-3'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Eigen Values', 'eigen-div');
    tra_s = 0;
    det_s = 0;
    tra_s = parseFloat((S[0][0] + S[1][1]).toFixed(3)); // sum of the diagonal elements
    det_s = parseFloat((S[0][0] * S[1][1] - S[0][1] * S[1][0]).toFixed(3)); // determinant calculation
    maindiv.innerHTML += `
      ${btn_text}
      <div class="collpase divide" id="eigen-div">
         <h4 style="text-align:left" class="fb-800 fs-20px">Step 2:</h4>
         <p class="fs-16px">
            Now we will find Eigen values.
            <br>
            We have
         </p>

         $$
            S = \\begin{bmatrix} 
               ${var_x} & ${cov} \\\\
               ${cov} & ${var_Y}
            \\end{bmatrix}
         $$

         <p class="fs-16px">
            We have 2 &times; 2 matrix. We know that characteristics equation of such matrix is
         </p>

         $$
            \\lambda^2 - tra(S) \\lambda + det(S) = 0
         $$

         <p class="fs-16px">
            Now, calculate tra(S)(sum of diagonal elements) and det(S)(determinant of S)
         </p>

         <div class="row justify-content-evenly">
            <div class="row col-lg-4 fs-18px fb-700" style="align-items:center">
               <div class="col-lg-6 " style="text-align:center;">tra(S) = </div>
               <div class="col-lg-6">
                  <span class="fs-16px" id="act2-tra-s-dsp"></span>
                  <input type='number' id='act2-tra-s-inp' class='form-control fs-16px' />
               </div>
            </div>
            <div class="row col-lg-4 fs-18px fb-700" style="align-items:center">
               <div class="col-lg-6 " style="text-align:center;">det(S) = </div>
               <div class="col-lg-6">
                  <span class="fs-16px" id="act2-det-s-dsp"></span>
                  <input type='number' id='act2-det-s-inp' class='form-control fs-16px' />
               </div>
            </div>
         </div>
         <br>
         <div class="text-center">
            <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p2-btn-1' onclick='a2_verify_tra_det();' >Verify</button>
            <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p2-btn-2' onclick='solve_quadratic_equ()' >Next</button>
         </div>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('eigen-div');
    }, 150);
}
function solve_quadratic_equ() {
    let btn = (document.getElementById('act2-p2-btn-2'));
    btn && btn.remove();
    let div = (document.getElementById('eigen-div'));
    lambda_1 = 0;
    lambda_2 = 0;
    lambda_1 = parseFloat(((-tra_s - Math.sqrt(tra_s * tra_s - 4 * det_s)) / 2).toFixed(3));
    lambda_2 = parseFloat(((-tra_s + Math.sqrt(tra_s * tra_s - 4 * det_s)) / 2).toFixed(3));
    div.innerHTML += `
      <br>
      <p class="fs-16px">
         Solve the following quadratic quations:
      </p>

      $$
         \\lambda^2 + b\λ + c = 0
      $$

      Then we will have the following solutions:

      $$
         \λ = \\frac{-b \± \\sqrt{b^2 - 4ac}}{2a}
      $$

      We will have two solutions:

      <div>
         <div class="row align-items-center">
            <div class="col-lg-6">
               $$
                  \λ_1 = \\frac{-b-\\sqrt{b^2-4ac}}{2a} =
               $$
            </div>
            <div class="col-lg-6">
               <span class="fs-18px fb-600" id="act2-lambda-1-dsp"></span>
               <input type='number' id='act2-lambda-1-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row align-items-center">
            <div class="col-lg-6">
               $$
               \λ_2 = \\frac{-b+\\sqrt{b^2-4ac}}{2a} =
               $$
            </div>
            <div class="col-lg-6">
               <span class="fs-18px fb-600" id="act2-lambda-2-dsp"></span>
               <input type='number' id='act2-lambda-2-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="text-center">
            <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p2-btn-3' onclick='a2_verify_lambda();' >Verify</button>
            <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p2-btn-4' onclick='least_eigen_value()' >Next</button>
         </div>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function least_eigen_value() {
    let btn = (document.getElementById('act2-p2-btn-4'));
    btn && btn.remove();
    let div = (document.getElementById('eigen-div'));
    lambda_min = 0;
    lambda_min = Math.min(lambda_1, lambda_2);
    div.innerHTML += `
      <br>
      <p class="fs-16px">
         Now we will need the least eigen value.
         <br>
         So,
      </p>

      <div class="row align-items-center">
         <div class="col-lg-6">
            $$
               \λ_0 = min(\λ_1 , \λ_2) =
            $$
         </div>
         <div class="col-lg-6">
            <span class="fs-18px fb-600" id="act2-lambda-min-dsp"></span>
            <input type='number' id='act2-lambda-min-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <div class="text-center">
         <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p2-btn-5' onclick='a2_verify_lambda_min();' >Verify</button>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p2-btn-6' onclick='activity2_p3()' >Next</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_lambda_min() {
    let btn = (document.getElementById('act2-p2-btn-5'));
    let next_btn = (document.getElementById('act2-p2-btn-6'));
    let lam_min_inp = (document.getElementById('act2-lambda-min-inp'));
    let lam_min_dsp = (document.getElementById('act2-lambda-min-dsp'));
    console.log(lambda_min);
    if (!verify_values(parseFloat(lam_min_inp.value), lambda_min)) {
        lam_min_inp.style.border = '1px solid red';
        alert('Incorrect lambda 0 Value');
        return;
    }
    else {
        lam_min_inp.style.border = '1px solid #ced4da';
        lam_min_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    lam_min_inp.remove();
    lam_min_dsp.innerText = lambda_min.toString();
    btn && btn.remove();
    next_btn.style.display = 'block';
}
function a2_verify_lambda() {
    let btn = (document.getElementById('act2-p2-btn-3'));
    let next_btn = (document.getElementById('act2-p2-btn-4'));
    let lam1_inp = (document.getElementById('act2-lambda-1-inp'));
    let lam2_inp = (document.getElementById('act2-lambda-2-inp'));
    let lam1_dsp = (document.getElementById('act2-lambda-1-dsp'));
    let lam2_dsp = (document.getElementById('act2-lambda-2-dsp'));
    console.log(lambda_1, lambda_2);
    if (!verify_values(parseFloat(lam1_inp.value), lambda_1)) {
        lam1_inp.style.border = '1px solid red';
        alert('Incorrect lambda 1 Value');
        return;
    }
    else {
        lam1_inp.style.border = '1px solid #ced4da';
        lam1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(lam2_inp.value), lambda_2)) {
        lam2_inp.style.border = '1px solid red';
        alert('Incorrect lambda 2 Value');
        return;
    }
    else {
        lam2_inp.style.border = '1px solid #ced4da';
        lam2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    lam1_inp.remove();
    lam2_inp.remove();
    lam1_dsp.innerText = lambda_1.toString();
    lam2_dsp.innerText = lambda_2.toString();
    btn && btn.remove();
    next_btn.style.display = 'block';
}
function a2_verify_tra_det() {
    let btn = (document.getElementById('act2-p2-btn-1'));
    let next_btn = (document.getElementById('act2-p2-btn-2'));
    let tra_inp = (document.getElementById('act2-tra-s-inp'));
    let det_inp = (document.getElementById('act2-det-s-inp'));
    let tra_dsp = (document.getElementById('act2-tra-s-dsp'));
    let det_dsp = (document.getElementById('act2-det-s-dsp'));
    console.log(tra_s, det_s);
    if (!verify_values(parseFloat(tra_inp.value), tra_s)) {
        tra_inp.style.border = '1px solid red';
        alert('Incorrect tra(S) Value');
        return;
    }
    else {
        tra_inp.style.border = '1px solid #ced4da';
        tra_inp.disabled = true;
    }
    if (!verify_values(parseFloat(det_inp.value), det_s)) {
        det_inp.style.border = '1px solid red';
        alert('Incorrect det(S) Value');
        return;
    }
    else {
        det_inp.style.border = '1px solid #ced4da';
        det_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    tra_inp.remove();
    det_inp.remove();
    tra_dsp.innerText = tra_s.toString();
    det_dsp.innerText = det_s.toString();
    btn && btn.remove();
    next_btn.style.display = 'block';
}
// activity2_p2();
//# sourceMappingURL=activity2_p2.js.map