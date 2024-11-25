function activity1_p2() {
    let btn = (document.getElementById('act1-p1-btn-2'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Step 2', 'div-step-2');
    maindiv.innerHTML += `
      ${btn_text}
      <div class='collapse divide' id='div-step-2'>
         <h4 style="text-align:left;" class='fb-800 fs-20px'>Step 2: </h4>
         <h4 class='fs-16px'>Consider a data set with n observation with two variables x and Y.
         <br>
         If x and Y have relation, $$ y_i = \\beta_0 + \\beta_{1}x_{i}+ \\epsilon $$ (Linear model)
    </h4>
    <div id='q-box'></div>
      </div>
      `;
    let q_box = (document.getElementById('q-box'));
    let options = [
        `<span style='font-size: 16px;' >  $$ X = \\begin{bmatrix}
      1 & x_1 \\\\
      1 & x_2 \\\\
      . & . \\\\
      . & . \\\\
      . & . \\\\
      1 & x_n
      \\end{bmatrix}$$</span>`,
        `<span style='font-size: 16px;' >  $$ X = \\begin{bmatrix}
      1 &  1 & ... &  1 \\\\
      x_1 & x_2 & ... & x_n
      \\end{bmatrix}$$</span>`,
        `<span style='font-size: 16px;' >  $$ X = \\begin{bmatrix}
      1 & 0 & . & . & . & 0 \\\\
      0 & x_1 & .& . & . & 0 \\\\
      . & . & . & . & . & . \\\\
      . & . & . & . & . & . \\\\
      . & . & . & . & . & . \\\\
      0 & 0 & . & . & . & x_n
      \\end{bmatrix}
      $$</span>`,
        `<span style='font-size: 16px;' >  $$ X = \\begin{bmatrix}
      1 & 1 & . & . & . & 1 \\\\
      0 & x_1 & .& . & . & 1 \\\\
      . & . & . & . & . & . \\\\
      . & . & . & . & . & . \\\\
      . & . & . & . & . & . \\\\
      0 & 0 & . & . & . & x_n
      \\end{bmatrix}
      $$</span>`,
    ];
    let new_question = new Question_Options(`If above model represented in matrix form given by, $$ Y = X\β + \\epsilon $$ where,
	$$ Y = \\begin{bmatrix} y_1 \\\\ y_2 \\end{bmatrix},
	\β = \\begin{bmatrix} \\beta_0 \\\\ \\beta_1 \\end{bmatrix},
	\ϵ = \\begin{bmatrix} \\epsilon_1 \\\\ \\epsilon_2 \\end{bmatrix}
	$$
	then How will X be represented?`, options, '1', q_box, 'act1-p2', activity1_p3);
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('div-step-2');
    }, 150);
    new_question.load_question();
}
//# sourceMappingURL=activity1_p2.js.map