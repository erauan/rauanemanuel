document.getElementById('btnProjects').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400, 
    glare: true,
    "max-glare": 0.5
});