Este proyecto es una Api Rest creada de manera permanente con una base de datos en postgresql
Conocimientos adquiridos en el Curso de Backend con Node.js: Autenticación con Passport.js y JWT
El link del repositorio en github es https://github.com/jeliasalvaradoa/mybackenstore
y el despliegue se hizo en render.com https://mybackenapi.onrender.com
la base de datos de postgresql se creo en render.com
Los endpoint son (
/api/v1/users,
/api/v1/profile,
/api/v1/customers,
/api/v1/orders/id,
/api/v1/categories,
/api/v1/products
)
***Pasos para el deploy*** 

En render.com después de crear la cuenta:

1. Una vez logueado hacemos click en new+ seleccionamos postgresql
2. Luego agregamos 

*Name: aqui un nombre que mostrara render del servicio de la base datos que luego puede ser cambiado si lo deseas
*Database: aqui agregamos el nombre de la base de datos dentro de postgresql
*User: aqui el usuario
*La versión y la región no las modifique deje la que viene por defecto y el campo API KEY se deja vacio

3. seleccionar el plan! en este caso seleccionamos free( recordar que la base de datos solo estara disponible por 90 dias con este plan)
4. hacer click en el botón create database
y se creara después de pocos segundos la base de datos agregagando la siguiente información

*Hostname

*Port

*Database

*Username

*Password

*Internal Database URL

*External Database URL

*PSQL Command

5. Para hacer el deploy  de la api hacemos click en new+ seleccionamos web service
6. Nos indicara luego que seleccionemos el repositorio puede ser de github o gitlab
7. una vez seleccionado el respositorio nos enviara a otra página en la cual debemos 
8. indicar los siguientes datos
*Name: indicar nombre del servicio web 

*Region: indicar región donde se ejecutara el servicio

*Branch: indicar la rama! es ente caso seleccionamos main
*Root: Directorio es opcional! es si quieres indicar una ruta para el deploy. Por lo general es la raiz 
*Runtime: seleccionamos la rutina! en este caso se hizo usando Docker (Debo agregar que es fantastico las cosas que se pueden hacer con docker y la facilidad que brinda para hacer diferentes tareas).

9. Aquí también se debe selccionar el plan de pago! en este caso seleccionamos free

10. OJO => luego un paso muy importante antes de presionar el botón de create web service es agregar las variables de entorno o de ambiente!
para ello hacemos click en advanced => se desplegara un botón de Add Environment Variables con el cual debenos crear 
las variables de entorno que están en el Dockerfile las cuales son 
 
NODE_ENV,
DATABASE_URL,
API_KEY,
JWT_SECRET,
SMTP_EMAIL,
SMTP_PASSWORD

Nota: asignar los valores  a cada variable según corresponda

11. Luego los demas campos se dejan como estan por defecto; recomiendo no modificarlos si no sabes lo que haces a menos que seas experto

12. Finalizamos presionando el botón de Create Web Service

Se esperan unos minutos tal vez segundo y listo estara tu API REST desplegada listo para ser consumida


Nota: Para estos pasos he de suponer que ya tienes un proyecto probado en local y que funciona!
y si todo va bien se hace el deploy para producción


 
