# Desafio-Futscript

  FutScript es una aplicación que permite gestionar equipos y jugadores de fútbol. Proporciona una API para registrar usuarios, autenticar usuarios, agregar equipos,     obtener equipos, eliminar equipos, agregar jugadores a un equipo y obtener jugadores de un equipo.

## Requisitos previos

  Asegúrate de tener instalado Node.js en tu máquina.

## Instalación

  Instala las dependencias:

    npm install

  Crea un archivo .env en el directorio raíz del proyecto y establece las siguientes variables de entorno:
  
*Asegúrate de configurar los valores según tu entorno de desarrollo.*

    PORT=reemplazar
    DB_HOST=reemplazar
    DB_USER=reemplazar
    DB_PASSWORD=reemplazar
    DB_NAME=reemplazar
    JWT_SECRET=reemplazar


## Uso

  Inicia el servidor:

    npm run dev

    Accede a la API a través de http://localhost:3000.

## Endpoints

 Registro de usuario:

    POST /registrar

*Registra un nuevo usuario.*

- Parámetros de la solicitud

    "username": "nombre de usuario"
  
    "password": "contraseña"

Inicio de sesión:

    POST /login
    
*Inicia sesión de usuario y devuelve un token de autenticación.*

- Parámetros de la solicitud

    "username": "nombre de usuario"
  
    "password": "contraseña"

Eliminación de usuario:

    DELETE /eliminar/:id

*Elimina un usuario existente.*

- Parámetros de la solicitud

    "id": "identificador del usuario".

Obtener equipos:

    GET /equipos

*Obtiene una lista de equipos.*

Agregar equipo:

    POST /equipos

*Agrega un nuevo equipo.*

- Parámetros de la solicitud

      "name": "nombre del equipo."

Eliminar equipo:

    DELETE /equipos/:id

*Elimina un equipo existente.*

- Parámetros de la solicitud

    "id": "identificador del equipo."

Obtener jugadores de un equipo:

    GET /equipos/:teamID/jugadores

*Obtiene una lista de jugadores de un equipo específico.*

- Parámetros de la solicitud

    teamID (cadena): identificador del equipo.

Agregar jugador a un equipo:

    POST /equipos/:teamID/jugadores

*Agrega un nuevo jugador a un equipo específico.*

- Parámetros de la solicitud

    teamID (cadena): identificador del equipo.
    name (cadena): nombre del jugador.
    position (cadena): posición del jugador.

## Pruebas

El proyecto incluye pruebas unitarias que puedes ejecutar para verificar el correcto funcionamiento de la API. 

Para ejecutar las pruebas, utiliza el siguiente comando:

npm run test

  1. Se obtiene un Array y un status code 200 como respuesta de la ruta GET /equipos
  2. Al enviar las credenciales correctas en la ruta POST /login se obtiene un Object
  3. Al enviar credenciales incorrectas en la ruta POST /login se obtiene un status code 400
  4. Al enviar un nuevo jugador en la ruta POST /equipos/:teamID/jugadores junto a un token válido en las cabeceras se obtiene un status code 201.
