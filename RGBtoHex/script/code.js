const btnDisplay = document.querySelector('#convert');

function slice(hexcode,start,end){
    return hexcode.slice(start,end);
}

btnDisplay.addEventListener('click',()=>{

    let redcode = parseInt(document.querySelector('#rgbR').value);
    let greencode = parseInt(document.querySelector('#rgbG').value);
    let bluecode = parseInt(document.querySelector('#rgbB').value);

    let hexString = redcode.toString(16) + greencode.toString(16) + bluecode.toString(16);

    document.querySelector('#hex').innerHTML = '#'+hexString;

    let clrpane = document.querySelector('#color');
    let value = '#' + hexString; 
    clrpane.style = `background-color: ${value}`;

})

