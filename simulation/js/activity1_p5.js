function activity1_p5() {
    let btn = (document.getElementById('act1-p4-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Calculate β&#770;', 'div-beta');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="div-beta">
         <h4 class="fb-800 fs-20px" style="text-align:left">Step 5:</h4>
         <div id='div-y'>
         </div>
         Now we have to calculate the following terms:
         <br>
         Using the formula:
         $$ \\hat{\\beta} = (X^{T}X)^{-1}X^{T}Y $$
         
         <div id="act1-p5-tb-box1">
            Find β&#770;
            <br>
            <p class="fb-600" style="text-align:left;">β&#770; =</p>
         </div>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p5-btn-1' onclick='activity1_p6();' >Next</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    let div_y = (document.getElementById('div-y'));
    let tb_box = (document.getElementById('act1-p5-tb-box1'));
    let mat_y = new Matrix('Y', Y, div_y);
    mat_y.load_matrix();
    beta_cap = matrix_multiplication(XT_X_1_XT, Y);
    console.log('beta_cap', beta_cap);
    beta_cap0 = beta_cap[0][0];
    beta_cap1 = beta_cap[1][0];
    let beta_tab = new Verify_Rows_Cols([], beta_cap, [0, 1], [[0], [0]], '', tb_box, false, false, move_to_activity1_p6);
    beta_tab.load_table();
    hide_all_steps();
    setTimeout(() => {
        show_step('div-beta');
    }, 150);
}
function move_to_activity1_p6() {
    let btn = (document.getElementById('act1-p5-btn-1'));
    let tb_box = (document.getElementById('act1-p5-tb-box1'));
    tb_box.innerHTML = '';
    btn.style.display = 'block';
    let mat = new Matrix('\\hat{\\beta}', beta_cap, tb_box);
    mat.load_matrix();
}
// activity1_p5();
//# sourceMappingURL=activity1_p5.js.map