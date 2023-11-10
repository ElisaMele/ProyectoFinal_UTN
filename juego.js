const imagen1 = document.querySelector('.imagen1');
const imagen2 = document.querySelector('.imagen2');
const imagen3 = document.querySelector('.imagen3');

const caja1 = document.querySelector('.caja1');
const caja2 = document.querySelector('.caja2');
const caja3 = document.querySelector('.caja3');


function eventoDragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
}

function eventoDragOver(e) {
    e.preventDefault();
}

function eventoDrop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    const dropTarget = e.target;

    // Verificar si el elemento se está soltando en una caja
    if (dropTarget.classList.contains("caja1") || dropTarget.classList.contains("caja2") || dropTarget.classList.contains("caja3")) {
        // Ocultar el párrafo dentro del contenedor de destino
        const paragraph = dropTarget.querySelector('p');
        if (paragraph) {
            paragraph.style.display = 'none';
        }

        // Mover la imagen al contenedor
        dropTarget.appendChild(draggedElement);
    }
}

function reiniciarJuego() {
    window.location.reload();
}


