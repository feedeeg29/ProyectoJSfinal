        function intencionEnvio(saldo) {
        return new Promise(function (aceptado, rechazado) {
                if (saldo > 0) {
                        aceptado('Compra aceptada');

                } else {
                        rechazado('Compra rechazada');
                }
        })
        }