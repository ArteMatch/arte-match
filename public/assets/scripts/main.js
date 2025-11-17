document.getElementById("btnLogin").addEventListener("click", function () {
    window.location.href = "";
});

document.getElementById("btnUnete").addEventListener("click", function () {
    window.location.href = "";
});

document.getElementById("btnSoyArtista").addEventListener("click", function () {
    window.location.href = "";
});

document.getElementById("btnBuscoArtista").addEventListener("click", function () {
    window.location.href = "";
});

const form = document.getElementById('contactoForm');
const modal = document.getElementById('modal');
const cerrarModal = document.getElementById('cerrarModal');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Mostrar modal
    modal.style.display = "flex";

    // Limpiar formulario
    form.reset();
});

cerrarModal.addEventListener('click', () => {
    modal.style.display = "none";
});

// Cerrar si hace click fuera de la ventana
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});