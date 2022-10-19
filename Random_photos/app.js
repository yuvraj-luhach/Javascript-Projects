const containerEl = document.getElementById("container")

const buttonEl = document.getElementById("load")

function loadmore() {
    for (let i = 0; i < 15; i++) {
        const spanEl = document.createElement("span")
        let randomImg = Math.floor(Math.random() * 10000)
        spanEl.style.background = `url(https://picsum.photos/300?random=${randomImg})`
        containerEl.appendChild(spanEl)
    }
}

loadmore()

buttonEl.addEventListener("click", event => {
    loadmore();
})