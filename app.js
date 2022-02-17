           //////// income section \\\\\\\\\
document.getElementById('calculate-btn').addEventListener('click',function(){
     const incomeInput = getInput('income-input');
     
     const foodInput = getInput('food-input');
      
     const rantInput = getInput('rant-input');
    
     const clothesInput = getInput('clothes-input');
     const totalExpenses = foodInput + rantInput + clothesInput;
    
     ///// income input Error handle \\\\\\\\
     if(isNaN(incomeInput) || incomeInput<0){
         return alert('Please...give vaild number on Income Input,Thank You!!')
     }
     if(isNaN(foodInput) || foodInput<0){
         return alert('Please...give vaild number on Food Input,Thank You!!')
     }
     if(isNaN(rantInput) || rantInput<0){
         return alert('Please...give vaild number on Rant Input,Thank You!!')
     }
     if(isNaN(clothesInput) || clothesInput<0){
         return alert('Please...give vaild number on Clothes input,Thank You!!')
     }
    if(incomeInput<totalExpenses){        
     
     return alert('Sorry...Your Expenses is more than your Income Amount!!')
    }
    else{
    const expensesTotal = getInputValue('expenses-total');
    expensesTotal.innerText = totalExpenses;
    const balanceTotal = incomeInput - totalExpenses;
     
    const totalBalance = getInputValue('balance-total');
    totalBalance.innerText =  balanceTotal; 
    } 
})
      //////// saving section \\\\\\\\
document.getElementById('save-btn').addEventListener('click', function(){
    ///////// getting saving input and values \\\\\\\\
    const saving =  getInputValue('saving-input');

    const totalBalance = getInputValue('balance-total');

    const savingAmount = getInputValue('saving-amount');

    const remainingBalance = getInputValue('remaining-balance')

    ////////// calculate Total Saving Amount \\\\\\\\\\\\\\
    const totalSaving = (totalBalance.innerText*saving.value)/100;
    savingAmount.innerText = totalSaving;
    const remainingAmount = totalBalance.innerText - savingAmount.innerText;
    remainingBalance.innerText = remainingAmount;
    /// clean saving input field \\\
    saving.value = '';
})
 ///////// get input value Function \\\\\\

function getInputValue(totalAmount) {
    return document.getElementById(totalAmount);
}
////////// get input field function \\\\\\\

function getInput(inputField) {
    let input =  document.getElementById(inputField)
    let totalInputValue = parseInt(input.value);
    input.value = '';
    return totalInputValue;
}