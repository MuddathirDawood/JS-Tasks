const btnDisplay = document.querySelector('#display');

btnDisplay.addEventListener('click',()=>{
    let amount = document.querySelector('#amount').value;
    let interest = document.querySelector('#interest').value;

    let result = amount * (interest/100+1);

    document.querySelector('#output').innerHTML =  'R'+Math.floor(result);

})