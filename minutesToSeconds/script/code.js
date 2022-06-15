const btnDisplay = document.getElementById('result');

btnDisplay.addEventListener('click',()=>{
    let minutes = document.getElementById('min').value;
    let seconds = minutes*60;

    document.getElementById('sec').innerHTML = `${seconds} seconds`;
})

