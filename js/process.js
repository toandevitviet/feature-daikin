function listener(e) {
    var l = document.createElement("li");
    switch(e.type) {
        case "animationstart":
            l.innerHTML = "Started: elapsed time is " + e.elapsedTime;
            break;
        case "animationend":
            l.innerHTML = "Ended: elapsed time is " + e.elapsedTime;
            break;
        case "animationiteration":
            l.innerHTML = "New loop started at time " + e.elapsedTime;
            break;
    }
    document.getElementById("output").appendChild(l);
}

function left() {
    var e = document.getElementById("div-content-1");
    e.addEventListener("animationstart", listener, false);
    e.addEventListener("animationend", listener, false);
    e.addEventListener("animationiteration", listener, false);

    e.className = "slidein-left";
}

function right() {
    var e = document.getElementById("div-content-2");
    e.addEventListener("animationstart", listener, false);
    e.addEventListener("animationend", listener, false);
    e.addEventListener("animationiteration", listener, false);

    e.className = "slidein-right";
}

function rightpage1() {
    var e = document.getElementById("li-1");
    e.addEventListener("animationstart", listener, false);
    e.addEventListener("animationend", listener, false);
    e.addEventListener("animationiteration", listener, false);

    e.className = "slidein-right";
}

function rightpage2() {
    var e = document.getElementById("li-2");
    e.addEventListener("animationstart", listener, false);
    e.addEventListener("animationend", listener, false);
    e.addEventListener("animationiteration", listener, false);

    e.className = "slidein-right";
}

function rightpage4() {
    var e = document.getElementById("li-4");
    e.addEventListener("animationstart", listener, false);
    e.addEventListener("animationend", listener, false);
    e.addEventListener("animationiteration", listener, false);

    e.className = "slidein-right";
}

function rightpage6() {
    var e = document.getElementById("li-6");
    e.addEventListener("animationstart", listener, false);
    e.addEventListener("animationend", listener, false);
    e.addEventListener("animationiteration", listener, false);

    e.className = "slidein-right";
}

function rightpage7() {
    var e = document.getElementById("li-7");
    e.addEventListener("animationstart", listener, false);
    e.addEventListener("animationend", listener, false);
    e.addEventListener("animationiteration", listener, false);

    e.className = "slidein-right";
}