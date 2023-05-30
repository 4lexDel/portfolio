let elements = document.querySelectorAll(".textprinter");

elements.forEach(element => {
    let initDelay = element.getAttribute("delay-init");
    if (!initDelay) initDelay = 0;

    setTimeout(() => {
        printText(element, 0, 1);
    }, initDelay);
});

function printText(element, index, increment) {
    var data = element.getAttribute("data");
    var delay = parseInt(element.getAttribute("delay")); //Get attribute values
    var repeat = element.getAttribute("repeat");

    let deltaBase = increment == 1 ? 200 : 110;
    var delta = delay + deltaBase - Math.random() * 100; //random delay to simulate typing

    let text = data.replace("<br>", '§').substring(0, index).replace('§', "<br>");

    element.innerHTML = '<span class="wrap">' + text + '</span>'; //Text refresh

    if ((index < 0 || index >= data.length) && repeat == "true") {
        increment = increment == 1 ? -1 : 1; //Change the way

        index += increment;
        setTimeout(() => { printText(element, index, increment) }, delta); //Recursive
    } else if (index >= 0 && index < data.length) {
        index += increment;
        setTimeout(() => { printText(element, index, increment) }, delta); //Continuous action
    } else {
        element.innerHTML = text; //End ==> overwrite wrap class (to remove the border) 
        // element.setAttribute("active", "false");
    }
}

// INJECT CSS
var css = document.createElement("style");
// css.type = "text/css";
css.innerHTML = ".textprinter > .wrap { border-right: 0.05em solid #000} .textprinter{word-wrap:break-word;}";
document.body.appendChild(css);





window.onscroll = function() {
    let elements = document.querySelectorAll(".surprise");

    elements.forEach(element => {
        if (window.scrollY >= element.offsetTop - document.documentElement.clientHeight + 1.5 * element.offsetHeight) activeElement(element);
    });
}

function activeElement(el) {
    let nextClass = el.getAttribute("next-class");
    console.log(true);
    el.className = nextClass;
    printText(el, 0, 1);
}

/*
class = .textprinter
Data : attribute = data
Repeat mode : attribute = repeat
Delay : attribute = delay



*/