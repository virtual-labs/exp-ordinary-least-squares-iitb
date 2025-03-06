let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
    <h4 class="center-text fs-28px fb-700">Ordinary and Total Least Square</h4>
    <br>
    <h4 class="fb-700 fs-28px" style="text-align:center">Activity 1</h4>
        
        <br><br>

        <div class="fs-16px">
            Consider the linear model
            <br>
            <p style='text-align: center; font-weight: 500;'>y = &beta;<sub>0</sub> + &beta;<sub>1</sub>x + &epsilon; </p>
            <br>
            <p class="fs-16px">From the available n data points, we find the model, β&#770;<sub>0</sub> + &beta;&#770;<sub>1</sub>x by requiring that the sum of squares of the residuals be minimized.</p>

            <p class="fs-16px">
               &beta;<sub>0</sub>, &beta;<sub>1</sub>, &epsilon; are population paramenters, and β&#770;<sub>0</sub>, β&#770;<sub>1</sub>, are random Variables, computed from the sampled data. Here &epsilon; is error term in Y.
            </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
}
function show_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    temp_btn.remove();
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
       
        <button class='btn btn-info std-btn' style='position: relative; top: 15vw; left: 70vw;' onclick='start_act1();' id='temp-btn-1' >Start</button>
    </div>
    </div>

    `;
    maindiv.innerHTML += text;
}
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    temp_btn && temp_btn.remove();
    let btn_text = get_collapse_btn_text('Generated Dataset', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 1: </h4>
        <br>
        <div class='col'>
        
            <div class='row' id='s1' >
                <div class='col-6'>Choose the number of Observations</div>
                <div class='col-6'>
                    <select class='form-select fs-16px' id='act1-n-inp' onchange='set_n();' >

                    </select>
                    <span class='fs-16px' id='dsp-N'></span>
                </div>
                
            </div>

            <br>

            

            <div class='row'>
            <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-btn-1' onclick='internal_calculations_1();' >Generate x Y</button>
            </div>

        </div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        show_step('tb1-box');
    }, 150);
    load_dd1_options();
}
//for loading all options
function load_dd1_options() {
    let dd = (document.getElementById('act1-n-inp'));
    dd.innerHTML = ``;
    let op = new Option('--Select--', '0', true);
    dd.add(op);
    for (let i = 20; i < 31; i++) {
        let op = new Option(i.toString(), i.toString());
        dd.add(op);
    }
}
//for setting number of observations
function set_n() {
    let dd = (document.getElementById('act1-n-inp'));
    let btn = (document.getElementById('act1-btn-1'));
    if (dd.value != '0') {
        N = parseInt(dd.value);
        btn.style.display = 'block';
    }
    else {
        N = 0;
        btn.style.display = 'none';
    }
}
//Internal calculations to generate x and Y vectors
function internal_calculations_1() {
    let dd = (document.getElementById('act1-n-inp'));
    let dsp = (document.getElementById('dsp-N'));
    dd.remove();
    dsp.innerText = `n = ${N}`;
    //generate epsilon values
    epsilon1 = generate_epsilon_values();
    epsilon2 = generate_epsilon_values();
    //generate x vector (ascending)
    generate_random_x();
    //generate random beta0 and beta1 values
    beta0 = parseFloat((Math.random() * 2 - 1).toFixed(3));
    beta1 = parseFloat((Math.random() * 2 - 1).toFixed(3));
    console.log('beta0 = ' + beta0, 'beta1 = ' + beta1);
    Y0 = [];
    sum_Y = 0;
    //generate Y0 = beta0 + (beta1*x)
    for (let i = 0; i < x.length; i++) {
        Y0.push(parseFloat((beta0 + beta1 * x0[i]).toFixed(3)));
    }
    console.log(Y0);
    //calculate Y values
    let last_index = Y0.length - 1;
    Y = [];
    for (let i = 0; i < Y0.length; i++) {
        let ar = [];
        ar.push(parseFloat((Y0[i] + Y0[last_index] * epsilon2[i]).toFixed(3)));
        Y.push(ar);
        sum_Y += Y[i][0];
    }
    Y = Y.sort((a, b) => a[0] - b[0]);
    sum_Y = parseFloat(sum_Y.toFixed(3));
    console.log('Y', Y);
    console.log('x', x);
    console.log('Y0', Y0);
    console.log('sum_Y', sum_Y);
    //show x Y table
    show_x_y();
}
//for generating random x vector
function generate_random_x() {
    let arr = [];
    x0 = [];
    while (arr.length < N) {
        // let rv = 20 + Math.floor(Math.random() * 60);
        let rv = parseFloat((Math.random() * (1.7 - -1.7) + -1.7).toFixed(3));
        if (arr.indexOf(rv) == -1) {
            arr.push(rv);
        }
    }
    arr = arr.sort((a, b) => a - b);
    x0 = arr;
    sum_x = 0;
    x = [];
    let last_indx = x0.length - 1;
    for (let i = 0; i < x0.length; i++) {
        x.push(parseFloat((x0[i] + x0[last_indx] * epsilon1[i]).toFixed(3)));
        sum_x += x[i];
    }
    x = x.sort((a, b) => a - b);
    sum_x = parseFloat(sum_x.toFixed(3));
    console.log('x0', x0);
    console.log('sumX', sum_x);
}
//for generating epsilon values
function generate_epsilon_values() {
    let arr = [];
    while (arr.length < N) {
        let rv = Math.random() * 1.6 - 0.8;
        arr.push(parseFloat(rv.toFixed(3)));
    }
    //console.log(arr);
    return arr;
}
//to display x and Y vectors
function show_x_y() {
    let btn = (document.getElementById('act1-btn-1'));
    btn.remove();
    let d = document.getElementById('tb1-box');
    let text = `
        <br>
        <div class='table-responsive' style='margin: auto;'>
            <table class='table table-bordered ' style='background-color: white;' >
                <tr id='x-values'>
                <th class='table-dark'>x</th>
                </tr>

                <tr id='y-values'>
                <th class='table-dark'>Y</th>
                </tr>
            </table>

        </div>
        <br>
        
         <p class="fs-16px" style="text-align:left;">Compute the value of xbar and Ybar where Xbar: mean value of x, Ybar: mean value of Y,</p>

         <div class="row fs-16px" style="align-items:center;">
            <div>
               <div class="row" style="font-size:1.6vw;justify-content:center;align-items:center;">
                  <div class="col-2">
                     $$ \\bar{x} = \\frac {\\Sigma{x}}{n} = $$
                  </div>
                  <div class="col-5" style="text-align:left">
                     <input type='number' id='x-bar-inp' class='form-control fs-16px' />
                     <span  id='x-bar'></span>
                  </div>
               </div>
            </div>
            <div  >
               <div class="row" style="font-size:1.6vw;justify-content:center;align-items:center;">
                  <div class="col-2" >
                     $$ \\bar{Y} = \\frac {\\Sigma{Y}}{n} = $$
                  </div>
                  <div class="col-5" style="text-align:left">
                     <input type='number' id='y-bar-inp' class='form-control fs-16px' />
                     <span id='y-bar'></span>
                  </div>
               </div>
                
            </div>
         </div>
         <button class='btn btn-info std-btn' onclick='verify_x_y_bar();' style='position: relative; left: 0w;' id='vf-bar-btn'>Verify</button>
         <br>
         

        `;
    d.innerHTML += text;
    load_xy_values();
    setTimeout(() => MathJax.typeset(), 100);
}
function verify_x_y_bar() {
    let btn = (document.getElementById('vf-bar-btn'));
    let x_bar_inp = (document.getElementById('x-bar-inp'));
    let y_bar_inp = (document.getElementById('y-bar-inp'));
    let x_bar = (document.getElementById('x-bar'));
    let y_bar = (document.getElementById('y-bar'));
    x_bar_val = parseFloat((sum_x / N).toFixed(3));
    Y_bar_val = parseFloat((sum_Y / N).toFixed(3));
    console.log(x_bar_val, Y_bar_val);
    if (!verify_values(parseFloat(x_bar_inp.value), x_bar_val)) {
        x_bar_inp.style.border = '1px solid red';
        alert('Incorrect xbar value');
        return;
    }
    else {
        x_bar_inp.style.border = '1px solid #ced4da';
        x_bar_inp.disabled = true;
    }
    if (!verify_values(parseFloat(y_bar_inp.value), Y_bar_val)) {
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
    x_bar.innerText = x_bar_val.toString();
    y_bar.innerText = Y_bar_val.toString();
    act1_internal_calculations_2();
}
function load_xy_values() {
    let x_val = (document.getElementById('x-values'));
    let y_val = (document.getElementById('y-values'));
    for (let i = 0; i < Y.length; i++) {
        console.log(x[i]);
        x_val.innerHTML += `<td>${x[i]}</td>`;
        y_val.innerHTML += `<td>${Y[i][0]}</td>`;
    }
}
function act1_internal_calculations_2() {
    let div = (document.getElementById('tb1-box'));
    act1_table_data_1 = [];
    Sxx = 0;
    Syy = 0;
    Sxy = 0;
    for (let i = 0; i < x.length; i++) {
        let arr = [];
        let exp1 = x[i] - x_bar_val;
        let exp2 = Y[i][0] - Y_bar_val;
        arr.push(x[i]);
        arr.push(Y[i][0]);
        arr.push(parseFloat(exp1.toFixed(3)));
        arr.push(parseFloat((Math.pow(exp1, 2)).toFixed(3)));
        arr.push(parseFloat(exp2.toFixed(3)));
        arr.push(parseFloat((Math.pow(exp2, 2)).toFixed(3)));
        arr.push(parseFloat((exp1 * exp2).toFixed(3)));
        act1_table_data_1.push(arr);
        Sxx += act1_table_data_1[i][3];
        Syy += act1_table_data_1[i][5];
        Sxy += act1_table_data_1[i][6];
    }
    Sxx = parseFloat(Sxx.toFixed(3));
    Syy = parseFloat(Syy.toFixed(3));
    Sxy = parseFloat(Sxy.toFixed(3));
    div.innerHTML += `
      <div class='fx-16px' style="text-align:left;">
         <p>
            The regression equation of given data set is Y=a+bX (The estimated value of a and b will be displayed in equation)
            <br>
            Calculate x-x&#x0305;, Y-Y&#x0305;, Y', Y-Y'
         </p>
         <div id="act1-tb-box2" style="text-align: center;"></div>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-btn-2' onclick='activity1_p1()' >Next</button>
      </div>
   `;
    let tb_box = (document.getElementById('act1-tb-box2'));
    let header = [
        'x',
        'Y',
        '(x-x&#x0305;)',
        '(x-x&#x0305;)<sup>2</sup>',
        '(Y-Y&#x0305;)',
        '(Y-Y&#x0305;)<sup>2</sup>',
        '(x-x&#x0305;)(Y-Y&#x0305;)',
    ];
    let tab = new Verify_Rows_Cols(header, act1_table_data_1, [0], [[2, 3, 4, 5, 6]], '', tb_box, true, true, move_to_activity1_p1);
    tab.load_table();
}
function move_to_activity1_p1() {
    let btn = (document.getElementById('act1-btn-2'));
    btn.style.display = 'block';
}
// <div class='row' id='s2'>
// <div class='col-6'>Enter Alpha Value</div>
// <div class='col-6'>
//     <select class='form-select fs-16px' disabled  id='act1-alpha-inp' onchange= 'set_alpha();'>
//     </select>
// </div>
// </div>
activity1();
//# sourceMappingURL=activity1.js.map