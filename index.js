
const text = "I am Sidharth Hejamadi.";
let index = 0;

function type() {
    const span = document.querySelector("span");
    span.textContent += text[index];
    index++;
    if (index === text.length) {
    clearInterval(timer);
    span.insertAdjacentHTML("beforeend", '<span class="cursor">|</span>');
        }
    }

const timer = setInterval(type, 100);

window.addEventListener("load", function() {
document.body.classList.add("fade-in");
});





const footer = document.querySelector("footer");
const btn = document.querySelector(".btn");
const scrollHeight = document.documentElement.scrollHeight;
const clientHeight = document.documentElement.clientHeight;
if (scrollHeight <= clientHeight) {
btn.style.display = "none";
footer.style.paddingBottom = "0";
    }

