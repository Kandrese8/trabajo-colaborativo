document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitamos el envío automático del formulario

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const correo = document.getElementById('correo').value;

    // Verificamos que los campos estén completos
    if (nombre  && edad > 0 && correo) {
        // accede inmediatamente al menú de cursos
        window.location.href = "contenido.html";
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }
});
