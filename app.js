           //////// income section \\\\\\\\\
document.getElementById('calculate-btn').addEventListener('click',function(){
     const incomeInput = getInputValue('income-input');
     
     const foodInput = getInputValue('food-input');
     
     const rantInput = getInputValue('rant-input');
    
     const clothesInput = getInputValue('clothes-input');
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
    const expensesTotal = getInput('expenses-total');
    expensesTotal.innerText = totalExpenses;
    const balanceTotal = incomeInput - totalExpenses;
     
    const totalBalance = getInput('balance-total');
    totalBalance.innerText =  balanceTotal; 
    } 
})
      //////// Saving section \\\\\\\\
document.getElementById('save-btn').addEventListener('click', function(){
    
    /////////Get Saving input and values \\\\\\\\
    const saving =  getInput('saving-input');

    const totalBalance = getInput('balance-total');

    const totalIncome = getInput('income-input')
    
    const savingAmount = getInput('saving-amount');

    const remainingBalance = getInput('remaining-balance')

    ////////// calculate Total Saving Amount \\\\\\\\\\\\\\
    const totalSaving = (totalIncome.value*saving.value)/100;
    savingAmount.innerText = totalSaving;
   
    if(savingAmount.innerText>totalBalance.innerText){
        savingAmount.innerText = 0;
        return alert('Not Enough Money for Saving!!')
    }
    const remainingAmount = totalBalance.innerText - savingAmount.innerText;
    remainingBalance.innerText = remainingAmount;
    
})
 ///////// get input value Function \\\\\\

function getInput(totalAmount) {
    return document.getElementById(totalAmount);
}
////////// get input field function \\\\\\\

function getInputValue(inputField) {
    let input =  document.getElementById(inputField)
    let totalInputValue = parseInt(input.value);
    return totalInputValue;
}