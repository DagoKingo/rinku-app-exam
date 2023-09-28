# RinkuApp

## Deploy App

1. Instalar Docker y Docker-Compose (Docker Desktop en windows)
2. Ubicarse en el directorio raiz de este proyecto y correr el siguiente comando: `docker-compose pull`
3. Ubicarse en el directorio raiz de este proyecto y correr el siguiente comando: `docker-compose up -d --build`
4. Acceder a la siguiente liga para ver el proyecto: [http://localhost:8081/](http://localhost:8081)

## Frontend

El proyecto fue desarrollado con Angular y esta conformado por 3 secciones que se muestran a continuación:

1. Trabajadores:
![Alt text](image-5.png)

![Alt text](image-6.png)

2. Registro de trabajador:

![Alt text](https://i.imgur.com/4fQiMnM.png)

3. Calculo de pagos:

![Alt text](https://i.imgur.com/uzSA6Js.png)

## Backend

El proyecto consite en una API REST que fue desarrollada en nodejs utilizando express como framework, typescript como lenguaje y MVC como patron de diseño.

Los endpoint utilizados en el proyecto son los siguientes:

GET:
1. http://localhost:2002/api/v1/trabajadores/roles
2. http://localhost:2002/api/v1/trabajadores
3. http://localhost:2002/api/v1/trabajadores/pagos?id_trabajador=2

POST:
1. http://localhost:2002/api/v1/trabajadores

    `
    {
        "nombre": "Juan",
        "numero": "0001",
        "id_tipo": 1
    }
    `

2. http://localhost:2002/api/v1/trabajadores/pagos

    `
    {
        "id_trabajador": 2,
        "id_mes": 2,
        "entregas": 10
    }
    `

## Database

Se utilizo mysql como motor de base de datos y se puede encontrar el `dump` de la base de datos en la carpeta db de este proyecto. Se utilizaron procedimientos almacenados para interactuar con las tablas.

Diagrama de Entidad - Relación:

![Alt text](image-7.png)

Procedimientos utilizados:

![Alt text](image-8.png)
