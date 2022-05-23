const inicioHover = document.querySelectorAll(".vid");
for (let i = 0; i < inicioHover.length; i++) {
    inicioHover[i].addEventListener('mouseenter', function() {
        inicioHover[i].play()
    });
    inicioHover[i].addEventListener('mouseout', function() {
        inicioHover[i].pause()
    })
}