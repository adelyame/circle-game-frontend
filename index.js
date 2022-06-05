let elem = document.getElementById("circle");
let parentElem = document.getElementById("parent");

elem.tabIndex = 0;

document.body.style.overflow = "hidden"; // избавление от эффекта прокрутки



elem.addEventListener("keydown", function (event)
{

    if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
        event.code != "ArrowUp" && event.code != "ArrowDown") {

            return;
    }

    let rectElem = elem.getBoundingClientRect();

    let x = rectElem.x + scrollX;
    let y = rectElem.y + scrollY;

    // if (event.code == "ArrowRight") x += elem.offsetWidth;
    // if (event.code == "ArrowLeft")  x -= elem.offsetWidth;
    // if (event.code == "ArrowUp")    y -= elem.offsetHeight;
    // if (event.code == "ArrowDown")  y += elem.offsetHeight;

    if (event.code == "ArrowDown" && event.code == "ArrowRight")  {

        console.log("vasya");
        y += 10;
        x -= 10;
    }

    if (event.code == "ArrowRight") {
        x += 10;
    } 
    if (event.code == "ArrowLeft")  x -= 10;
    if (event.code == "ArrowUp")    y -= 10;
    if (event.code == "ArrowDown")  y += 10;


    elem.style.position = "absolute";
    elem.style.left = x + "px";
    elem.style.top = y + "px";
});

// console.log(parentElem.style.width)