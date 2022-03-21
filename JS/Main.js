let valorInicial = 0;
const confirmar= document.getElementById('confirmar');
// Arrays Calzado para LocalStorage
const carritoCPrecio = [];
const carritoCProductos = [];
const carritoCId = [];
// Array Ofertas para LocalStorage
const carritoOId = [];
const carritoOPrecio = [];
const carritoOProductos = [];
// Array Verano para LocalStorage
const carritoVId = [];
const carritoVPrecio = [];
const carritoVProductos =[];
// API Envio
const saldoCliente = 100000;
const enviosProvincias = document.getElementById('enviosProvincias');
// Funcion constructora para arrays de productos
class Producto {
  constructor(id, articulo, precio, seccion) {
    this.id = parseInt(id);
    this.articulo = articulo;
    this.precio = parseInt(precio);
    this.seccion = seccion;
  }
}

const articulo = [];
// Array articulos OFERTAS
articulo.push("OFERTAUNO");
articulo.push("OFERTADOS");
articulo.push("OFERTATRES");
articulo.push("OFERTACUATRO");
articulo.push("OFERTACINCO");
articulo.push("OFERTASEIS");
articulo.push("OFERTASIETE");
articulo.push("OFERTAOCHO");
articulo.push("OFERTANUEVE");
articulo.push("OFERTADIEZ");
articulo.push("OFERTAONCE");
articulo.push("OFERTADOCE");
articulo.push("OFERTATRECE");
articulo.push("OFERTACATORCE");
articulo.push("OFERTAQUINCE");
// Array articulo Verano
articulo.push("VERANOUNO");
articulo.push("VERANODOS");
articulo.push("VERANOTRES");
articulo.push("VERANOCUATRO");
articulo.push("VERANOCINCO");
articulo.push("VERANOSEIS");
articulo.push("VERANOSIETE");
articulo.push("VERANOOCHO");
articulo.push("VERANONUEVE");
articulo.push("VERANODIEZ");
articulo.push("VERANOONCE");
articulo.push("VERANODOCE");
articulo.push("VERANOTRECE");
articulo.push("VERANOCATORCE");
articulo.push("VERANOQUINCE");
// Array articulo Calzado
articulo.push("CALZADOUNO");
articulo.push("CALZADODOS");
articulo.push("CALZADOTRES");
articulo.push("CALZADOCUATRO");
articulo.push("CALZADOCINCO");
articulo.push("CALZADOSEIS");
articulo.push("CALZADOSIETE");
articulo.push("CALZADOOCHO");
articulo.push("CALZADONUEVE");
articulo.push("CALZADODIEZ");
articulo.push("CALZADOONCE");
articulo.push("CALZADODOCE");
articulo.push("CALZADOTRECE");
articulo.push("CALZADOCATORCE");
articulo.push("CALZADOQUINCE");

const precio = [];
// Array Precio Ofertas
precio.push(1500);
precio.push(1000);
precio.push(900);
precio.push(20000);
precio.push(300);
precio.push(1200);
precio.push(1300);
precio.push(1290);
precio.push(955);
precio.push(800);
precio.push(2200);
precio.push(1750);
precio.push(2000);
precio.push(950);
precio.push(1825);
 //Array precio Verano
precio.push(3250);
precio.push(925);
precio.push(2800);
precio.push(1500);
precio.push(2100);
precio.push(1850);
precio.push(935);
precio.push(900);
precio.push(1300);
precio.push(1299);
precio.push(1650);
precio.push(2920);
precio.push(1950);
precio.push(2300);
precio.push(1900); 
// Array precio Calzado
precio.push(15000);
precio.push(12500);
precio.push(21000);
precio.push(19500);
precio.push(18200);
precio.push(17250);
precio.push(25000);
precio.push(32000);
precio.push(11100);
precio.push(22000);
precio.push(14000);
precio.push(15750);
precio.push(29232);
precio.push(16540);
precio.push(15412);
// Array Seccion
const seccion = [];
seccion.push("ofertas");
seccion.push("verano2021");
seccion.push("calzado");


