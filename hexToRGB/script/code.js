const btnDisplay = document.querySelector('#convert');

function slice(hexcode,start,end){
    return hexcode.slice(start,end);
}

btnDisplay.addEventListener('click',()=>{

    let hexcode = document.querySelector('#hex').value;

    let redcode = slice(hexcode,0,2);
    let greencode = slice(hexcode,2,4);
    let bluecode = slice(hexcode,4,6);

    document.querySelector('#rgbR').innerHTML = parseInt(redcode, 16)
    document.querySelector('#rgbG').innerHTML = parseInt(greencode, 16)
    document.querySelector('#rgbB').innerHTML = parseInt(bluecode, 16)
    document.querySelector('#RGBCode').innerHTML = 'rgb(' + parseInt(redcode, 16) + ', ' + parseInt(greencode, 16) + ', ' + parseInt(bluecode, 16) + ')'

    let clrpane = document.querySelector('#color');
    let value = 'rgb(' + parseInt(redcode, 16) + ', ' + parseInt(greencode, 16) + ', ' + parseInt(bluecode, 16) + ')';
    clrpane.style = `background-color: ${value}`;

})





// const rgbToHex = (r, g, b) =>
//   "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);   RGB TO HEX

// rgbToHex(0, 51, 255);