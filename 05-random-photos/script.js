const imgContainer = document.querySelector(".img-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener('click', addMoreImages())

function addMoreImages(){
    const newElem = document.createElement("img");
    newElem.src = `https://picsum.photos/id/${Math.floor(Math.random() * 200)}`;
    newElem.style.width = "300px"
    newElem.style.height = "300px"
    imgContainer.append(newElem)
}