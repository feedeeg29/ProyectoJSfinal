        function intencionEnvio(saldo) {
        return new Promise(function (aceptado, rechazado) {
                if (saldo > 0) {
                        aceptado('Compra aceptada');

                } else {
                        rechazado('Compra rechazada');
                }
        })
        }
// Funcion Vaciar Carrito
const vaciarCarrito = document.querySelector(".Vaciar_Carrito")
const btnVaciarCarrito = document.createElement("button");
btnVaciarCarrito.innerHTML = "Vaciar Carrito";
vaciarCarrito.appendChild(btnVaciarCarrito);
