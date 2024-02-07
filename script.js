const button = document.querySelector('#button');

button.addEventListener('click', askMe);

function askMe() {

    const divSquares = document.querySelector('#divSquares');

    while (divSquares.firstChild) {
        divSquares.removeChild(divSquares.firstChild);
    }

    let x = 0;

    do {
        x = prompt("Enter number of squares per side (100 maximum):");
        console.log(x);
    } while ((x < 0) || (x > 100))

    console.log(`Squares Per Side ${x}`);

    let y = Math.pow(x, 2);
    console.log(`Total Squares ${y}`);

    for (let i = 0; i < y; ++i) {
        let squareBlack = document.createElement('div');
        squareBlack.className = 'squareBlack';
        let wide = (960 / x) - 2; // get number of squares per side
        squareBlack.style.width = `${wide}px`;
        squareBlack.style.aspectRatio = '1 / 1';
        squareBlack.style.border = '1px solid black';
        squareBlack.style.backgroundColor = 'black';

        let square = document.createElement('div');
        square.className = 'square';
        square.style.width = `${wide}px`;
        square.style.aspectRatio = '1 / 1';
        square.style.backgroundColor = 'white';

        squareBlack.appendChild(square);
        divSquares.appendChild(squareBlack);
    }

}

divSquares.addEventListener('mouseover', sketchMe);

function sketchMe(e) {

    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

    let r = getRandomIntInclusive(0, 255);
    let g = getRandomIntInclusive(0, 255);
    let b = getRandomIntInclusive(0, 255);

    console.log("Target Element " + e.target.className + " | Event Type " + e.type);

    if (e.target.className === "square") {
        e.target.style.opacity = '1';
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        e.target.className = 'squareColor';
        // e.target.className += ' shade';
    } else if (e.target.className === "squareColor") {
        let o = e.target.style.opacity;
        console.log(`Opacity Before: ${o}`);
        e.target.style.opacity -= 0.1;
        console.log(`Opacity After: ${o}`);
    }

}