creditos = [
    {
        "numeroCredito": 1,
        "monto": 1000,
        "plazo": 12,
        "cliente": 1,
        "tasaAnual": 10
    },
    {
        "numeroCredito": 2,
        "monto": 2000,
        "plazo": 24,
        "cliente": 2,
        "tasaAnual": 15
    }
];

document.getElementById('creditos-container').appendChild(
    creditos.map(function(credito) {
        const fila = document.createElement('tr');
        const numeroCredito = document.createElement('td');
        const monto = document.createElement('td');
        const plazo = document.createElement('td');
        const tasaAnual = document.createElement('td');

        numeroCredito.textContent = credito.numeroCredito;
        monto.textContent = credito.monto;
        plazo.textContent = credito.plazo;
        tasaAnual.textContent = credito.tasaAnual;

        fila.appendChild(numeroCredito);
        fila.appendChild(monto);
        fila.appendChild(plazo);
        fila.appendChild(tasaAnual);

        return fila;
    }).reduce((fragment, fila) => {
        fragment.appendChild(fila);
        return fragment;
    }, document.createDocumentFragment())
);