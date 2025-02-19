if (document.addEventListener) {
    document.addEventListener("keydown", bloquearSource);
} else { //Versões antigas do IE
    document.attachEvent("onkeydown", bloquearSource);
}

function bloquearSource(e) {
    e = e || window.event;

    var code = e.which || e.keyCode;

    if (
        e.ctrlKey &&
        (code == 83 || code == 85) //83 = S, 85 = U
    ) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }

        return false;
    }
} 

document.getElementById('btnProjects').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400, 
    glare: true,
    "max-glare": 0.5
});

document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});