const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 100;
    // console.log(size);
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    // spanEl.style.border = "2px solid red"
    bodyEl.appendChild(spanEl);
    setInterval(() => {
        spanEl.remove();
    }, 3000);
});