# 1.1: información del curso, paso 1
Use create-react-app para inicializar una nueva aplicación. Modifique index.js para que coincida con lo siguiente (se da el contenido inicial), y elimine archivos adicionales (App.js, App.css, App.test.js, logo.svg, setupTests.js, reportWebVitals.js). 
Desafortunadamente, toda la aplicación está en el mismo componente. Refactorice el código para que conste de tres componentes nuevos: Header, Content y Total. Todos los datos aún residen en el componente App, que pasa los datos necesarios a cada componente mediante props. Header se encarga de representar el nombre del curso, Content representa las partes y su número de ejercicios y Total representa el número total de ejercicios.

# 1.2: información del curso, paso 2
Refactorice el componente Content para que no represente ningún nombre de partes o su número de ejercicios por sí mismo. En su lugar, solo representa tres componentes Part de los cuales cada uno representa el nombre y el número de ejercicios de una parte. 

# 1.3: información del curso, paso 3
Avancemos para usar objetos en nuestra aplicación. Modifique las definiciones de las variables del componente App de la siguiente manera y también refactorice la aplicación para que siga funcionando: (se definen de otra manera las constantes con los datos)

# 1.4: información del curso paso 4
Se vuelve a modificar la información del componente App (viene dado por el enunciado), ahora para utilizar un array, y se trata de modificar el código otra vez para adaptarlo a los nuevos datos.

# 1.5: información del curso paso 5
Ahora toda la información va en un solo objeto, se trata de ajustar de nuevo el código
