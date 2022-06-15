const btnDisplay = document.querySelector('#display')

btnDisplay.addEventListener('click',()=>{
    let base = document.querySelector('#base').value;
    let height = document.querySelector('#height').value;

    let area = (base/2) * height;

    document.querySelector('#output').innerHTML = `${area} cm²`;
})