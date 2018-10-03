En el siguiente proyecto vamos a modificar el proyecto realizado en el curso 2, adicionando un par de funcionalidades y almacenando los elementos en el LocalStorage.

En esta actividad podrán poner en práctica lo estudiado durante este curso y notarán como existen diferentes soluciones a una misma necesidad, en este caso, el registro de los estudiantes.

La idea es que cuando se haga clic en el botón Registrar Estudiante se capturen los siguientes datos: el código, el nombre, y la nota digitada. Estos datos hay que guardarlos como un objeto estudiante. La diferencia del proyecto con respecto al del curso 2 es que el objeto estudiante se guardará en el localStorage y automáticamente se agregará al listado de estudiantes. 

Los otros botones tienen la misma funcionalidad de la actividad del proyecto del curso 2.

Para recordar: el botón Mostrar Promedio mostrará la nota promedio de los estudiantes, el botón Mostrar Nota Mayor mostrará la nota mayor entre los estudiantes registrados, y el botón Mostrar Nota Menor mostrará la nota menor entre los estudiantes registrados.

En este proyecto vemos algo adicional y son los botones de Editar y Eliminar. Al hacer clic sobre el botón Editar se rellenarán los campos con los respetivos valores del estudiante que se seleccionó. Al terminar los cambios se hará clic en el botón Registrar Estudiante para que se actualicen los datos en el localStorage y en el listado de estudiantes. 

Por último, al hacer clic sobre el botón Eliminar los datos tanto del listado como del localStorage del estudiante seleccionado serán borrados. Al cargar la página se deben listar los estudiantes que se encuentran registrados en el localStorage.