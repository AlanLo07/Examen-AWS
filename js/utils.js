const params = new URLSearchParams(window.location.search);
const cliente_id = params.get("id");
const a = document.createElement('a');
a.textContent = 'Nuevo Credito';
a.className = 'btn btn-primary';
a.href = `./nuevoCredito.html?id=${cliente_id}`;
document.getElementById('nuevo-credito').appendChild(a);



fetch("https://71uxoujc7c.execute-api.us-east-2.amazonaws.com/prod/creditos/" + cliente_id)
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
        console.log("Datos obtenidos:", data);
        creditos = data;
        document.getElementById('creditos-container').appendChild(
            creditos.map(function (credito) {
                const fila = document.createElement('tr');
                const id_credito = document.createElement('td');
                const div = document.createElement('a');
                div.textContent = `${credito.id}`;
                div.className = 'list-group-item list-group-item-action';
                div.href = `./amortizaciones.html?id=${cliente_id},id_credito=${credito.id}`;
                const monto = document.createElement('td');
                const plazo = document.createElement('td');
                const tasaAnual = document.createElement('td');

                monto.textContent = credito.monto;
                plazo.textContent = credito.plazo;
                tasaAnual.textContent = credito.tasaAnual;

                id_credito.appendChild(div);    
                fila.appendChild(id_credito);
                fila.appendChild(monto);
                fila.appendChild(plazo);
                fila.appendChild(tasaAnual);

                return fila;
            }).reduce((fragment, fila) => {
                fragment.appendChild(fila);
                return fragment;
            }, document.createDocumentFragment())
        )
    })
    .catch(error => console.error("Error en la solicitud:", error));
console.log("Solicitud realizada");


