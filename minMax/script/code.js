const btnDisplay = document.querySelector('#display');

let numbers = [18,5,9,7,5,20,4,6,10,2,3,8,7]
document.querySelector('#array').innerHTML = numbers;


btnDisplay.addEventListener('click',()=>{
    let first = Math.min.apply(0,numbers);
    let last = Math.max.apply(0,numbers);
    

    document.querySelector('#output').innerHTML = `The minimum number in the array is ${first}
    and the maximum number in the array is ${last}`;
})