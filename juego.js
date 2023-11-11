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

    if (dropTarget.classList.contains("caja1") || dropTarget.classList.contains("caja2") || dropTarget.classList.contains("caja3")) {
        const paragraph = dropTarget.querySelector('p');
        if (paragraph) {
            paragraph.style.display = 'none';
        }
        dropTarget.appendChild(draggedElement);
    }
}

function reiniciarJuego() {
    window.location.reload();
}


