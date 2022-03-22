// Construcción array Verano
const verano = [];
verano.push(new Producto(16, articulo[15], precio[15], seccion[1]));
verano.push(new Producto(17, articulo[16], precio[16], seccion[1]));
verano.push(new Producto(18, articulo[17], precio[17], seccion[1]));
verano.push(new Producto(19, articulo[18], precio[18], seccion[1]));
verano.push(new Producto(20, articulo[19], precio[19], seccion[1]));
verano.push(new Producto(21, articulo[20], precio[20], seccion[1]));
verano.push(new Producto(22, articulo[21], precio[21], seccion[1]));
verano.push(new Producto(23, articulo[22], precio[22], seccion[1]));
verano.push(new Producto(24, articulo[23], precio[23], seccion[1]));
verano.push(new Producto(25, articulo[24], precio[24], seccion[1]));
verano.push(new Producto(26, articulo[25], precio[25], seccion[1]));
verano.push(new Producto(27, articulo[26], precio[26], seccion[1]));
verano.push(new Producto(28, articulo[27], precio[27], seccion[1]));
verano.push(new Producto(29, articulo[28], precio[28], seccion[1]));
verano.push(new Producto(30, articulo[29], precio[29], seccion[1]));

// DOM Verano 2021
document.addEventListener("DOMContentLoaded", veranO);
function veranO() {
  const galeriaVerano = document.querySelector(".main_verano");
  if (galeriaVerano) {
    galeriaVerano.innerHTML = "";
    for (let productoVerano of verano) {
      const containerVerano = document.createElement("div");
      const imageVerano = document.createElement("img");
      const btnVerano = document.createElement("button");
      containerVerano.appendChild(imageVerano);
      imageVerano.setAttribute(
        "src",
        `./Imagenes/Carrito/Carrito${+productoVerano.id}.jpg`
      );
      const descripcionVerano1 = document.createElement("h5");
      const descripcionVerano2 = document.createElement("h4");
      const descripcionVerano3 = document.createElement("p");
      imageVerano.setAttribute("id", `${productoVerano.id}`);
      containerVerano.appendChild(btnVerano);
      containerVerano.appendChild(descripcionVerano1);
      containerVerano.appendChild(descripcionVerano2);
      containerVerano.appendChild(descripcionVerano3);
      btnVerano.addEventListener("click", function () {
        carritoVeranoId.push(productoVerano.id);
        carritoVeranoPrecio.push(productoVerano.precio);
        carritoVeranoProductos.push(productoVerano.articulo);
        localStorage.setItem(`Compra Verano`, JSON.stringify(carritoVeranoPrecio));
        localStorage.setItem(`Productos Verano`,JSON.stringify(carritoVeranoProductos));
        localStorage.setItem(`Id Verano`, JSON.stringify(carritoVeranoId));
        Toastify({
          text: "Producto Agregado Al Carrito!",
          style: {
            background: "linear-gradient(to right, #C8E3D4, #87AAAA)",
          },
          duration: 1000,
          gravity: top,
        }).showToast();
      });
      btnVerano.innerText = "Comprar";
      galeriaVerano.appendChild(containerVerano);
      descripcionVerano1.innerHTML = `articulo ${productoVerano.articulo}`;
      descripcionVerano2.innerHTML = `Precio ${productoVerano.precio}`;
      descripcionVerano3.innerHTML = `Talle Unico`;
      descripcionVerano1.setAttribute("class","descripcion1");
      descripcionVerano2.setAttribute("class","descripcion2");
      descripcionVerano3.setAttribute("class","descripcion3");
    }
  }
}
