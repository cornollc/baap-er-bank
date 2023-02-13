// deposit html javascript;
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositFild = document.getElementById('deposit-fild');
    const newDepositAmountString = depositFild.value;
    const depositAmount = parseFloat(newDepositAmountString);
    // console.log(depositAmount);



    // step 2 total depojit;
    const depositTotalElement = document.getElementById('deposit-totla');
    const previusDepositTotalString = depositTotalElement.innerText;
    const previusDeposit = parseFloat(previusDepositTotalString);
    const cuurentDeposit = depositAmount + previusDeposit;
    depositTotalElement.innerText = cuurentDeposit;
    
    // step number 3;
    // total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previsBalanceTotalString = balanceTotalElement.innerText;
    const privusTotlaBalance = parseFloat(previsBalanceTotalString);
    const cuurentBalanceTotal = privusTotlaBalance + depositAmount;
    balanceTotalElement.innerText = cuurentBalanceTotal;
    
    
   

// clear input fild
    depositFild.value = '';
})