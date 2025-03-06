function activity2_p5() {
    let btn = (document.getElementById('act2-p4-btn-3'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Plotting the regression', 'act2-plot-div');
    calculate_rt();
    maindiv.innerHTML += `
   ${btn_txt}
   <div class="collapse divide" id="act2-plot-div">
      <h4 class="fb-800 fs-20px" style="text-align:left">Step 5:</h4>
      Now 
      $$
         SS_R = ${SSr_a2} \\quad \\quad S_{yy} = ${Syy_a2}
      $$

      Now the coefficient of correlations which are computed on the basis of sample data chosen from the population of X - Y.

      <br><br>
      <div class="fs-18px" id="act2-rt-div">
         <div class="col">
            <div class="row col-sm-6" style="align-items:center; justify-content:center;">
               <div class="col-sm-6">
                  $$ R_T^2 = \\left \| 1 - \\frac{SS_R}{S_{yy}} \\right \\vert = $$
               </div> 
               <div class=col-sm-6>
                  <input type='number' id='rt2-inp' class='form-control fs-16px' />
               </div>
            </div>
            <br><br>
            <div class="row col-sm-6" style="align-items:center; justify-content:center;">
               <div class="col-sm-6">
                  $$R_T = $$
               </div>
               <div class="col-sm-6">
                  <input type='number' id='rt-inp' class='form-control fs-16px' />
               </div>
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p5-btn-1' onclick='verify_rt();' >Verify</button>
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p5-btn-2' onclick='a2_plot_regression();' >Next</button>
   </div>
`;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-plot-div');
    }, 150);
}
function a2_plot_regression() {
    let btn = (document.getElementById('act2-p5-btn-2'));
    btn && btn.remove();
    let div = (document.getElementById('act2-plot-div'));
    div.innerHTML += `
      <br><br>
      <div>
         Plotting the regression of Dataset:
         <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p5-btn-3' onclick='a2_plot_graph();' >Plot</button>
         <br><br>
         <div id="act2-graph-div">
            <canvas id="act2-p5-graph"></canvas>
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p5-btn-4' onclick='activity3();' >Next</button>
   `;
}
function verify_rt() {
    let div = (document.getElementById('act2-rt-div'));
    let btn = (document.getElementById('act2-p5-btn-2'));
    let rt_inp = (document.getElementById('rt-inp'));
    let rt2_inp = (document.getElementById('rt2-inp'));
    console.log(rt2, rt);
    if (!verify_values(parseFloat(rt2_inp.value), rt2)) {
        rt2_inp.style.border = '1px solid red';
        alert('Incorrect Ro square value');
        return;
    }
    else {
        rt2_inp.style.border = '1px solid #ced4da';
        rt2_inp.disabled = true;
    }
    if (!verify_values(parseFloat(rt_inp.value), rt)) {
        rt_inp.style.border = '1px solid red';
        alert('Incorrect Ro value');
        return;
    }
    else {
        rt_inp.style.border = '1px solid #ced4da';
        rt_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    div.innerHTML = '';
    div.innerHTML = `
      <div class="row justify-content-center" style="align-items:center">
         <div class="col-lg-5">
         $$ R_T^2 = \\left \| 1 - \\frac{SS_R}{S_{yy}} \\right \\vert = ${rt2} $$
         </div>
         <div class="col-lg-5">
         $$R_T = ${rt} $$
         </div>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    btn.style.display = 'block';
}
function calculate_rt() {
    rt = 0;
    rt2 = 0;
    rt2 = parseFloat(Math.abs(1 - SSr_a2 / Syy_a2).toFixed(3));
    rt = parseFloat(Math.sqrt(rt2).toFixed(3));
}
function a2_plot_graph() {
    let btn = (document.getElementById('act2-p5-btn-3'));
    btn && btn.remove();
    let btn_next = (document.getElementById('act2-p5-btn-4'));
    btn_next.style.display = 'block';
    let data_y = [];
    Y_a2.map((y) => {
        data_y.push(y[0]);
    });
    console.log(data_y);
    var ctx = document.getElementById('act2-p5-graph');
    ctx.style.backgroundColor = 'white';
    ctx.style.marginTop = '5px';
    // ctx.style.marginLeft = '10%';
    ctx.style.padding = '10px';
    ctx.style.borderRadius = '8px';
    // if (typeof chart != 'undefined') {
    // 	chart.destroy();
    // }
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: x_a2,
            datasets: [
                {
                    label: 'Y',
                    data: data_y,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true,
                },
            ],
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Y',
                        font: { size: 14, weight: 'bold' },
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: 'X',
                        font: { size: 14, weight: 'bold' },
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: `X vs Y`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } },
            },
        },
    });
}
// activity2_p5();
//# sourceMappingURL=activity2_p5.js.map