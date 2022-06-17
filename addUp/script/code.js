const btnDisplay = document.querySelector('#display')
let numbers = [5,8,7,1,3,9,5,4,6,2,8]
document.querySelector('#nums').value = numbers;

btnDisplay.addEventListener('click', ()=>{
    let sum = eval(numbers.join('+')); 
    document.querySelector('#output').innerHTML = `${sum}`;
})