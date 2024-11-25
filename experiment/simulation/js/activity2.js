function activity2() {
    let btn = (document.getElementById('act1-p7-btn-4'));
    btn && btn.remove();
    let text = `
      <div class="divide">
         <div style="margin-top:2vw;">
            <h4 class="fb-700 fs-28px center-text" >Activity 2</h4>
            <br>
            <div class="fs-16px">
               Consider the linear model
               <br>
               <p style='text-align: center; font-weight: 500;'>
                  y + &epsilon;<sub>2</sub> = &beta;<sub>0</sub> + &beta;<sub>1</sub>(x + &epsilon;<sub>1</sub>)
               </p>
               <br>
               
               <p class="fs-16px">
                  &beta;<sub>0</sub>, &beta;<sub>1</sub>, &epsilon; are population parameters, Here &epsilon;<sub>1</sub>, &epsilon;<sub>2</sub> are error term in X,Y respectively.
               </p>

               <br>

               <p class="fs-16px">
                  From the available n data points, we find the model, β&#770;<sub>0</sub>, β&#770;<sub>1</sub>x by requiring that the sum of squares od the residuals br minimized.
               </p>

               <br>

               <p class="fs-16px">
                  &beta;<sub>0</sub>, &beta;<sub>1</sub>, &epsilon; are population paramenters, and β&#770;<sub>0</sub>, β&#770;<sub>1</sub>, are random Variables, computed from the sampled data. Here &epsilon; is error term in Y.
            </p>
            </div>

            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='act2-btn-1' >Next</button>
         </div>
      </div>
   `;
    maindiv.innerHTML += text;
    hide_all_steps();
}
function start_act2() {
    let btn = (document.getElementById('act2-btn-1'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Act2 Generate Dataset', 'act2-data-div');
    let text = `
      ${btn_text}
      <div class="collapse divide" id="act2-data-div">
         <h4 style="text-align: left;" class='fb-800 fs-20px'>Step 1:</h4>
         <br>

         <div class='col'>
        
            <div class='row' id='act2-s1' >
               <div class='col-6'>Choose the number of Observations</div>
                  <div class='col-6'>
                  <select class='form-select fs-16px' id='act2-n-inp' onchange='a2_set_n();' >

                  </select>
                  <span class='fs-16px' id='act2-dsp-N'></span>
               </div>
            </div>

         <br>
            <div class='row'>
               <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-btn-2' onclick='a2_internal_calculations_1();' >Generate x Y</button>
            </div>
         </div>
      </div>
   `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-data-div');
    }, 150);
    a2_load_dd1_options();
}
//for loading all options
function a2_load_dd1_options() {
    let dd = (document.getElementById('act2-n-inp'));
    dd.innerHTML = ``;
    let op = new Option('--Select--', '0', true);
    dd.add(op);
    for (let i = 20; i < 31; i++) {
        let op = new Option(i.toString(), i.toString());
        dd.add(op);
    }
}
function a2_set_n() {
    let dd = (document.getElementById('act2-n-inp'));
    let btn = (document.getElementById('act2-btn-2'));
    if (dd.value != '0') {
        N_a2 = parseInt(dd.value);
        btn.style.display = 'block';
    }
    else {
        N_a2 = 0;
        btn.style.display = 'none';
    }
}
function a2_internal_calculations_1() {
    let dd = (document.getElementById('act2-n-inp'));
    let dsp = (document.getElementById('act2-dsp-N'));
    dd.remove();
    dsp.innerText = `n = ${N_a2}`;
    //generate epsilon values
    epsilon1_a2 = a2_generate_epsilon_values();
    epsilon2_a2 = a2_generate_epsilon_values();
    //generate x vector (ascending)
    a2_generate_random_x();
    //generate random beta0 and beta1 values
    beta0_a2 = parseFloat((Math.random() * 2 - 1).toFixed(3));
    beta1_a2 = parseFloat((Math.random() * 2 - 1).toFixed(3));
    console.log('beta0_a2 = ' + beta0_a2, 'beta1_a2 = ' + beta1_a2);
    sum_Y_a2 = 0;
    Y_a2 = [];
    for (let i = 0; i < x_a2.length; i++) {
        let temp = [];
        temp.push(parseFloat((beta0_a2 +
            beta1_a2 * (x_a2[i] + epsilon1_a2[i]) -
            epsilon2_a2[i]).toFixed(3)));
        Y_a2.push(temp);
        sum_Y_a2 += Y_a2[i][0];
    }
    Y_a2.sort((a, b) => a[0] - b[0]);
    sum_Y_a2 = parseFloat(sum_Y_a2.toFixed(3));
    console.log('Y_a2', Y_a2);
    console.log('x_a2', x_a2);
    console.log('sum_Y_a2', sum_Y_a2);
    //show x Y table
    a2_show_x_y();
}
function a2_show_x_y() {
    let btn = (document.getElementById('act2-btn-2'));
    btn && btn.remove();
    let d = (document.getElementById('act2-data-div'));
    let text = `
        <br>
        <div class='table-responsive' style='margin: auto;'>
            <table class='table table-bordered ' style='background-color: white;' >
                <tr id='act2-x-values'>
                <th class='table-dark'>x</th>
                </tr>

                <tr id='act2-y-values'>
                <th class='table-dark'>Y</th>
                </tr>
            </table>

        </div>
        <br>
         <p class="fs-18px fb-600">Note: This model is given by (y + &epsilon;<sub>2</sub>) = &beta;<sub>0</sub> + &beta;<sub>1</sub>(x + &epsilon;<sub>1</sub>)</p>

         <p class="fs-16px" style="text-align:left;">Calculate the mean value of x and Y</p>

         <div class="row fs-16px" style="align-items:center;">
            <div>
               <div class="row" style="font-size:1.6vw;justify-content:center;align-items:center;">
                  <div class="col-2">
                     $$ \\bar{x} = \\frac {\\Sigma{x}}{n} = $$
                  </div>
                  <div class="col-5" style="text-align:left">
                     <input type='number' id='act2-x-bar-inp' class='form-control fs-16px' />
                     <span  id='act2-x-bar'></span>
                  </div>
               </div>
            </div>
            <div  >
               <div class="row" style="font-size:1.6vw;justify-content:center;align-items:center;">
                  <div class="col-2" >
                     $$ \\bar{Y} = \\frac {\\Sigma{Y}}{n} = $$
                  </div>
                  <div class="col-5" style="text-align:left">
                     <input type='number' id='act2-y-bar-inp' class='form-control fs-16px' />
                     <span id='act2-y-bar'></span>
                  </div>
               </div>
                
            </div>
            <button class='btn btn-info std-btn' onclick='a2_verify_x_y_bar();' style='margin:auto' id='act2-vf-bar-btn'>Verify</button>
         </div>
         <br>
         

        `;
    d.innerHTML += text;
    a2_load_xy_values();
    setTimeout(() => MathJax.typeset(), 100);
}
function a2_verify_x_y_bar() {
    let btn = (document.getElementById('act2-vf-bar-btn'));
    let x_bar_inp = (document.getElementById('act2-x-bar-inp'));
    let y_bar_inp = (document.getElementById('act2-y-bar-inp'));
    let x_bar = (document.getElementById('act2-x-bar'));
    let y_bar = (document.getElementById('act2-y-bar'));
    x_bar_val_a2 = parseFloat((sum_x_a2 / N_a2).toFixed(3));
    Y_bar_val_a2 = parseFloat((sum_Y_a2 / N_a2).toFixed(3));
    console.log(x_bar_val_a2, Y_bar_val_a2);
    if (!verify_values(parseFloat(x_bar_inp.value), x_bar_val_a2)) {
        x_bar_inp.style.border = '1px solid red';
        alert('Incorrect xbar value');
        return;
    }
    else {
        x_bar_inp.style.border = '1px solid #ced4da';
        x_bar_inp.disabled = true;
    }
    if (!verify_values(parseFloat(y_bar_inp.value), Y_bar_val_a2)) {
        y_bar_inp.style.border = '1px solid red';
        alert('Incorrect Ybar value');
        return;
    }
    else {
        y_bar_inp.style.border = '1px solid #ced4da';
        y_bar_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    btn.remove();
    x_bar_inp.remove();
    y_bar_inp.remove();
    x_bar.innerText = x_bar_val_a2.toString();
    y_bar.innerText = Y_bar_val_a2.toString();
    act2_internal_calculations_2();
}
//for generating random x vector
function a2_generate_random_x() {
    let arr = [];
    x0_a2 = [];
    while (arr.length < N_a2) {
        // let rv = 20 + Math.floor(Math.random() * 60);
        let rv = parseFloat((Math.random() * (1.7 - -1.7) + -1.7).toFixed(3));
        if (arr.indexOf(rv) == -1) {
            arr.push(rv);
        }
    }
    arr = arr.sort((a, b) => a - b);
    x0_a2 = arr;
    sum_x_a2 = 0;
    x_a2 = [];
    let last_indx = x0_a2.length - 1;
    for (let i = 0; i < x0_a2.length; i++) {
        x_a2.push(parseFloat((x0_a2[i] + x0_a2[last_indx] * epsilon1_a2[i]).toFixed(3)));
        sum_x_a2 += x_a2[i];
    }
    x_a2 = x_a2.sort((a, b) => a - b);
    sum_x_a2 = parseFloat(sum_x_a2.toFixed(3));
    console.log('x0_a2', x0_a2);
    console.log('sumX_a2', sum_x_a2);
}
function a2_generate_epsilon_values() {
    let arr = [];
    while (arr.length < N_a2) {
        let rv = parseFloat((Math.random() * 1.6 - 0.8).toFixed(3));
        arr.push(rv);
    }
    //console.log(arr);
    return arr;
}
function a2_load_xy_values() {
    let x_val = (document.getElementById('act2-x-values'));
    let y_val = (document.getElementById('act2-y-values'));
    for (let i = 0; i < Y_a2.length; i++) {
        console.log(x_a2[i]);
        x_val.innerHTML += `<td>${x_a2[i]}</td>`;
        y_val.innerHTML += `<td>${Y_a2[i][0]}</td>`;
    }
}
function act2_internal_calculations_2() {
    let div = (document.getElementById('act2-data-div'));
    act2_table_data_1 = [];
    Sxx_a2 = 0;
    Syy_a2 = 0;
    Sxy_a2 = 0;
    var_x = 0;
    var_Y = 0;
    cov = 0;
    for (let i = 0; i < x_a2.length; i++) {
        let arr = [];
        let exp1 = x_a2[i] - x_bar_val_a2;
        let exp2 = Y_a2[i][0] - Y_bar_val_a2;
        arr.push(x_a2[i]);
        arr.push(Y_a2[i][0]);
        arr.push(parseFloat(exp1.toFixed(3)));
        arr.push(parseFloat((Math.pow(exp1, 2)).toFixed(3)));
        arr.push(parseFloat(exp2.toFixed(3)));
        arr.push(parseFloat((Math.pow(exp2, 2)).toFixed(3)));
        arr.push(parseFloat((exp1 * exp2).toFixed(3)));
        act2_table_data_1.push(arr);
        Sxx_a2 += act2_table_data_1[i][3];
        Syy_a2 += act2_table_data_1[i][5];
        Sxy_a2 += act2_table_data_1[i][6];
    }
    Sxx_a2 = parseFloat(Sxx_a2.toFixed(3));
    Syy_a2 = parseFloat(Syy_a2.toFixed(3));
    Sxy_a2 = parseFloat(Sxy_a2.toFixed(3));
    var_x = parseFloat((Sxx_a2 / (N_a2 - 1)).toFixed(3));
    var_Y = parseFloat((Syy_a2 / (N_a2 - 1)).toFixed(3));
    cov = parseFloat((Sxy_a2 / (N_a2 - 1)).toFixed(3));
    div.innerHTML += `
	   <div class='fx-16px' style="text-align:left;">
	      <p>
	         The regression equation of given data set is Y=a+bX (The estimated value of a and b will be displayed in equation)
	         <br>
	         Calculate x-x&#x0305;, Y-Y&#x0305;, Y', Y-Y'
	      </p>
	      <div id="act2-tb-box2" style="text-align: center;"></div>
	      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-btn-3' onclick='activity2_p1()' >Next</button>
	   </div>
	`;
    let tb_box = (document.getElementById('act2-tb-box2'));
    let header = [
        'x',
        'Y',
        '(x-x&#x0305;)',
        '(x-x&#x0305;)<sup>2</sup>',
        '(Y-Y&#x0305;)',
        '(Y-Y&#x0305;)<sup>2</sup>',
        '(x-x&#x0305;)(Y-Y&#x0305;)',
    ];
    let tab = new Verify_Rows_Cols(header, act2_table_data_1, [0], [[2, 3, 4, 5, 6]], '', tb_box, true, true, move_to_activity2_p1);
    tab.load_table();
}
function move_to_activity2_p1() {
    let btn = (document.getElementById('act2-btn-3'));
    btn.style.display = 'block';
}
// activity2();
//# sourceMappingURL=activity2.js.map