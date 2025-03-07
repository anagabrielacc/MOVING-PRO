document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();

        let name = document.getElementById('name').value;
        let cedula = document.getElementById('cedula').value;
        let email = document.getElementById('email').value;
        let servicio = document.getElementById('servicio').value;
        let day = document.getElementById('day').value;
        let month = document.getElementById('month').value;
        let year = document.getElementById('year').value;
        let observaciones = document.getElementById('Observaciones').value;

        let datosFormulario = {
            nombre: name,
            cedula: cedula,
            email: email,
            servicio: servicio,
            fechaMudanza: `${day} ${month} ${year}`,
            observaciones: observaciones
        };

        localStorage.setItem('formularioDatos', JSON.stringify(datosFormulario));

        alert('Información guardada correctamente');

        this.reset();
    });
});
