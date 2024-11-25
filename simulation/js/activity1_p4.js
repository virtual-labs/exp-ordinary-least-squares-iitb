function activity1_p4() {
    let btn = (document.getElementById('act1-p3-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('X<sup>T</sup>X<sup>-1</sup>', 'div-xtx1-matrix');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="div-xtx1-matrix">
         <h4 style="text-align:left" class="fb-800 fs-20px">Step 4:</h4>
         <p class="fs-16px">
            We have the X<sup>T</sup>X matrix above,
         </p>
         <p class="fs-16px">
            Find the inverse of the above matrix:
         </p>
         <br><br>
         <div id="act1-p4-tb-box1">
         <span>(X<sup>T</sup>X)<sup>-1</sup> = </span>
         </div>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p4-btn-1' onclick='next_matrix();' >Next</button>
      </div>
   `;
    let tb_box = (document.getElementById('act1-p4-tb-box1'));
    XT_X_1 = [];
    XT_X_1 = inverse_matrix(XT_X);
    let inverse_tab = new Verify_Rows_Cols([], XT_X_1, [0, 1], [
        [0, 1],
        [0, 1],
    ], '', tb_box, false, false, internal_calculation_act1_p4);
    inverse_tab.load_table();
    hide_all_steps();
    setTimeout(() => {
        show_step('div-xtx1-matrix');
    }, 150);
}
function internal_calculation_act1_p4() {
    let btn = (document.getElementById('act1-p4-btn-1'));
    let tb_box = (document.getElementById('act1-p4-tb-box1'));
    tb_box.innerHTML = '';
    XT_X_1_XT = [];
    XT_X_1_XT = matrix_multiplication(XT_X_1, XT);
    let mat = new Matrix('(X^TX)^{-1}', XT_X_1, tb_box);
    mat.load_matrix();
    btn.style.display = 'block';
}
function next_matrix() {
    let btn = (document.getElementById('act1-p4-btn-1'));
    btn.remove();
    let mat_div = (document.getElementById('div-xtx1-matrix'));
    let tb_box = (document.getElementById('act1-p4-tb-box1'));
    let mat = new Matrix('X^T', XT, tb_box);
    mat.load_matrix();
    mat_div.innerHTML += `
   <br><br>
   Now you have <span class="fb-500">(X<sup>T</sup>X)<sup>-1</sup></span> and <span class="fb-500">X<sup>T</sup></span>
   <br>
   Find the product of <span class="fb-500">(X<sup>T</sup>X)<sup>-1</sup>X<sup>T</sup></span>
   <br><br>
   
   <div id="act1-p4-tb-box2">
   <p class="fb-600">(X<sup>T</sup>X)<sup>-1</sup>X<sup>T</sup> = </p>
   </div>
   <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p4-btn-2' onclick='activity1_p5();' >Next</button>
   `;
    let tb_box1 = (document.getElementById('act1-p4-tb-box2'));
    let prod_matrix = new Verify_Rows_Cols([], XT_X_1_XT, [0, 1], [[0], [0]], '', tb_box1, false, false, move_to_activity1_p5);
    prod_matrix.load_table();
}
function move_to_activity1_p5() {
    let btn = (document.getElementById('act1-p4-btn-2'));
    let tb_box = (document.getElementById('act1-p4-tb-box2'));
    tb_box.innerHTML = '';
    btn.style.display = 'block';
    let mat = new Matrix('(X^TX)^{-1}X^T', XT_X_1_XT, tb_box);
    mat.load_matrix();
}
//# sourceMappingURL=activity1_p4.js.map