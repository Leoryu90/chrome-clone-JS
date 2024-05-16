const title = document.querySelector(".hello h1")
console.log(title)

title.innerText = "뭐야이건"

console.dir(title)

function handle() {
    title.style.color = "blue";
}

function mouseEnterh1() {
    title.innerText = "on mouse"
}
function mouseleaveh1() {
    title.innerText = "mouse is gone"
}

title.addEventListener("click", handle);
title.addEventListener("mouseenter", mouseEnterh1);
title.addEventListener("mouseleave", mouseleaveh1);