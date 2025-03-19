const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Datos Personales</title>
            </head>
            <body>
                <h2>Presiona el botón para ver tus datos</h2>
                <button onclick="mostrarDatos()">Mostrar</button>
                <p id="info"></p>
                <script>
                    function mostrarDatos() {
                        document.getElementById("info").innerHTML = "Nombre: Julio Fernández <br>Carné: 201902416 <br>Curso: Sistemas Operativos 1";
                    }
                </script>
            </body>
        </html>
    `);
});

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});



    