let array = [8,7,5,3,1,6,9,4,2];



const iterator = array.values();
let one = iterator.next().value;
let two = iterator.next().value;
let three = iterator.next().value;
let four = iterator.next().value;
let five = iterator.next().value;


document.querySelector('#array').innerHTML = array;
document.querySelector('#arr1').innerHTML = one;
document.querySelector('#arr2').innerHTML = two;
document.querySelector('#arr3').innerHTML = three;
document.querySelector('#arr4').innerHTML = four;
document.querySelector('#arr5').innerHTML = five;