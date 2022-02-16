document.getElementById('calculate-btn').addEventListener('click',function(){
     const incomeInput = getInput('income-input');
     
     const foodInput = getInput('food-input');
      
     const rantInput = getInput('rant-input');
    
     const clothesInput = getInput('clothes-input');

     const totalExpenses = foodInput + rantInput + clothesInput;

     const expensesTotal = document.getElementById('expenses-total');
     const previousExpenses = parseInt(expensesTotal.innerText);
     expensesTotal.innerText = totalExpenses;

     const balanceTotal = incomeInput - expensesTotal.innerText;
     
     const totalBalance = document.getElementById('balance-total');
     const previousBalance = parseInt(totalBalance.innerText);
     totalBalance.innerText = previousBalance + balanceTotal;
     
})

function getInput(inputField) {
    const input =  document.getElementById(inputField)
    input.value = '';
    if(isNaN(input) || 0> input ){
        console.log('number deya!!');
        return alert('plzz..give a number')
    }
    const totalIncomeText = parseInt(input.value)
   
    return totalIncomeText;
}