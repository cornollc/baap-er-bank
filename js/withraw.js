// simpol match

document.getElementById('btn-widthraw').addEventListener('click', function(){
    const widthrawFild = document.getElementById('widthraw-fild');
    const newWidthrowAmontString = widthrawFild.value;
    const WidthrawAmount = parseFloat(newWidthrowAmontString);
    
    // step :-2;
    const widthrawTotalElement = document.getElementById('widthraw-total');
    const parstWodthrawTotalString = widthrawTotalElement.innerText;
    const parstWidthraw = parseFloat(parstWodthrawTotalString);
    const cuurentWidthraw = WidthrawAmount + parstWidthraw;
    widthrawTotalElement.innerText = cuurentWidthraw;
    // step :-2;
    // total widthraw figer out in total amount
    const previusTotalBalance = document.getElementById('balance-total');
    const previsBalanceTotalString = previusTotalBalance.innerText;
    const privusBalance = parseFloat(previsBalanceTotalString);
    const updateBalance = privusBalance - WidthrawAmount;
    previusTotalBalance.innerText = updateBalance;


    // blank widthraw input fild
    widthrawFild.value = '';
})