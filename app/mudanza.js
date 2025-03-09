document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form_mudanza");

    if (!form) {
        console.error("Error: El formulario no se encontró en el DOM.");
        return;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        
        const direccionOrigenEl = document.getElementById("direccion_origen");
        const direccionDestinoEl = document.getElementById("direccion_destino");
        const fechaEl = document.getElementById("fecha");
        const tipoMudanzaEl = document.getElementById("tipoMundanza");
        const inventarioObjetosEl = document.getElementById("inventario_objetos");
        const pesoEnvioEl = document.getElementById("peso_envio");
        const serviciosAdicionalesEl = document.getElementById("servicios_adicionales");

       
        if (!direccionOrigenEl || !direccionDestinoEl || !fechaEl || !tipoMudanzaEl || !inventarioObjetosEl || !pesoEnvioEl || !serviciosAdicionalesEl) {
            console.error("Error: Uno o más elementos del formulario no se encontraron.");
            return;
        }


        const formularioData = {
            direccionOrigen: direccionOrigenEl.value.trim(),
            direccionDestino: direccionDestinoEl.value.trim(),
            fecha: fechaEl.value,
            tipoMudanza: tipoMudanzaEl.value,
            inventarioObjetos: inventarioObjetosEl.value.trim(),
            pesoEnvio: pesoEnvioEl.value.trim(),
            serviciosAdicionales: serviciosAdicionalesEl.value.trim()
        };

     
        if (!formularioData.direccionOrigen || !formularioData.direccionDestino || !formularioData.fecha) {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        // Guardar en localStorage
        localStorage.setItem("formularioMudanza", JSON.stringify(formularioData));
        alert("Información guardada correctamente");
    });
});