document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("carousel-track");
    const icons = track.innerHTML; // Obtém os ícones existentes

    // Duplicamos os ícones para dar o efeito contínuo
    track.innerHTML += icons;

    let scrollAmount = 0;

    function scrollIcons() {
        scrollAmount -= 1; // Move para a esquerda
        if (Math.abs(scrollAmount) >= track.scrollWidth / 2) {
            scrollAmount = 0; // Reinicia quando chega no meio
        }
        track.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(scrollIcons);
    }

    scrollIcons();
});