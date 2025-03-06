function activity1_p1() {
    let btn = (document.getElementById('act1-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Calculate Sxx, Syy, Sxy', 'act1-p1-div');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide text-center " id="act1-p1-div">
         <div class="fs-16px" style="text-align:left;">
            <div class="row">
               <div class="col-lg-8">
                  Sxx(Sum of squared deviation of x from the mean Xbar) = &sum;(x<sub>i</sub> - x&#x0305;)<sup>2</sup> =
               </div>
               <div class="col-lg-4">
                  <span class="fs-16px" id="sxx-dsp"></span>
                  <input type='number' id='sxx-inp' class='form-control fs-16px' />
               </div>
            </div>
            <br>
            <div class="row">
               <div class="col-lg-8">
                  Syy(Sum of squared deviations of Y from the mean Ybar) = &sum;(Y<sub>i</sub>-Y&#x0305;)<sup>2</sup> =
               </div>
               <div class="col-lg-4">
                  <span class="fs-16px" id="syy-dsp"></span>
                  <input type='number' id='syy-inp' class='form-control fs-16px' />
               </div>
            </div>
            <br>
            <div class="row">
               <div class="col-lg-8">
                  Sxy(Product of deviation of x from the mean Xbar and deviation of Y from the mean Ybar(x<sub>i</sub> and Y<sub>i</sub> pair wise)) = &sum;(x<sub>i</sub> - x&#x0305;)(Y<sub>i</sub>-Y&#x0305;) =
               </div>
               <div class="col-lg-4">
                  <span class="fs-16px" id="sxy-dsp"></span>
                  <input type='number' id='sxy-inp' class='form-control fs-16px' />
               </div>
            </div>

            <br>
            
         </div>
         <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p1-btn-1' onclick='verify_sxx_syy();'>Verify</button>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p1-btn-2' onclick='activity1_p2()'>Next</button>
      </div>
   `;
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-p1-div');
    }, 150);
}
function verify_sxx_syy() {
    let btn1 = (document.getElementById('act1-p1-btn-1'));
    let btn2 = (document.getElementById('act1-p1-btn-2'));
    let sxx_inp = (document.getElementById('sxx-inp'));
    let syy_inp = (document.getElementById('syy-inp'));
    let sxy_inp = (document.getElementById('sxy-inp'));
    let sxx_dsp = (document.getElementById('sxx-dsp'));
    let syy_dsp = (document.getElementById('syy-dsp'));
    let sxy_dsp = (document.getElementById('sxy-dsp'));
    console.log(Sxx, Syy, Sxy);
    if (!verify_values(parseFloat(sxx_inp.value), Sxx)) {
        sxx_inp.style.border = '1px solid red';
        alert('Incorrect Sxx Value');
        return;
    }
    else {
        sxx_inp.style.border = '1px solid #ced4da';
        sxx_inp.disabled = true;
    }
    if (!verify_values(parseFloat(syy_inp.value), Syy)) {
        syy_inp.style.border = '1px solid red';
        alert('Incorrect Syy Value');
        return;
    }
    else {
        syy_inp.style.border = '1px solid #ced4da';
        syy_inp.disabled = true;
    }
    if (!verify_values(parseFloat(sxy_inp.value), Sxy)) {
        sxy_inp.style.border = '1px solid red';
        alert('Incorrect Sxy Value');
        return;
    }
    else {
        sxy_inp.style.border = '1px solid #ced4da';
        sxy_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    sxx_inp.remove();
    syy_inp.remove();
    sxy_inp.remove();
    sxx_dsp.innerText = Sxx.toString();
    syy_dsp.innerText = Syy.toString();
    sxy_dsp.innerText = Sxy.toString();
    btn1.remove();
    btn2.style.display = 'block';
}
// activity1_p1();
//# sourceMappingURL=activity1_p1.js.map