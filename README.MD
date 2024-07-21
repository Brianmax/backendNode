# Aplicación para el registro de usuarios

## Descripción

Esta aplicación permite el registro de usuarios, con los siguientes datos:
- Nombre
- Apellido
- Email
- Contraseña

## Instalación

Para instalar la aplicación, se debe clonar el repositorio y ejecutar el siguiente comando:


```bash
npm install
```


## Uso

Para ejecutar la aplicación, se debe ejecutar el siguiente comando:


```bash
npm start
```

## Endpoints

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