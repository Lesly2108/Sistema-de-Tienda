let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const div = document.getElementById("ticket");

if (carrito.length === 0) {
    div.innerHTML = "<p>No hay compras en el carrito.</p>";
} else {
    let total = 0;

    carrito.forEach(p => {
        total += p.precio;
        div.innerHTML += `<p>${p.nombre} - $${p.precio}</p>`;
    });

    div.innerHTML += `<hr><p><strong>Total: $${total.toFixed(2)}</strong></p>`;
}

function limpiar() {
    localStorage.removeItem("carrito");
    window.location.href = "index.html";
}

