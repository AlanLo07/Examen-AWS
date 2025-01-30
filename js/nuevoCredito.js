document.getElementById("nuevo-credito-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe de forma tradicional
    
    const monto = document.getElementById("monto").value;  // Captura el valor del campo "monto"
    const plazo = document.getElementById("plazo").value;
    const tasaAnual = document.getElementById("tasaInteres").value;

    console.log(monto, plazo, tasaAnual);

    const params = new URLSearchParams(window.location.search);
    const cliente_id = params.get("id");

    fetch("https://71uxoujc7c.execute-api.us-east-2.amazonaws.com/prod/creditos/" + cliente_id, {
        method: "POST",
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            monto,
            plazo,
            tasaAnual,
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
