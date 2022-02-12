// get input value 
function catchInput(num){
    const depositInput = document.getElementById(num);
    const depositAmount = parseFloat(depositInput.value);

    depositInput.value = '';
    return depositAmount;
};

// get input total 
function inputTotal(inputId, amount){
    const depositTotal = document.getElementById(inputId);
    
    const depositPrevious = parseFloat(depositTotal.innerText);
    const depositTotalBalance = amount + depositPrevious;
    depositTotal.innerText = depositTotalBalance;
    return depositTotalBalance;
};
//  // current balance function 
//     function currentBalance(){
//         const totalBalance = document.getElementById(id);
//         const totalBalancePrevious = parseFloat(totalBalance.innerText);
//         totalBalance.innerText = amount + totalBalancePrevious;
//         return totalBalancePrevious;
//     }  
// update balance 
    function updateBalance(id,amount, isAdd){
        const totalBalance = document.getElementById(id);
        const totalBalancePrevious = parseFloat(totalBalance.innerText);
        totalBalance.innerText = amount + totalBalancePrevious;
        
    if(isAdd == true){
        totalBalance.innerText = amount + totalBalancePrevious;
    }
    else{
        totalBalance.innerText = totalBalancePrevious - amount;
    }
    return;
    };
   
   
   








document.getElementById('deposite-button').addEventListener('click', function(){
   
    
    const depositAmount = catchInput('deposite-input');

    if(depositAmount > 0 ){
        inputTotal('doposite-total', depositAmount);
    updateBalance('balance-total',depositAmount, true);
    }
    // add deposite in deposit total
    // const depositTotal = document.getElementById('doposite-total');
    
    // const depositPrevious = parseFloat(depositTotal.innerText);
    // const depositTotalBalance = depositAmount + depositPrevious;
    // depositTotal.innerText = depositTotalBalance;
    

    // udate balance
    // const totalBalance = document.getElementById('balance-total');
    // const totalBalancePrevious = parseFloat(totalBalance.innerText);
    // const newBalance = depositAmount + totalBalancePrevious;
    // totalBalance.innerText = newBalance;
   

    
  
    
});

// withraw and balance
document.getElementById('withraw-button').addEventListener('click', function(){
    // const withrawInput = document.getElementById('withraw-input');
    // const withrawInputText = parseFloat(withrawInput.value);
    const withrawInputText = catchInput('withraw-input');
   
    if(withrawInputText > 0){
        inputTotal('withraw-total',withrawInputText );
    updateBalance('balance-total',withrawInputText, false);
    }
    

    // set withraw 
// const withrawTotal = document.getElementById('withraw-total');
// const withrawTotalPrevious = parseFloat(withrawTotal.innerText);
// const newWithrawBalance = withrawInputText + withrawTotalPrevious;
// withrawTotal.innerText = newWithrawBalance;



// update balance after withraw 
    // const totalBalance = document.getElementById('balance-total');
    // const totalBalancePrevious = parseFloat(totalBalance.innerText);
    // const newBalance = totalBalancePrevious - withrawInputText;
    // totalBalance.innerText = newBalance;
    
    
});