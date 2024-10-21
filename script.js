const tUbahWarna = document.getElementById('tUbahWarna');

tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}


const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('acak warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
// document.body.appendChild(tAcakWarna);
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // document.body.style.backgroundColor = 'rgb(' + red +','+ green +','+ blue + ')';
    document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`
});



const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
});

document.body.addEventListener('mousemove', function(event) {
    // posisi mouse
    // console.log(event.clientY);
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
}); 