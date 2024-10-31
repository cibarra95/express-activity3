#install packages
``` npm install && npm run dev```

#Actividad 3
Este ejercicio es continuación del API programado para el "Ejercicio 2".
Sobre el mismo CRUD de Posts, en esta ocasión añadiremos un nuevo modelo de usuario y expondremos endpoints para login

1. Diseño modelo User
Diseñar y programar un modelo Mongoose "User" con al menos los siguientes campos y validaciones en su esquema:
- name, string, requerido
- email, string, requerido, formato email
- password, string, requerido
- bio, string.
- active: boolean. Default false
- createdAt: Date,
- updatedAt: Date.

2. API HTTP
Codificar los siguientes endpoints HTTP sobre el API:

POST /api/users
- No necesita estar autenticada
- Recibe body JSON con los campos name, email, password y bio
- Almacena el usuario en Base de Datos en memoria cifrando su contraseña (el cifrado de la contraseña es opcional)

2. POST /api/login
- Recibe body con email, password
- Devuelve HTTP 200 OK con token JWT de sesión si las credenciales son correctas
- Devuelve HTTP 400 en caso de error en la validación de datos
- Devuelve HTTP 401 si las credenciales no son correctas

4. El resto de endpoints de nuestra API (CRUD de Posts) deben requerir autenticación y devolver código HTTP 401 ante peticiones no autenticadas.

Entrega
repositorio git público que contenga proyecto node.js excluyendo el directorio node_modules.
El comando "npm start" debe ejecutar un servidor express.js en el puerto 8000.
El entregable debe contener una colección exportada desde Postman que consuma el api desarrollado
Se deberá adjuntar un video de corta duración con una grabación de pantalla donde el alumno haga una breve demostración de la aplicación resultante, explicando además el código desarrollado sobre el editor de código.
