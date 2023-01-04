let header = document.querySelector('.header');
let button = document.querySelector('.btn');
let span = document.querySelector('.title span');
let headerColor;

if (sessionStorage.getItem('headerColor')) {
    headerColor = sessionStorage.getItem('headerColor');
    header.style.backgroundColor = headerColor;
    if (button) button.style.backgroundColor = headerColor;
    if (span) span.style.color = headerColor;
};

header.addEventListener('click', changeColor);

function changeColor() {
    sessionStorage.setItem('headerColor', header.style.backgroundColor);
    let randColor = randomizeColor(5);

    header.style.backgroundColor = randColor;
    if (button) button.style.backgroundColor = randColor;
    if (span) span.style.color = randColor;

}

function randomizeColor(light = 16) {
    let letters = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * light)];
    }
    return color;
}
