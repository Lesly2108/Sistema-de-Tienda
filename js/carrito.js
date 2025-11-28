let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const lista = document.getElementById("cart-list");
const totalHTML = document.getElementById("total");

function mostrar() {
    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((p, index) => {
        total += p.precio;
        const li = document.createElement("li");
        li.innerHTML = `${p.nombre} - $${p.precio}
        <button onclick="eliminar(${index})">X</button>`;
        lista.appendChild(li);
    });

    totalHTML.textContent = total.toFixed(2);
}

function eliminar(i) {
    carrito.splice(i, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrar();
}

function vaciar() {
    localStorage.removeItem("carrito");
    carrito = [];
    mostrar();
}

mostrar();

