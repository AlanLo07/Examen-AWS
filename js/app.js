// app.js
clientes = [
    {
        id: 1,
        nombre: 'Juan',
        apellidoPaterno: 'Pérez',
        apellidoMaterno: 'García',
        fechaNacimiento: '1990-01-01'
    },
    {
        id: 2,
        nombre: 'María',
        apellidoPaterno: 'González',
        apellidoMaterno: 'Hernández',
        fechaNacimiento: '1995-02-02'
    }   
];


console.log(clientes);


fetch("https://l52pbrh853.execute-api.us-east-2.amazonaws.com/prod/clientes")
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            console.log("Datos obtenidos:", data);
            clientes = data;
            document.getElementById('clientes-container').appendChild(
                clientes.map(function(cliente) {
                    const div = document.createElement('a');
                    div.textContent = `${cliente.nombres} ${cliente.apellidoPaterno} ${cliente.apellidoMaterno} [${cliente.id}]`;
                    div.className = 'list-group-item list-group-item-action';
                    div.href = `cliente.html?id=${cliente.id}`;
                    return div;
                }).reduce((fragment, div) => {
                    fragment.appendChild(div);
                    return fragment;
                }, document.createDocumentFragment())
            );
        })
        .catch(error => console.error("Error en la solicitud:", error));
    console.log("Solicitud realizada");