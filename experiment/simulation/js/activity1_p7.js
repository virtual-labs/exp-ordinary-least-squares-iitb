function activity1_p7() {
    let btn = (document.getElementById('act1-p6-btn-3'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Plotting the regression', 'plot-div');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="plot-div">
         <h4 class="fb-800 fs-20px" style="text-align:left">Step 7:</h4>
         Now 
         $$
            SS_R = ${SSr} \\quad \\quad S_{yy} = ${Syy}
         $$

         Now the coefficient of correlations which are computed on the basis of sample data chosen from the population of X - Y.

         <br><br>
         <div class="fs-18px" id="ro-div">
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-lg-3">
                  $$ R_O^2 = \\left \| 1 - \\frac{SS_R}{S_{yy}} \\right \\vert = $$
               </div> 
               <div class="col-lg-4">
                  <input type='number' id='ro2-inp' class='form-control fs-16px' />
               </div>
            </div>
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-lg-3">
                  $$R_O = $$
               </div>
               <div class="col-lg-4">
                  <input type='number' id='ro-inp' class='form-control fs-16px' />
               </div>
            </div>
            <br>
            <div class="text-center">
               <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p7-btn-1' onclick='verify_ro();' >Verify</button>
            </div>
         </div>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p7-btn-2' onclick='plot_regression();' >Next</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    calculate_ro();
    hide_all_steps();
    setTimeout(() => {
        show_step('plot-div');
    }, 150);
}
function plot_regression() {
    let btn = (document.getElementById('act1-p7-btn-2'));
    btn && btn.remove();
    let div = (document.getElementById('plot-div'));
    div.innerHTML += `
      <br><br>
      <div>
         Plotting the regression of Dataset:
         <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p7-btn-3' onclick='plot_graph();' >Plot</button>
         <br><br>
         <div id="graph-div">
            <canvas id="act1-p7-graph"></canvas>
         </div>
      </div>
      <br><br>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p7-btn-4' onclick='activity2();' >Next</button>
   `;
}
function verify_ro() {
    let div = document.getElementById('ro-div');
    let btn = (document.getElementById('act1-p7-btn-2'));
    let ro_inp = (document.getElementById('ro-inp'));
    let ro2_inp = (document.getElementById('ro2-inp'));
    console.log(ro2, ro);
    if (!verify_values(parseFloat(ro2_inp.value), ro2)) {
        ro2_inp.style.border = '1px solid red';
        alert('Incorrect Ro square value');
        return;
    }
    else {
        ro2_inp.style.border = '1px solid #ced4da';
        ro2_inp.disabled = true;
    }
    if (!verify_values(parseFloat(ro_inp.value), ro)) {
        ro_inp.style.border = '1px solid red';
        alert('Incorrect Ro value');
        return;
    }
    else {
        ro_inp.style.border = '1px solid #ced4da';
        ro_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    div.innerHTML = '';
    div.innerHTML = `
   <div class="row justify-content-center" style="align-items:center">
      <div class="col-lg-5">
         $$ R_O^2 = \\left \| 1 - \\frac{SS_R}{S_{yy}} \\right \\vert =  ${ro2}$$
      </div>
      <div class="col-lg-5">
         $$R_O = ${ro} $$
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    btn.style.display = 'block';
}
function calculate_ro() {
    ro = 0;
    ro2 = 0;
    ro2 = parseFloat(Math.abs(1 - SSr / Syy).toFixed(3));
    ro = parseFloat(Math.sqrt(ro2).toFixed(3));
}
function plot_graph() {
    let btn = (document.getElementById('act1-p7-btn-3'));
    btn && btn.remove();
    let btn_next = (document.getElementById('act1-p7-btn-4'));
    btn_next.style.display = 'block';
    var ctx = document.getElementById('act1-p7-graph');
    ctx.style.backgroundColor = 'white';
    ctx.style.marginTop = '5px';
    // ctx.style.marginLeft = '10%';
    ctx.style.padding = '10px';
    ctx.style.borderRadius = '8px';
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: x,
            datasets: [
                {
                    label: "Y'",
                    data: y_dash,
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
                        text: "Y'",
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
                    text: `X vs Y'`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } },
            },
        },
    });
}
// activity1_p7();
//# sourceMappingURL=activity1_p7.js.map