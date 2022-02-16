document.getElementById('calculate-btn').addEventListener('click',function(){
     const incomeInput = getInput('income-input');
     console.log(incomeInput);
     const foodInput = getInput('food-input');
     console.log(foodInput);
     const rantInput = getInput('rant-input');
     console.log(rantInput);
     const clothesInput = getInput('clothes-input');
     console.log(clothesInput);
     
})

function getInput(inputField) {
    const input =  document.getElementById(inputField)
    const totalIncomeText = parseInt(input.value)
     input.value = '';
    return totalIncomeText;
}