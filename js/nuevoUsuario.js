document.getElementById("nuevo-cliente-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe de forma tradicional

    const nombres = document.getElementById("nombre").value;  // Captura el valor del campo "nombre"
    const apellidoMaterno = document.getElementById("apellidoMaterno").value;
    const apellidoPaterno = document.getElementById("apellidoPaterno").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    console.log(nombre, apellidoMaterno, apellidoPaterno, fechaNacimiento);

    fetch("https://71uxoujc7c.execute-api.us-east-2.amazonaws.com/prod/clientes", {
        method: "POST",
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombres,
            apellidoMaterno,
            apellidoPaterno,
            fechaNacimiento
        })
    })
    .then(response => {
        console.log("Respuesta:", response);
        response.json();
    })
    .then(data => {
        console.log("Cliente creado:", data);
        alert("Cliente creado exitosamente");
        window.location.href = "../index.html";
    })
});
