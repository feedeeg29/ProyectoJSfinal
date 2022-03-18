const carritoFinalO = localStorage.getItem(`compraVerano`);
const carritoFinalV = localStorage.getItem(`compraOfertas`);
const carritoFinalC = localStorage.getItem(`compraCalzado`);
const CarritoFinalimgstring = localStorage.getItem(`compraIdOfertas`);
console.log(CarritoFinalimgstring);
const CarritoFinalimg = [];
console.log(CarritoFinalimg);
// const carritoFinal = carritoFinalO.concat(carritoFinalV);
// console.log(carritoFinal);
for (imagenCarrito of CarritoFinalimgstring){
    CarritoFinalimg.push(imagenCarrito);
}
document.addEventListener("DOMContentLoaded", initCarrito);
function initCarrito() {
    const galeriaCarrito = document.querySelector(".carrousel_Carrito");
    if (galeriaCarrito) {
    for (let imagenCarritoo of CarritoFinalimg) {
        const containerCarrito = document.createElement("div");
        containerCarrito.setAttribute(`class`, `carrousel-item`);
        const imgCarrito = document.createElement("img");
        containerCarrito.appendChild(imgCarrito);
        imgCarrito.setAttribute(`class`, `carousel-item`);
        imgCarrito.setAttribute("src",`./Imagenes/Carrito/Carrito${+imagenCarritoo}.jpg`
        );
    }}
}
console.log();



// API envios
    intencionEnvio(saldoCliente).then((mensaje) => {
        enviosProvincias.innerHTML = ` <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>`
        fetch('prov/provincias.json')
        .then((respuesta) => {
            return respuesta.json()
        }).then((datos) => {
            console.log(datos);
            enviosProvincias.innerHTML = `<h3>Info del Envio</h3>
                                        <select id="provFiltro"></select> 
                                        <select id="munFiltro"></select>
                                        <button id="btnEnvio">Enviar</button>`;
            const provFiltro = document.getElementById('provFiltro');
            for (const provincia of datos.provincias) {
            provFiltro.innerHTML += `<option value="${provincia.id}">${provincia.nombre}</option>`;
            }
            provFiltro.onchange = () => {
            let idProvincia = provFiltro.value;
            console.log(idProvincia);
            let rutaBusqueda = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${idProvincia}&campos=id,nombre&max=100`;
            fetch(rutaBusqueda)
                .then(respuesta => respuesta.json())
                .then(datos => {
                console.log(datos);
                let munFiltro = document.getElementById('munFiltro');
                for (const municipio of datos.municipios) {
                    munFiltro.innerHTML += `<option value="${municipio.id}">${municipio.nombre}</option>`;
                }
                document.getElementById('btnEnvio').onclick = () => {
                    console.log("ENVIAR A " + munFiltro.value + " EN  PROVINCIA ID " + idProvincia);
                    fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        carrito: carritoProductos,
                        idProvincia: idProvincia,
                        idMunicipio: munFiltro.value
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                    }).then(respuesta => respuesta.json())
                    .then(data => {
                        Swal.fire(
                        'Compra Confirmada',
                        "PEDIDO N° " + data.id + " EN CAMINO",
                        'success'
                        )
                    })
                }
                })
            }
        })
        .catch((mensaje) => { console.log(mensaje) })  
        }).catch((mensaje) => {alertaEstado(mensaje, "error")}
        )