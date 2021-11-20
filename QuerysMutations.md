***----------------------------------------------  Sprint 2 -----------------------------------------------***

**USUARIOS**
***Obtener todos los Usuarios (getUsers)***
```
query getUsers {
  getUsers {
    id
    nombre
    apellido
    identificacion
    rol
    email
    estado
    creado
  }
}
```
***Obtener un Usuario (getUser)***
```
query getUser($token: String!) {
  getUser(token: $token) {
    id
    nombre
    apellido
    identificacion
    rol
    email
    estado
    creado
  }
}

Variables:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTg1YzJlODE0ODkwZmM2MWRjNWQ0NCIsIm5vbWJyZSI6IkRpZWdvIiwiYXBlbGxpZG8iOiJHb21leiIsImlkZW50aWZpY2FjaW9uIjoiNDU4NjI4NDIiLCJlbWFpbCI6ImFsQGdvLmNvbSIsInJvbCI6IkVzdHVkaWFudGUiLCJlc3RhZG8iOiJQZW5kaWVudGUiLCJjcmVhZG8iOiIyMDIxLTExLTIwVDAyOjIxOjU3LjY4MVoiLCJpYXQiOjE2MzczNzU5ODcsImV4cCI6MTYzNzM3OTU4N30.97XAEKvx9BG6y8Fx2yS5OQ3nqjqNM81KhsgawlnfQPY"
}
```
***Nuevo Usuario (newUser)***
```
mutation newUser($input: UserInput) {
  newUser(input: $input) {
    id
    nombre
    apellido
    identificacion
    rol
    email
    estado
    creado
  }
}

Variables:
{
  "input": {
    "nombre": "Diana",
    "apellido": "Mera",
    "email": "dmera@go.com",
    "password": "123456",
    "identificacion": "52142842",
    "rol": "Estudiante"
  }
}
```
***Login de Usuarios (authUser)***
```
mutation authUser($input: AuthInput) {
  authUser(input: $input) {
    token
  }
}

Variables:
{
  "input": {
    "email": "al@go.com",
    "password": "123456"
  }
}
```
***Actualizar o editar Usuario (updateUser)***
```
mutation updateUser($updateUserId: ID!, $input: UserInput) {
  updateUser(id: $updateUserId, input: $input) {
    id
    nombre
    apellido
    identificacion
    rol
    email
    estado
    creado
  }
}

Variables:
{
  "updateUserId": "61985c2e814890fc61dc5d44",
  "input": {
    "rol": "Lider",
    "nombre": "Diego",
    "apellido": "Gomez",
    "identificacion": "45862842",
    "email": "al@go.com",
    "password": "123456"
  }
}
```
***Eliminar un Usuario (deleteUser)***
```
mutation deleteUser($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId)
}

Variables:
{
  "deleteUserId": "61985c2e814890fc61dc5d44"
}
```


**AVANCES**
***Obtener un Avance (getAdvance)***
```
query getAdvance($getAdvanceId: ID!,){
  getAdvance(id: $getAdvanceId) {
    id
    descripcion
    observaciones
    proyecto
    creadoPor
  } 
}
```
***Obtener todos los Avances (getAdvances)***
```
query getAdvances {
  getAdvances {
    id
    descripcion
    observaciones
    proyecto
    creadoPor
  } 
}
```
***Nuevo Avance (newAdvance)***
```
mutation newAdvance($input: AdvanceInput){
  newAdvance(input: $input) {
    id
    descripcion
    observaciones
    proyecto
    creadoPor
  }
}
```
***Actualizar o editar Avance (updateAdvance)***
```
mutation updateAdvance($input: AdvanceInput, $id: ID!, ){
  updateAdvance(input: $input, id: $id,) {
    id
    descripcion
    observaciones
    proyecto
    creadoPor
  }
}
```
***Eliminar un Avance (deleteAdvance)***
```
mutation deleteAdvance($id: ID!,){
  deleteAdvance(id: $id, ) 
}
```
