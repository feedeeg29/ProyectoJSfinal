const ofertas = [];
ofertas.push(new Producto(1, articulo[0], precio[0], seccion[0]));
ofertas.push(new Producto(2, articulo[1], precio[1], seccion[0]));
ofertas.push(new Producto(3, articulo[2], precio[2], seccion[0]));
ofertas.push(new Producto(4, articulo[3], precio[3], seccion[0]));
ofertas.push(new Producto(5, articulo[4], precio[4], seccion[0]));
ofertas.push(new Producto(6, articulo[5], precio[5], seccion[0]));
ofertas.push(new Producto(7, articulo[6], precio[6], seccion[0]));
ofertas.push(new Producto(8, articulo[7], precio[7], seccion[0]));
ofertas.push(new Producto(9, articulo[8], precio[8], seccion[0]));
ofertas.push(new Producto(10, articulo[9], precio[9], seccion[0]));
ofertas.push(new Producto(11, articulo[10], precio[10], seccion[0]));
ofertas.push(new Producto(12, articulo[11], precio[11], seccion[0]));
ofertas.push(new Producto(13, articulo[12], precio[12], seccion[0]));
ofertas.push(new Producto(14, articulo[13], precio[13], seccion[0]));
ofertas.push(new Producto(15, articulo[14], precio[14], seccion[0]));

document.addEventListener("DOMContentLoaded", init);
function init() {
    const galeria = document.querySelector(".main_ofertas");
    if (galeria) {
    galeria.innerHTML = "";
    for (let productoO of ofertas) {
        const containerO = document.createElement("div");
        const imageO = document.createElement("img");
        const btnO = document.createElement("button");
        containerO.appendChild(imageO);
        imageO.setAttribute(
        "src",
        `./Imagenes/Ofertas/Oferta${+productoO.id}.jpg`
        );
        containerO.appendChild(btnO);
        btnO.addEventListener(`click`, function () {
        carritoProductos.push(productoO.articulo);
        carritoPrecio.push(productoO.precio);
        carritoId.push(productoO.id)
        localStorage.setItem(`compraOfertas`, JSON.stringify(carritoPrecio));
        localStorage.setItem(`productos A Comprar`,JSON.stringify(carritoProductos));
        localStorage.setItem(`compraIdOfertas`, JSON.stringify(carritoId));
        Toastify({
            text: "Producto Agregado Al Carrito!",
            style: {
            background: "linear-gradient(to right, #C8E3D4, #87AAAA)",
            },
            duration: 1000,
            gravity: top,
        }).showToast();
        });
        btnO.innerText = "Comprar";
        galeria.appendChild(containerO);
    }
    }
}
console.log();
