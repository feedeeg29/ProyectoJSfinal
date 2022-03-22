// Construcción Array Calzado
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

//DOM Calzado 
document.addEventListener("DOMContentLoaded", calzad0);
function calzad0() {
    const galeriaC = document.querySelector(".main_calzado");
    if (galeriaC) {
        galeriaC.innerHTML = "";
        for (let productoCalzado of calzado) {
        const containerCalzado = document.createElement("div");
        const imageCalzado = document.createElement("img");
        const btnCalzado = document.createElement("button");
        const descripcionCalzado1 = document.createElement("h5");
        const descripcionCalzado2 = document.createElement("h4");
        const descripcionCalzado3 = document.createElement("p");
        containerCalzado.appendChild(imageCalzado);
        containerCalzado.appendChild(descripcionCalzado1);
        containerCalzado.appendChild(descripcionCalzado2);
        containerCalzado.appendChild(descripcionCalzado3);
        containerCalzado.appendChild(btnCalzado);

        imageCalzado.setAttribute(
            "src",
            `./Imagenes/Carrito/Carrito${+productoCalzado.id}.jpg`
        );
        imageCalzado.setAttribute("id", `${productoCalzado.id}`);
        containerCalzado.appendChild(btnCalzado);
        btnCalzado.addEventListener("click", function () {
            carritoCalzadoPrecio.push(productoCalzado.precio);
            carritoCalzadoProductos.push(productoCalzado.articulo);
            carritoCalzadoId.push(productoCalzado.id);
            localStorage.setItem(`Compra Calzado`, JSON.stringify(carritoCalzadoPrecio));
            localStorage.setItem(`Productos Calzado`,JSON.stringify(carritoCalzadoProductos));
            localStorage.setItem(`Id Calzado`,JSON.stringify(carritoCalzadoId));
            Toastify({
            text: "Producto Agregado Al Carrito!",
            style: {
                background: "linear-gradient(to right, #C8E3D4, #87AAAA)",
            },
            duration: 1000,
            gravity: top,
            }).showToast();
        });
        btnCalzado.innerText = "Comprar";
        galeriaC.appendChild(containerCalzado);
        descripcionCalzado1.innerHTML = `articulo ${productoCalzado.articulo}`;
        descripcionCalzado2.innerHTML = `Precio ${productoCalzado.precio}`;
        descripcionCalzado3.innerHTML = `Talle Unico`;
        descripcionCalzado1.setAttribute("class","descripcion1");
        descripcionCalzado2.setAttribute("class","descripcion2");
        descripcionCalzado3.setAttribute("class","descripcion3");
        }
    }
    }