const btnDisplay = document.querySelector('#display')

btnDisplay.addEventListener('click', ()=>{
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);
    let calculate = num1 + num2;
    document.querySelector('#output').innerHTML = `${calculate}`;
})