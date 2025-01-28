// app.js
document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidoPaterno = document.getElementById('apellidoPaterno').value;
    const apellidoMaterno = document.getElementById('apellidoMaterno').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    // Mostrar los datos capturados
    document.getElementById('mostrarNombre').textContent = nombre;
    document.getElementById('mostrarApellidoPaterno').textContent = apellidoPaterno;
    document.getElementById('mostrarApellidoMaterno').textContent = apellidoMaterno;
    document.getElementById('mostrarFechaNacimiento').textContent = fechaNacimiento;

    // Mostrar la sección de datos capturados
    document.getElementById('datosCapturados').style.display = 'block';
});