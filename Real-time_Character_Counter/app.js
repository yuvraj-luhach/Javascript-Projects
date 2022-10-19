const textareaEl = document.querySelector(".textspace");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

for (let i = 0; i < 1000; i++) {
    console.log(1);
}


// setTimeout(console.log(textareaEl, totalCounterEl, remainingCounterEl), 6000)

// console.log(textareaEl.value);

textareaEl.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = 50 - textareaEl.value.length;
}