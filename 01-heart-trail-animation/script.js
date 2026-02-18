const bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", function(e){
    let x = e.x;
    let y = e.y;
    let spanEl = document.createElement("span");
    spanEl.style.left = x + "px";
    spanEl.style.top = y + "px";
    bodyEl.append(spanEl);

    const size = Math.floor(Math.random() * 100) + 1;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";


    setTimeout(() => {
        spanEl.remove()
    }, 3000);
})