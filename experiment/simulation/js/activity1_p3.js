function activity1_p3() {
    let btn_txt = get_collapse_btn_text('Matrix', 'div-matrix');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="div-matrix">
         <h4 style="text-align:left" class="fb-800 fs-20px">Step 3:</h4>
         <p class="fs-16px">
            To do estimation we will need &beta;&#770;. We will use the formula:
            <span class="fb-500">&beta;&#770; = (X<sup>T</sup>X)<sup>-1</sup>X<sup>T</sup>Y
         </p>
         <div class=''fs-16px>
            We will determine parameters in given order:
            <pclass="fb-500">
            $$ X \→ X^{T}X \→ (X^{T}X)^{-1} \→ (X^{T}X)^{-1}X^T \→ (X^{T}X)^{-1}X^{T}Y $$
            </p>
         </div>
         <div class="fs-16px">
            So the correct form of X is given below:
            <p class="fb-500">
               $$ X = \\begin{bmatrix}
                  1 & x_1 \\\\
                  1 & x_2 \\\\
                  . & . \\\\
                  . & . \\\\
                  . & . \\\\
                  1 & x_n
               \\end{bmatrix}$$
            </p>
         </div>
         <div class="fs-16px">
            Refer above expression and fill the column for given X
         </div>
         <br>
         <div id="act1-p3-tb-box1"></div>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p3-btn-1' onclick='show_matrix();' >Next</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    X = [];
    for (let i = 0; i < x.length; i++) {
        let temp = [1, parseFloat(x[i].toFixed(3))];
        X.push(temp);
    }
    console.log('X', X);
    let vc = [[0, 1]];
    let tb_box = (document.getElementById('act1-p3-tb-box1'));
    let new_table = new Verify_Rows_Cols([], X, [0], vc, '', tb_box, true, false, internal_calculations_act1_p3);
    new_table.load_table();
    hide_all_steps();
    setTimeout(() => {
        show_step('div-matrix');
    }, 150);
}
function internal_calculations_act1_p3() {
    let next_btn = (document.getElementById('act1-p3-btn-1'));
    let tb_box = (document.getElementById('act1-p3-tb-box1'));
    tb_box.innerHTML = '';
    XT = [];
    XT_X = [];
    XT = transpose_matrix(X);
    XT_X = matrix_multiplication(XT, X);
    let mat = new Matrix('X', X, tb_box);
    mat.load_matrix();
    console.log('XT_X val', XT_X);
    next_btn.style.display = 'block';
}
function show_matrix() {
    let next_btn = (document.getElementById('act1-p3-btn-1'));
    let mat_div = (document.getElementById('div-matrix'));
    next_btn.remove();
    mat_div.innerHTML += `
      <div>
         <br>
         Now you have X.
         <br>
         Using the above values find Matrix X<sup>T</sup>X
         <br><br>
         <div id="act1-p3-tb-box2">
            <span class="fb-600">X<sup>T</sup>X = </span>
         </div>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p3-btn-2' onclick='activity1_p4();' >Next</button>
      </div>
   `;
    let tb_box = (document.getElementById('act1-p3-tb-box2'));
    let vr = [0];
    let vc = [[0, 1]];
    let tab = new Verify_Rows_Cols([], XT_X, vr, vc, '', tb_box, false, false, move_to_activity1_p4);
    tab.load_table();
}
function move_to_activity1_p4() {
    let btn = (document.getElementById('act1-p3-btn-2'));
    let tb_box = (document.getElementById('act1-p3-tb-box2'));
    btn.style.display = 'block';
    tb_box.innerHTML = '';
    let mat = new Matrix('X^TX', XT_X, tb_box);
    mat.load_matrix();
}
// activity1_p3();
//# sourceMappingURL=activity1_p3.js.map