
function catchInput(num){
    const depositInput = document.getElementById(num);
    const depositAmount = parseFloat(depositInput.value);

    depositInput.value = '';
    return depositAmount;
};

// get input total 
function inputTotal(inputId, depositAmount){
    const depositTotal = document.getElementById(inputId);
    
    const depositPrevious = parseFloat(depositTotal.innerText);
    const depositTotalBalance = depositAmount + depositPrevious;
    depositTotal.innerText = depositTotalBalance;
    return depositTotalBalance;
}






document.getElementById('deposite-button').addEventListener('click', function(){
   
    const depositAmount = catchInput('deposite-input');
    
    // add deposite in deposit total
    // const depositTotal = document.getElementById('doposite-total');
    
    // const depositPrevious = parseFloat(depositTotal.innerText);
    // const depositTotalBalance = depositAmount + depositPrevious;
    // depositTotal.innerText = depositTotalBalance;
     inputTotal('doposite-total', depositAmount);
    // udate balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalancePrevious = parseFloat(totalBalance.innerText);
    const newBalance = depositAmount + totalBalancePrevious;
    totalBalance.innerText = newBalance;

    
  
    
});

// withraw and balance
document.getElementById('withraw-button').addEventListener('click', function(){
    // const withrawInput = document.getElementById('withraw-input');
    // const withrawInputText = parseFloat(withrawInput.value);
    const withrawInputText = catchInput('withraw-input');

    // set withraw 
// const withrawTotal = document.getElementById('withraw-total');
// const withrawTotalPrevious = parseFloat(withrawTotal.innerText);
// const newWithrawBalance = withrawInputText + withrawTotalPrevious;
// withrawTotal.innerText = newWithrawBalance;

inputTotal('withraw-total',withrawInputText );

// update balance after withraw 
    const totalBalance = document.getElementById('balance-total');
    const totalBalancePrevious = parseFloat(totalBalance.innerText);
    const newBalance = totalBalancePrevious - withrawInputText;
    totalBalance.innerText = newBalance;

    
});