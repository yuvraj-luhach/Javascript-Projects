const tabEl = document.querySelector(".steps");
const tabsList = document.querySelectorAll(".step")
const contentList = document.querySelectorAll(".content")



tabEl.addEventListener("click", (event) => {

    // console.log(event.target);
    // console.log(event.target.dataset.id);
    // tabEl.classList.add("live")
    const id = event.target.dataset.id;

    if (event.target.dataset.id) {
        tabsList.forEach((tab) => {
            tab.classList.remove("live")
        })
        event.target.classList.add("live")

        contentList.forEach((content) => {
            content.classList.remove("live")
        })
        const element = document.getElementById(id)
        element.classList.add("live")
    }
})