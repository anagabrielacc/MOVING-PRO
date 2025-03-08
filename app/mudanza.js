document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form_mudanza");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const direccionOrigen = document.getElementById("direccion_origen").value;
        const direccionDestino = document.getElementById("direccion_destino").value;
        const fecha = document.getElementById("fecha").value;
        const tipoMudanza = document.getElementById("tipo_mudanza").value;
        const inventarioObjetos = document.getElementById("inventario_objetos").value;
        const pesoEnvio = document.getElementById("peso_envio").value;
        const serviciosAdicionales = document.getElementById("servicios_adicionales").value;

        const formularioData = {
            direccionOrigen,
            direccionDestino,
            fecha,
            tipoMudanza,
            inventarioObjetos,
            pesoEnvio,
            serviciosAdicionales
        };

        localStorage.setItem("formularioMudanza", JSON.stringify(formularioData));
        alert("Información guardada correctamente");
    });
});