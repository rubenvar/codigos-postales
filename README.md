# Códigos de Municipio - Códigos Postales (ES)

## ¿Qué es esto?

Por ahora, una app simple que devuelve el **código de municipio** para un código postal.

Los datos están sacados de [esta repo](https://github.com/inigoflores/ds-codigos-postales-ine-es/) (gracias), sacados a su vez del INE, y guardados en `csv` en esta misma app.

Si en algún momento están *un poco* desactualizados, [puedes avisarme](https://github.com/rubenvar/codigos-postales/issues) para que lo mire.

## Acceso

La API se puede visitar [aquí](https://cp-muncode.herokuapp.com/).

## Rutas

Las respuestas son todas JSON.

Las únicas rutas disponibles por ahora son estas:

| Ruta               | Params                  | Resp                         |
| ------------------ | ----------------------- | ---------------------------- |
| '/'                | -                       | status, version              |
| '/api/cp/{params}' | Código Postal (string)  | Nombre y Código de Municipio |

## ¿Futuro?

La idea sería crear una app completa similar a [esta](https://github.com/inigoflores/ds-codigos-postales-ine-es/), en Node.js y alojada en algún sitio.

Por ahora, esta app simple me sirve para mi proyecto.
