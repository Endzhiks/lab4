const name = document.getElementById('name');
const info = document.querySelector('.info');
const image = document.querySelector('img');
const addButton = document.getElementById('add');
const deleteButton = document.getElementById('delete');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

function onNameClick(event) {
    name.style.backgroundColor = 'lightgreen';
    name.style.color = 'white';
}

function onInfoClick(event) {
    image.style.backgroundColor = 'lightgreen';
    info.style.color = 'white';
}

function onIncreaseImageClick(event) {
    const currentSize = window.getComputedStyle(image).width;
    const newSize = parseInt(currentSize) * 1.2;
    image.style.width = newSize + 'px';
}

function onDecreaseImageClick(event) {
    const currentSize = window.getComputedStyle(image).width;
    const newSize = parseInt(currentSize) * 0.8;
    image.style.width = newSize + 'px';
}

function onAddImageClick(event) {
    image.style.display = 'inline';
}

function onDeleteImageClick(event) {
    image.style.display = 'none';
}

name.addEventListener('click', onNameClick);
info.addEventListener('click', onInfoClick);
addButton.addEventListener('click', onAddImageClick);
deleteButton.addEventListener('click', onDeleteImageClick);
increaseButton.addEventListener('click', onIncreaseImageClick);
decreaseButton.addEventListener('click', onDecreaseImageClick);
