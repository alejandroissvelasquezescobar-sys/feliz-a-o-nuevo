let primerClick = true;
        
function celebrar() {
    if (primerClick) {
        document.getElementById("pagina").classList.add("fondo");
        document.getElementById("mensaje").classList.add("mostrar");

        // Cambiar texto del botón
        document.getElementById("btn").innerText = "Apretar muchas veces...... muuuuuuchas :)";

        primerClick = false;
    }

    crearExplosion();
}

function crearExplosion() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    for (let i = 0; i < 20; i++) {
        const particula = document.createElement("div");
        particula.className = "particula";

        particula.style.left = x + "px";
        particula.style.top = y + "px";

        const angulo = Math.random() * 2 * Math.PI;
        const distancia = Math.random() * 120;

        particula.style.setProperty("--x", Math.cos(angulo) * distancia + "px");
        particula.style.setProperty("--y", Math.sin(angulo) * distancia + "px");

        document.body.appendChild(particula);

        setTimeout(() => {
            particula.remove();
        }, 1000);
    }
}