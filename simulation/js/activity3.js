function activity3() {
    let btn = (document.getElementById('act2-p5-btn-4'));
    btn && btn.remove();
    let text = `
      <div class="divide">
         <div style="margin-top:2vw;">
            <h4 class="fb-700 fs-28px center-text" >Activity 3</h4>
            <br>
            <div class="fs-16px">
               Consider the bi-quadratic model
               <br>
               <p style='text-align: center; font-weight: 500;'>
                  y = &alpha; + &beta;x + &epsilon;
               </p>
               <br>
               <p class="fs-16px">
                  From the available n data points, we find the model, &alpha; + &beta; by requiring that the sum of squares of the residuals be minimized.
               </p>
               <br>
               <p class="fs-16px">
                  &alpha;, &beta;, &epsilon; are population parameters, and a, b are random variables, computed from the sampled data.
               </p>
               <br>
               <p class="fs-16px">
                  The equation given below gives us range of y
               </p>
            </div>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='act3-btn-1' >Next</button>
         </div>
      </div>
   `;
    maindiv.innerHTML += text;
    get_best_regression_fit();
    hide_all_steps();
}
function get_best_regression_fit() {
    best_reg_fit = '';
    let ro_fit = parseFloat(Math.abs(1 - ro).toFixed(3));
    let rt_fit = parseFloat(Math.abs(1 - rt).toFixed(3));
    best_reg_fit = ro_fit < rt_fit ? '1' : '2';
}
function start_act3() {
    let btn = (document.getElementById('act3-btn-1'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('R<sub>O</sub> and R<sub>T</sub>', 'act3-ro-rt-div');
    let text = `
      ${btn_text}
      <div class="collapse divide" id="act3-ro-rt-div">
         <h4 style="text-align: left;" class='fb-800 fs-20px'>Step 1:</h4>
         <br>
         <p class="16px">
            We have Regression coefficient derived from Ordinary Least Method (R<sub>O</sub>) and Total Least Square Method (R<sub>T</sub>)
         </p>
         <br>
         $$
            R_0 = ${ro} \\quad R_T = ${rt}
         $$
         <br>
         <div id="act3-q-box"></div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    maindiv.innerHTML += text;
    let q_box = (document.getElementById('act3-q-box'));
    let options = ['Ordinary Least Square', 'Total Least Square'];
    let new_question = new Question_Options('Which method gives us best linear regression fit?', options, best_reg_fit, q_box, 'act3', load_activity3_theory);
    new_question.load_question();
    hide_all_steps();
    setTimeout(() => {
        show_step('act3-ro-rt-div');
    }, 150);
}
function load_activity3_theory() {
    let div = (document.getElementById('act3-ro-rt-div'));
    div.innerHTML += `
   <br>

   <div class="fs-18px">
      <div>
         <h5 class="fb-700">
            Key Differences:
         </h5>
         <ul>
            <li>
               <span class="fb-700">Error handling:</span> OLS assumes only the dependent variable (y) has error, while
               TLS considers error in both independent (x) and dependent variables.
            </li>
            <li>
               <span class="fb-700">Bias: </span> In situations with significant error in both variable, OLS estimates
               can be biased towards the mean of the dependent variables. TLS reduces this bias by considering error in
               both directions.
            </li>
            <li>
               <span class="fb-700">Mean Squared Error (MSE): </span> TLS often has lower MSE than OLS when errors are
               present in both variables.
            </li>
            <li>
               <span class="fb-700">Computational complexity: </span> TLS requires more complex calculations than OLS.
            </li>
         </ul>
         <br>
         <p class="fb-700">
            What is conclusion?
         </p>
         <p>
            The Total Least Squares (TLS) gives us better results. As it consider the errors in both dependent and
            independent variables.
         </p>
         <br>
         <p>
            <span class="fb-700">Reduced Bias:</span> OLS assumes only the dependent variable (y) has error. This can
            lead to biased estimates when both variables have significant error.
            <br>
            TLS, by considering error in both x and y, can significantly reduce this bias, especially when the error in
            x is relatively large. This is particularly important when accurate parameter estimation is crucial.
         </p>
         <br>
         <p>
            <span class="fb-700">Improved Accuracy:</span> TLS minimizes the total error in both directions, leading to
            more accurate parameter estimates compared to OLS when both variables have significant error. This can be
            beneficial when dealing with noisy data or weak relationships between variables.
         </p>
         <br>
         <p>
            <span class="fb-700">More Robust:</span> TLS is less sensitive to outliers and influential points compared
            to OLS. This is because TLS considers the errors in both variables, which can help to "average out" the
            effect of outliers. This can be important when the data contains outliers or points that are not
            representative of the overall relationship.
         </p>
      </div>
      <br>
      <div>
         <h5 class="fb-700">
            Additional Advantages:
         </h5>

         <ul>
            <li>
               TLS can be more efficient than other methods for dealing with errors in both variables, such as
               orthogonal distance regression (ODR). This is because TLS does not require explicitly estimating the
               error variances, which can be difficult in practice.
            </li>
            <li>
               TLS can be used to estimate the line of best fit even when there is no clear dependent or independent
               variable. This can be useful in situations where the relationship between variables is not well-defined.
            </li>
         </ul>

         <h5 class="fb-700">
            Here are some specific situations where TLS might be preffered over OLS:
         </h5>
         <ul>
            <li>
               When the independent variable is measured with significant error. This is common in scientific
               experiments, where measurements may be subject to noise and other factors.
            </li>
            <li>
               When the relationship between variables is weak or noisy. In these cases, OLS estimates can be
               unreliable, while TLS can provide more accurate results.
            </li>
            <li>
               When accurate parameter estimation is crucial. This is important in many applications, such as
               engineering design and medical research.
            </li>
            <li>
               When dealing with outliers or influential points. TLS is less sensitive to these points than OLS, which
               can improve the accuracy and robustness of the analysis.
            </li>
         </ul>

         <p>
            Overall, whether TLS is better than OLS depends on the specific context and the characteristics of your
            data. If you are dealing with significant errors in both variables, TLS may be a better choice. However, if
            computational cost or interpretability are important considerations, OLS may be a more suitable option.
         </p>
      </div>
   </div>
   `;
}
// activity3();
//# sourceMappingURL=activity3.js.map