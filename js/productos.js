const productos = [
    { id: 1, nombre: "Coca Cola", precio: 18 },
    { id: 2, nombre: "Galletas", precio: 12 },
    { id: 3, nombre: "Sabritas", precio: 20 },
    { id: 4, nombre: "Pan Bimbo", precio: 32 },
];

const lista = document.getElementById("product-list");

productos.forEach((p) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <strong>${p.nombre}</strong> - $${p.precio}
        <button onclick="agregar(${p.id})">Agregar</button>
    `;
    div.style.marginBottom = "15px";
    lista.appendChild(div);
});

function agregar(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const prod = productos.find(p => p.id === id);
    carrito.push(prod);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
}

