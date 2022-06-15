const btnDisplay = document.querySelector('#display');

btnDisplay.addEventListener('click',()=>{
    let dob = document.querySelector('#birth').value;
    let days = (new Date() - new Date(dob)) / (1000 * 60 * 60 * 24);
    

    document.querySelector('#output').innerHTML = `${Math.round(days)} days from birth`;
})