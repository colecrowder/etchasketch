const container = document.querySelector('#container');
let gridDimensions = prompt("How many pixels per side?",16);
let gridWidth = 100 / gridDimensions;
let plainBW = false;

function gridMaker() {
    for (let i = 0 ; i < Math.pow(gridDimensions, 2) ; i++) {
        const content = document.createElement('div');
        content.classList.add('box');
        content.style.width = `${gridWidth}%`;
        if (plainBW == true) {
            content.addEventListener("mouseover", colorBW);
        } else {
            content.addEventListener("mouseover", colorChange);
        }
        container.appendChild(content);
    }
}
gridMaker();

let bgColor;
function randomColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    bgColor = "rgb(" + x + "," + y + "," + z + ")";
}

function colorBW(event) {
    const opacity = window.getComputedStyle(event.target);
    event.target.style.opacity = `${opacity.getPropertyValue('opacity') - 0.1}`;
}

function colorChange(event) {
    randomColor();
    event.target.style.background = bgColor;
}

function wipeGrid() {
    while ( container.childNodes.length > 0 ) {
        container.removeChild(container.lastChild);
    }
}

function resetOpacity() {
    grid = document.querySelectorAll('.box');
    for ( let i = 0; i < grid.length; i++) {
        grid[i].style.background = `black`;
    }
}

const reset = document.querySelector('#reset');
reset.addEventListener("click", resetOpacity);

const size = document.querySelector('#size');
size.addEventListener("click", function() {
    gridDimensions = prompt("How many pixels per side?",16);
    gridWidth = 100 / gridDimensions;
    wipeGrid();
    gridMaker();
    grid = document.querySelectorAll('.box');
});

const color = document.querySelector('#color');
color.addEventListener("click", function() {
    if (plainBW == true) {
        plainBW = false;
    } else {
        plainBW = true;
    }
    wipeGrid();
    gridMaker();
})