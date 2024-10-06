# Backend del Proyecto

Este proyecto es un backend desarrollado con Node.js y Express que permite manejar la autenticación de usuarios y acceder a datos sobre razas de gatos a través de la API de [The Cat API](https://thecatapi.com).

## Requisitos

- Node.js (versión 18 o superior)
- MongoDB (para la base de datos)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>

2. Instala las dependencias:
- npm install

3. Crea un archivo .env en la raíz del proyecto y agrega la siguiente información:
   MONGO_URI=mongodb+srv://faridsoto:Ocag53Yiu49utNMR@xpert-group.ooget.mongodb.net/?retryWrites=true&w=majority
   PORT=3000
   NODE_ENV=development

4. Ejecutar el Proyecto
   npm run dev

5. Para ejecutar las pruebas en el proyecto, utiliza:
   npm run test

Endpoints

Se esta usando (JWT) para manejar la autenticación, se debe  iniciar sesión para obtener un token 
que se utilizará para acceder a los servicios protegidos.

Registro de Usuario
	•   Método: POST
	•	Endpoint: /api/users/register

curl --location 'http://localhost:3000/api/users/register' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "John Doe 2",
"email": "johndoe2@example.com",
"password": "password1234"
}'

Inicio de Sesión

	•	Método: POST
	•	Endpoint: /api/users/login

curl --location 'http://localhost:3000/api/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
"email": "johndoe2@example.com",
"password": "password1234"
}'

Obtener Razas de Gatos

    •	Método: GET
    •	Endpoint: /api/cats/breeds

curl --location 'http://localhost:3000/api/cats/breeds' \
--header 'Authorization: Bearer <TOKEN>'

Obtener Raza por ID

	•	Método: GET
	•	Endpoint: /api/cats/breeds/{breed_id}

curl --location 'http://localhost:3000/api/cats/breeds/aege' \
--header 'Authorization: Bearer <TOKEN>'

Buscar Razas de Gatos

	•	Método: GET
	•	Endpoint: /api/cats/breeds/search

curl --location 'http://localhost:3000/api/cats/breeds/search?q=Aegean&limit=10&page=0' \
--header 'Authorization: Bearer <TOKEN>'

Obtener Imágenes por ID de Raza

	•	Método: GET
	•	Endpoint: /api/images/imagesbybreedid

curl --location 'http://localhost:3000/api/images/imagesbybreedid?breed_id=aege' \
--header 'Authorization: Bearer <TOKEN>'