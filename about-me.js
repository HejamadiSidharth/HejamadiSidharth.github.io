


const text = "Meet Sidharth, a passionate individual whose heart beats for coding and the thrill of the tennis court. With a keen eye for detail and a knack for problem-solving, Sidharth thrives in the world of programming, where he transforms lines of code into functional masterpieces. When he's not immersed in the digital realm, you'll find him gracefully gliding across the tennis court, showcasing his agility and precision.";
let index = 0;

function type() {
    const span = document.querySelector("span");
    span.textContent += text[index];
    index++;
    if (index === text.length) {
    clearInterval(timer);
    span.insertAdjacentHTML("beforeend", '<span class="cursor"></span>');
        }
    }

const timer = setInterval(type, 20);

window.addEventListener("load", function() {
document.body.classList.add("fade-in");
});

const element = document.querySelector("#my-element");

setTimeout(function() {
  element.classList.add("fade-in");
}, 5000);






