# security-app

The application was developed with Node, Express, Javascript, HTML, CSS.

## Start App

```
$ npm install
```

```
$ npm run start
```

App running in [https://localhost:3000](https://localhost:3000/)

## Security

Regular expressions are used to validate forms both on the API and on the client side. XSS problems are also escaped, using regex to avoid scripts between the inputs, `prepared stament` queries are used to avoid SQL injection.


## Configuration

- The application needs to have the mysql service running, since it connects to obtain the data of the participants.
- Mock test data `database.sql`
- The certificate was created with the following command `` `openssl req -nodes -new -x509 -keyout server.key -out server.cert```
- The API is secured against a header `x-token``
- The App to enter `/ participants`, you must be logged in as user admin

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
