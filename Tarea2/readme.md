# Tarea 2 - Sistemas Operativos 1


## Descripción
Este documento describe el proceso de construcción y ejecución de un contenedor Docker para una aplicación Node.js.

---

## Estructura del Proyecto
```
.
├── dockerfile
├── package.json
├── package-lock.json
└── src
    └── server.js
```

---

## Contenido del `Dockerfile`
```dockerfile
# Usa una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "src/server.js"]
```

---

## Construcción de la Imagen
Ejecuta el siguiente comando en la terminal para construir la imagen Docker:
```sh
docker build -t mi-aplicacion .
```
Ejemplo:
```sh
docker build -t tarea2 .
````


---

## Ejecución del Contenedor
Para ejecutar el contenedor, usa:
```sh
docker run -d -p 3000:3000 --name mi-contenedor
```

Ejemplo:
```sh
docker run -d -p 3000:3000 tarea2
````

Verifica que el contenedor esté corriendo:
```sh
docker ps
```
Si el contenedor se detiene, revisa los logs:
```sh
docker logs mi-contenedor
```

---

## Solución de Problemas
### Error: `Cannot find module '/app/app/server.js'`
Si ves este error, asegúrate de que:
1. **El `Dockerfile` usa la ruta correcta**: Debe ser `src/server.js` en lugar de `/app/app/server.js`.
2. **Los archivos se copian correctamente**: Verifica que `server.js` esté dentro de `/app/src/` en el contenedor usando:
   ```sh
   docker run --rm -it mi-aplicacion ls -R /app
   ```
3. **Ejecutaste `npm install` dentro del contenedor** correctamente.

---

## Detención y Eliminación del Contenedor
Para detener el contenedor:
```sh
docker stop mi-contenedor
```

Para eliminarlo:
```sh
docker rm mi-contenedor
```

Para eliminar la imagen Docker:
```sh
docker rmi mi-aplicacion
```
