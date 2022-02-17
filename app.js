document.getElementById('calculate-btn').addEventListener('click',function(){
     const incomeInput = getInput('income-input');
     
     const foodInput = getInput('food-input');
      
     const rantInput = getInput('rant-input');
    
     const clothesInput = getInput('clothes-input');
     const totalExpenses = foodInput + rantInput + clothesInput;

     if(isNaN(incomeInput) || incomeInput<0){
         return alert('please...give vaild number on Income Input!')
     }
     if(isNaN(foodInput) || foodInput<0){
         return alert('please...give vaild number on Food Input!')
     }
     if(isNaN(rantInput) || rantInput<0){
         return alert('please...give vaild number on Rant Input!')
     }
     if(isNaN(clothesInput) || clothesInput<0){
         return alert('please...give vaild number on Clothes input!')
     }
    if(incomeInput<totalExpenses){        
     
     return alert('Your Expenses is more than your Income Amount!')
    }
    else{
    const expensesTotal = document.getElementById('expenses-total');
    expensesTotal.innerText = totalExpenses;
    const balanceTotal = incomeInput - totalExpenses;
     
    const totalBalance = document.getElementById('balance-total');
    totalBalance.innerText =  balanceTotal; 
    } 
})

document.getElementById('save-btn').addEventListener('click', function(){
    const saving = document.getElementById('saving-input');
     const totalBalance = document.getElementById('balance-total');
    const savingAmount = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance')
    const totalSaving = (totalBalance.innerText*saving.value)/100;
    savingAmount.innerText = totalSaving;
    const remainingAmount = totalBalance.innerText - savingAmount.innerText;
    remainingBalance.innerText = remainingAmount;
})

function getInput(inputField) {
    let input =  document.getElementById(inputField)
    let totalInputValue = parseInt(input.value);
    input.value = '';
    return totalInputValue;
}