# API Documentation

## /users/register

### Description

This endpoint is used to register a new user.

### Method

`POST`

### Request Body

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

Responses
Success
Status Code: 201 Created
Response Body: A JSON object containing <vscode_annotation details='%5B%7B%22title%22%3A%22hardcoded-credentials%22%2C%22description%22%3A%22Embedding%20credentials%20in%20source%20code%20risks%20unauthorized%20access%22%7D%5D'> generated</vscode_annotation>the token and user information.
Example:

```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "createdAt": "2023-10-01T00:00:00.000Z",
    "updatedAt": "2023-10-01T00:00:00.000Z"
  }
}
```

Validation Errors
Status Code: 400 Bad Request
Response Body: A JSON object containing an array of validation errors.
Example:

```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

Server Errors
Status Code: 500 Internal Server Error
Response Body: A JSON object containing the error message.
Example:

```json
{
  "error": "Internal Server Error"
}
```

## Endpoint: /users/login

Method: POST

Description: Authenticates a user and provides a token for accessing secured resources.

### Request Body

email (string, required): The user's email address.
password (string, required): The user's password.

Response:
Success (200 OK):

```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "createdAt": "2023-10-01T00:00:00.000Z",
    "updatedAt": "2023-10-01T00:00:00.000Z"
  }
}
```

Error (401 Unauthorized):

```json
{
  "message": "Invalid email or password"
}
```

## `/users/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated user.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Example response

- `user` (object):
  - `fullname` (object)
    - `firstname` (string): User's first name (min 3 character)
    - `lastname` (string): User's last name (min 3 character)
  - `email` (string): User's email address (must be a valid email)

## `/users/logout` Endpoint

### Description

Logout the current user and blacklist the token provided in cookie or headers

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or cookies:
