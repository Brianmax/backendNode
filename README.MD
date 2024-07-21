# Aplicacion para el registro de usuarios

## Descripcion

Esta aplicacion permite el registro de usuarios, con los siguientes datos:
- Nombre
- Apellido
- Email
- Password

## Instalacion

Para instalar la aplicacion, se debe clonar el repositorio y ejecutar el siguiente comando:

```
npm install
```

## Uso

Para ejecutar la aplicacion, se debe ejecutar el siguiente comando:

```
npm start
```

## Enpoints

### `GET /api/v1/users`
- **Descripción:** Recupera una lista de todos los usuarios con paginación.
- **Parámetros de consulta:**
    - `page` (opcional): Número de la página actual. Por defecto es 1.
    - `limit` (opcional): Número de usuarios por página. Por defecto es 10.
- **Respuesta:** Un objeto JSON que incluye:
    - `page`: Página actual.
    - `totalPages`: Total de páginas.
    - `totalUsers`: Total de usuarios.
    - `users`: Lista de usuarios.

### `GET /api/v1/users/:id`
- **Descripción:** Recupera los detalles de un usuario específico por su ID.
- **Parámetros de ruta:**
    - `id`: ID del usuario a recuperar.
- **Respuesta:**
    - Si se encuentra el usuario: Un objeto JSON con los datos del usuario.
    - Si no se encuentra el usuario: Un mensaje de error con código de estado 404.

### `POST /api/v1/users`
- **Descripción:** Crea un nuevo usuario.
- **Cuerpo de la solicitud:** Un objeto JSON con los datos del nuevo usuario.
- **Respuesta:**
    - Un objeto JSON que incluye:
        - `user`: Datos del usuario creado.
        - `token`: Token JWT.
    - En caso de error: Un mensaje de error con código de estado 400 o 500.
```json
{
    "nombre": "George",
    "apellido": "Maxi",
    "usuario": "georgeee",
    "email": "georgeee@gmail.com",
    "password": "password1234MJK"
}
```
### `POST /api/v1/login`
- **Descripción:** Autentica a un usuario y devuelve un token JWT.
- **Cuerpo de la solicitud:** Un objeto JSON que contiene:
    - `email`: Correo electrónico del usuario.
    - `password`: Contraseña del usuario.
- **Respuesta:**
    - Un objeto JSON que incluye:
        - `token`: Token JWT.
    - En caso de error: Un mensaje de error con código de estado 400.

### `PUT /api/v1/users/:id`
- **Descripción:** Actualiza los datos de un usuario específico por su ID.
- **Parámetros de ruta:**
    - `id`: ID del usuario a actualizar.
- **Cuerpo de la solicitud:** Un objeto JSON con los datos actualizados del usuario.
- **Respuesta:**
    - Un objeto JSON que incluye los datos del usuario actualizado.
    - En caso de error:
        - Si el usuario no existe: Mensaje de error con código de estado 404.
        - Si hay problemas con los datos: Mensaje de error con código de estado 400.

```json
{
    "nombre": "Brian",
    "apellido": "Maxi",
    "usuario": "georgeeee",
    "email": "george@gmail.com",
    "password": "password1234MJK"
}
```