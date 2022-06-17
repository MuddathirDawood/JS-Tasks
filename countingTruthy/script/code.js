let array = [true,true,false,false,false,true,false,false,true];


document.querySelector('#array').innerHTML = array;
document.querySelector('#arr2').innerHTML = array.filter(Boolean).length;
;
