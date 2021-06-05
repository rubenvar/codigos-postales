# Códigos de Municipio - Códigos Postales (ES)

## ¿Qué es esto?

Por ahora, una app simple que devuelve el código de municipio para un código postal.

Los datos están sacados de [esta repo](https://github.com/inigoflores/ds-codigos-postales-ine-es/) (gracias), sacados a su ver del INE.

## Acceso

La API se puede visitar [aquí](https://cp-muncode.herokuapp.com/).

## Rutas

Las respuestas son todas JSON.

Las únicas rutas disponibles por ahora son estas:

| Ruta               | Params                  | Resp                |
| ------------------ | ----------------------- | ------------------- |
| '/'                | -                       | status, version     |
| '/api/cp/{params}' | Código Postal (string)  | Código de Municipio |

## ¿Futuro?

La idea sería crear una app completa similar a [esta](https://github.com/inigoflores/ds-codigos-postales-ine-es/), en Node.js y alojada en algún sitio.

Por ahora, esta app simple me sirve para mi proyecto.
