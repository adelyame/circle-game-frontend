let elem = document.getElementById("circle");
elem.tabIndex = 0;

elem.addEventListener("keydown", function (event) {
    if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
        event.code != "ArrowUp" && event.code != "ArrowDown") return;
    let rectElem = elem.getBoundingClientRect();
    let x = rectElem.x + pageXOffset,
        y = rectElem.y + pageYOffset;

    if (event.code == "ArrowRight") x += elem.offsetWidth;
    if (event.code == "ArrowLeft")  x -= elem.offsetWidth;
    if (event.code == "ArrowUp")    y -= elem.offsetHeight;
    if (event.code == "ArrowDown")  y += elem.offsetHeight;
    
    elem.style.position = "absolute";
    elem.style.left = x + "px";
    elem.style.top = y + "px";
});