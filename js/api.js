function obtenerClientes() {
    
    fetch("https://l52pbrh853.execute-api.us-east-2.amazonaws.com/prod/clientes")
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => console.log("Datos obtenidos:", data))
        .catch(error => console.error("Error en la solicitud:", error));
    console.log("Solicitud realizada");
}
