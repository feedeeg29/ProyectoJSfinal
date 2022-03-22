// Construcción Array Ofertas
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

// DOM Ofertas
document.addEventListener("DOMContentLoaded", init);
function init() {
    const galeria = document.querySelector(".main_ofertas");
    if (galeria) {
    galeria.innerHTML = "";
    for (let productoOfertas of ofertas) {
        const containerOfertas = document.createElement("div");
        const imagenOfertas = document.createElement("img");
        const btnOfertas = document.createElement("button");
        const descripcionOfertas1 = document.createElement("h5");
        const descripcionOfertas2 = document.createElement("h4");
        const descripcionOfertas3 = document.createElement("p");
        containerOfertas.appendChild(imagenOfertas);
        imagenOfertas.setAttribute(
        "src",
        `./Imagenes/Carrito/Carrito${+productoOfertas.id}.jpg`
        );
        containerOfertas.appendChild(descripcionOfertas1);
        containerOfertas.appendChild(descripcionOfertas2);
        containerOfertas.appendChild(descripcionOfertas3);
        containerOfertas.appendChild(btnOfertas);
        btnOfertas.addEventListener(`click`, function () {
            carritoOfertasProductos.push(productoOfertas.articulo);
            carritoOfertasPrecio.push(productoOfertas.precio);
            carritoOfertasId.push(productoOfertas.id);
        localStorage.setItem(`Compra Ofertas`, JSON.stringify(carritoOfertasPrecio));
        localStorage.setItem(`Productos Ofertas`,JSON.stringify(carritoOfertasProductos));
        localStorage.setItem(`Id Ofertas`, JSON.stringify(carritoOfertasId));
        Toastify({
            text: "Producto Agregado Al Carrito!",
            style: {
            background: "linear-gradient(to right, #C8E3D4, #87AAAA)",
            },
            duration: 1000,
            gravity: top,
        }).showToast();
        });
        descripcionOfertas1.innerHTML = `articulo ${productoOfertas.articulo}`;
        descripcionOfertas2.innerHTML = `Precio ${productoOfertas.precio}`;
        descripcionOfertas3.innerHTML = `Talle Unico`;
        descripcionOfertas1.setAttribute("class","descripcion1");
        descripcionOfertas2.setAttribute("class","descripcion2");
        descripcionOfertas3.setAttribute("class","descripcion3");
        btnOfertas.innerText = "Comprar";
        galeria.appendChild(containerOfertas);

    }
    }
}
