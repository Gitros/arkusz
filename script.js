const obliczBtn = document.getElementById('obliczBtn');
const spalanieInput = document.getElementById('spalanie');
const dystansInput = document.getElementById('dystans');

const oblicz = () => {
    let x = parseInt(spalanieInput.value);
    let y = parseInt(dystansInput.value);
    
}



obliczBtn.addEventListener('click', oblicz)