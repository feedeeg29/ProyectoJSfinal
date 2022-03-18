
const calzado = [];
calzado.push(new Producto(31, articulo[30], precio[30], seccion[2]));
calzado.push(new Producto(32, articulo[31], precio[31], seccion[2]));
calzado.push(new Producto(33, articulo[32], precio[32], seccion[2]));
calzado.push(new Producto(34, articulo[33], precio[33], seccion[2]));
calzado.push(new Producto(35, articulo[34], precio[34], seccion[2]));
calzado.push(new Producto(36, articulo[35], precio[35], seccion[2]));
calzado.push(new Producto(37, articulo[36], precio[36], seccion[2]));
calzado.push(new Producto(38, articulo[37], precio[37], seccion[2]));
calzado.push(new Producto(39, articulo[38], precio[38], seccion[2]));
calzado.push(new Producto(40, articulo[39], precio[39], seccion[2]));
calzado.push(new Producto(41, articulo[40], precio[40], seccion[2]));
calzado.push(new Producto(42, articulo[41], precio[41], seccion[2]));
calzado.push(new Producto(43, articulo[42], precio[42], seccion[2]));
calzado.push(new Producto(44, articulo[43], precio[43], seccion[2]));
calzado.push(new Producto(45, articulo[44], precio[44], seccion[2]));
document.addEventListener("DOMContentLoaded", calzad0);

function calzad0() {
    const galeriaC = document.querySelector(".main_calzado");
    if (galeriaC) {
        galeriaC.innerHTML = "";
        for (let productoC of calzado) {
        const containerC = document.createElement("div");
        const imageC = document.createElement("img");
        const btnC = document.createElement("button");
        containerC.appendChild(imageC);
        imageC.setAttribute(
            "src",
            `./Imagenes/Calzado/Calzado${+productoC.id}.jpg`
        );
        imageC.setAttribute("id", `${productoC.id}`);
        containerC.appendChild(btnC);
        btnC.addEventListener("click", function () {
            carritoPrecio.push(productoC.precio);
            carritoProductos.push(productoC.articulo);
            localStorage.setItem(`compraCalzado`, JSON.stringify(carritoPrecio));
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
        btnC.innerText = "Comprar";
        galeriaC.appendChild(containerC);
        }
    }
    }