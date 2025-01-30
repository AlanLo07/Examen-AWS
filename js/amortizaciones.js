const params = new URLSearchParams(window.location.search);
const cliente_id = params.get("id");

cliente = cliente_id.split(",")[0];
credito = cliente_id.split("=")[1];
console.log(credito);

fetch(
    "https://71uxoujc7c.execute-api.us-east-2.amazonaws.com/prod/amortizaciones/" +
    cliente + "/" + credito
)
    .then((response) => response.json()) // Convertir la respuesta a JSON
    .then((data) => {
        console.log("Datos obtenidos:",data);
        creditos = data;
        document.getElementById("creditos-container").appendChild(
            creditos
                .map(function (credito) {
                    const fila = document.createElement("tr");
                    const pago = document.createElement("td");
                    const saldo = document.createElement("td");
                    const amortizacion = document.createElement("td");
                    const interes = document.createElement("td");
                    const pagoMensual = document.createElement("td");
                    const saldoFinal = document.createElement("td");

                    pago.textContent = credito.numeroPago;
                    saldo.textContent = Math.round(credito.saldo*100)/100;
                    amortizacion.textContent = Math.round(credito.amortizacion*100)/100;
                    interes.textContent = Math.round(credito.interes*100)/100;
                    pagoMensual.textContent = Math.round(credito.pagoMensual*100)/100;
                    saldoFinal.textContent = Math.round((credito.saldo - credito.amortizacion)*100)/100;

                    fila.appendChild(pago);
                    fila.appendChild(saldo);
                    fila.appendChild(amortizacion);
                    fila.appendChild(interes);
                    fila.appendChild(pagoMensual);
                    fila.appendChild(saldoFinal);

                    return fila;
                })
                .reduce((fragment, fila) => {
                    fragment.appendChild(fila);
                    return fragment;
                }, document.createDocumentFragment())
        );
    })
    .catch((error) => console.error("Error en la solicitud:", error));
console.log("Solicitud realizada");
