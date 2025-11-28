// Productos simulados
const productos = [
    { id: 1, nombre: "Coca Cola", precio: 18 },
    { id: 2, nombre: "Galletas", precio: 12 },
    { id: 3, nombre: "Sabritas", precio: 20 },
    { id: 4, nombre: "Pan Bimbo", precio: 32 },
];

// Carrito
let carrito = [];

// Mostrar productos
function mostrarProductos() {
    const cont = document.getElementById("product-list");

    productos.forEach(p => {
        const div = document.createElement("div");
        div.innerHTML = `
            <strong>${p.nombre}</strong> - $${p.precio}
            <button onclick="agregar(${p.id})">Agregar</button>
        `;
        cont.appendChild(div);
    });
}

// Agregar al carrito
function agregar(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

// Actualizar vista del carrito
function actualizarCarrito() {
    const lista = document.getElementById("cart-list");
    const total = document.getElementById("total");

    lista.innerHTML = "";
    let suma = 0;

    carrito.forEach((p, index) => {
        suma += p.precio;

        const li = document.createElement("li");
        li.innerHTML = `${p.nombre} - $${p.precio}
            <button onclick="eliminar(${index})">X</button>`;
        lista.appendChild(li);
    });

    total.textContent = suma.toFixed(2);
}

// Eliminar producto del carrito
function eliminar(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Generar ticket
function generarTicket() {
    const ticket = document.getElementById("ticket");
    ticket.innerHTML = "<h3>Ticket</h3>";

    carrito.forEach(p => {
        ticket.innerHTML += `<p>${p.nombre} - $${p.precio}</p>`;
    });

    const total = carrito.reduce((acc, p) => acc + p.precio, 0);
    ticket.innerHTML += `<hr><p><strong>Total: $${total.toFixed(2)}</strong></p>`;

    ticket.classList.remove("hidden");
}

// Ejecutar al cargar
mostrarProductos();

