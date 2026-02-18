const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", function(event){
    const x = event.pageX - btn.offSetLeft;
    const y = event.pageY - btn.offSetTop;

    btn.style.setProperty = ("--xPos", x + "px")
    btn.style.setProperty = ("--yPos", y + "px")
})