const title = document.querySelector(".hello h1")
console.log(title)

title.innerText = "뭐야이건"

console.dir(title)

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function handle() {
    title.style.color = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
}

function mouseEnterh1() {
    title.innerText = "on mouse"
}
function mouseleaveh1() {
    title.innerText = "mouse is gone"
}
function resizeBrowser() {
    document.body.style.backgroundColor = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
}
function copySome() {
    alert("불법 복제 ?!")
}


title.addEventListener("click", handle);
title.addEventListener("mouseenter", mouseEnterh1, true);
title.addEventListener("mouseleave", mouseleaveh1, true);

window.addEventListener("resize", resizeBrowser)
window.addEventListener("copy", copySome)