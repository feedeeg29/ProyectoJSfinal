// Arrays Carrito Verano
const carritoFinalVeranoId = JSON.parse(localStorage.getItem(`Id Verano`)) ?? [];
const carritoFinalVeranoPrecios = JSON.parse(localStorage.getItem(`Compra Verano`)) ?? [];
const carritoFinalVeranoProductos = JSON.parse(localStorage.getItem(`Productos Verano`)) ?? [];

// Arrays Carrito Calzado
const carritoFinalCalzadoId = JSON.parse(localStorage.getItem(`Id Calzado`)) ?? [];
const carritoFinalCalzadoPrecios = JSON.parse(localStorage.getItem(`Compra Calzado`)) ?? [];
const carritoFinalCalzadoProductos = JSON.parse(localStorage.getItem(`Productos Calzado`)) ?? [];

// Arrays Carrito Ofertas
const carritoFinalOfertasId = JSON.parse(localStorage.getItem(`Id Ofertas`)) ?? [];
const carritoFinalOfertasPrecios = JSON.parse(localStorage.getItem(`Compra Ofertas`)) ?? [];
const carritoFinalOfertasProductos = JSON.parse(localStorage.getItem(`Productos Ofertas`)) ?? [];

// Arrays Precios Concatenados
const carritoCOPrecios = carritoFinalCalzadoPrecios.concat(carritoFinalOfertasPrecios) ;
const carritoFinalPrecios = carritoCOPrecios.concat(carritoFinalVeranoPrecios);

// Arrays Productos Concatenados
const carritoCOProductos = carritoFinalCalzadoProductos.concat(carritoFinalOfertasProductos);
const carritoFinalProductos = carritoCOProductos.concat(carritoFinalVeranoProductos);

// Arrays Id Concatenados
const carritoCOId = carritoFinalCalzadoId.concat(carritoFinalOfertasId);
const carritoFinalId = carritoCOId.concat(carritoFinalVeranoId);

// Carousel 
if (carritoFinalId.length === 0){
    document.addEventListener("DOMContentLoaded", initCarritoVacio);
    function initCarritoVacio() {
    const galeriaCarritoVacio = document.querySelector(".carousel_carrito");
    if (galeriaCarritoVacio) {
        galeriaCarritoVacio.innerHTML = "";
        const innerCarritoVacio = document.createElement("div");
        const divActivoVacio = document.createElement("div");
        const imgActivoVacio = document.createElement("img")
        divActivoVacio.appendChild(imgActivoVacio);
        imgActivoVacio.setAttribute("class","d-block img-fluid mx-auto");
        imgActivoVacio.setAttribute("src","./Imagenes/Carrito/Carrito_Vacio.jpg");
        galeriaCarritoVacio.appendChild(innerCarritoVacio);
        innerCarritoVacio.setAttribute("class","carousel-inner")
        divActivoVacio.setAttribute("class","carousel-item active");
        innerCarritoVacio.appendChild(divActivoVacio);}
}} else{
document.addEventListener("DOMContentLoaded", initCarrito);
function initCarrito() {
    const galeriaCarrito = document.querySelector(".carousel_carrito");
    if (galeriaCarrito) {
        galeriaCarrito.innerHTML = "";
        const innerCarrito = document.createElement("div");
        const divActivo = document.createElement("div");
        const imgActivo = document.createElement("img")
        divActivo.appendChild(imgActivo);
        imgActivo.setAttribute("class","d-block img-fluid mx-auto");
        imgActivo.setAttribute("src","./Imagenes/Carrito/Feliz.jpg");
        galeriaCarrito.appendChild(innerCarrito);
        innerCarrito.setAttribute("class","carousel-inner")
        divActivo.setAttribute("class","carousel-item active");
        innerCarrito.appendChild(divActivo);
    for (let imagenCarritoo of carritoFinalId) {
        if(imagenCarritoo !== 0) {
        const containerCarrito = document.createElement("div");
        containerCarrito.setAttribute("class", "carousel-item");
        const imgCarrito = document.createElement("img");
        containerCarrito.appendChild(imgCarrito);
        imgCarrito.setAttribute("class", "d-block img-fluid mx-auto");
        imgCarrito.setAttribute("src",`./Imagenes/Carrito/Carrito${+imagenCarritoo}.jpg`);
        innerCarrito.appendChild(containerCarrito);
    }}}
}
}
//Subtotal 
if (carritoFinalPrecios.length !== 0){
    const subtotal = (accumulator,curr) => accumulator + curr;
    const subTotalCarritoo = JSON.stringify(localStorage.setItem(`SUBTOTAL`,carritoFinalPrecios.reduce(subtotal)));}
    const subTotalCarritoo = JSON.parse(localStorage.getItem(`SUBTOTAL`)) ?? [];
// Modal Subtotal+Envio
const compraFinal = document.querySelector(".Compra_Final");
function carritoHTML(lista) {
    compraFinal.innerHTML = "";
    for (const producto of lista) {
            let prod = document.createElement('div');
            prod.innerHTML = `${producto.nombre} 
            <span class="badge bg-warning text-dark">Precio: $ ${this.carritoFinalPrecios}</span>
            <span class="badge bg-primary">Cantidad: ${producto.cantidad}</span>
            <span class="badge bg-dark">Subtotal: $${producto.subTotal()}</span>`;
            compraFinal.appendChild(prod);
    }
}
// API envios
intencionEnvio(saldoCliente).then((mensaje) => {
    enviosProvincias.innerHTML = ` <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`
    fetch('prov/provincias.json')
    .then((respuesta) => {
        return respuesta.json()
    }).then((datos) => {
        // console.log(datos);

        enviosProvincias.innerHTML = `<h3>Subtotal= ${subTotalCarritoo}</h3>
                                    <h4>Seleccione Zona de envío</h4>
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
            munFiltro.innerHTML= "";
            for (const municipio of datos.municipios) {
                munFiltro.innerHTML += `<option value="${municipio.id}">${municipio.nombre}</option>`;
            }
            document.getElementById('btnEnvio').onclick = () => {
                console.log("ENVIAR A " + munFiltro.value + " EN  PROVINCIA ID " + idProvincia);
                fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    carrito: carritoFinalProductos,
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