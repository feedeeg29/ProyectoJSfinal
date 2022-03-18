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

document.addEventListener("DOMContentLoaded", veranO);
function veranO() {
  const galeriaV = document.querySelector(".main_verano");
  if (galeriaV) {
    galeriaV.innerHTML = "";
    for (let productoV of verano) {
      const containerV = document.createElement("div");
      const imageV = document.createElement("img");
      const btnV = document.createElement("button");
      containerV.appendChild(imageV);
      imageV.setAttribute(
        "src",
        `./Imagenes/Verano2021/Verano${+productoV.id}.jpg`
      );
      imageV.setAttribute("id", `${productoV.id}`);
      containerV.appendChild(btnV);
      btnV.addEventListener("click", function () {
        carritoId.push(productoV.id);
        carritoPrecio.push(productoV.precio);
        carritoProductos.push(productoV.articulo);
        localStorage.setItem(`compraVerano`, JSON.stringify(carritoPrecio));
        localStorage.setItem(
          `productos A Comprar`,
          JSON.stringify(carritoProductos)
        );
        Toastify({
          text: "Producto Agregado Al Carrito!",
          style: {
            background: "linear-gradient(to right, #C8E3D4, #87AAAA)",
          },
          duration: 1000,
          gravity: top,
        }).showToast();
      });
      btnV.innerText = "Comprar";
      galeriaV.appendChild(containerV);
    }
  }
}
