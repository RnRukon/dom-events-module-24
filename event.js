function redButton() {
    document.body.style.backgroundColor = 'red';
}

//just set the name of function
const blueButton = document.getElementById('blueButton');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// handle event using anonymous function
const greenButton = document.getElementById('greenButton');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//handle by using addEventListener function

const goldenrodButton = document.getElementById('goldenrodButton');
goldenrodButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

//add addEventListener 
const hotPinkButton = document.getElementById('hotPinkButton');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

//  direct shortcut---------------------------------
document.getElementById('LightBlueButton').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})
