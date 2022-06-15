const btnDisplay = document.querySelector('#display');

let numbers = [5,4,2,1,5,9,7,5,6,4,6,3,2,3,8,7]
document.querySelector('#array').innerHTML = numbers;


btnDisplay.addEventListener('click',()=>{
    let first = numbers[0]
    let last = numbers[numbers.length-1];
    

    document.querySelector('#output').innerHTML = `The first number in the array is ${first}
    and the last number in the array is ${last}`;
})