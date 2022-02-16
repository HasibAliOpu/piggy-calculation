document.getElementById('calculate-btn').addEventListener('click',function(){
     const incomeInput = getInput('income-input');
     
     const foodInput = getInput('food-input');
      
     const rantInput = getInput('rant-input');
    
     const clothesInput = getInput('clothes-input');

     const totalExpenses = foodInput + rantInput + clothesInput;

     const expensesTotal = document.getElementById('expenses-total');
     expensesTotal.innerText = totalExpenses;

     const balanceTotal = incomeInput - expensesTotal.innerText;
     
     const totalBalance = document.getElementById('balance-total');
    //  const previousBalance = parseInt(totalBalance.innerText);
     totalBalance.innerText =  balanceTotal;
     
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
    
    if(isNaN(totalInputValue) || totalInputValue <0){
        console.log('number deya!!');
        input.value = '';
        return alert('plzz..')
    }
    input.value = '';
    return totalInputValue;
}