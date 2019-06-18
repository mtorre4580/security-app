# App Seguridad Informática

Aplicación de prueba para la materia seguridad Informática

## Overview

La aplicación fue desarrollada con Node, Express, Javascript, HTML, CSS.

## Start App

```
$ npm install
```

```
$ npm run start
```

App running in [https://localhost:3000](https://localhost:3000/)

## Security

Se utilizan expresiones regulares para validar los forms tanto en la API como del lado del client. Se escapan tambien problemas de XSS, utilizando regex para evitar scripts entre los inputs, se utilizan queries `prepared stament` para evitar injección de SQL.

## Configuration

- La aplicación necesita tener el servicio de mysql corriendo, ya que se conecta para obtener los datos de los participantes.
- Mock de datos de prueba `database.sql`
- El certificado se creo con el siguiente comando ```openssl req -nodes -new -x509 -keyout server.key -out server.cert```
- La API se encuentra segurizada contra un header `x-token``
- La App para ingresar a `/participants`, tiene que estar logueado como user admin

## Views App

<div style="text-align:center;margin:auto">
    <img src ="home.png" />
</div>

<div style="text-align:center;margin:auto">
    <img src ="register.png" />
</div>

<div style="text-align:center;margin:auto">
    <img src ="participants.png" />
</div>