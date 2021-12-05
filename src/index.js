import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {  
  return (<h1>{props.course.name}</h1>)
} 
const Part = (props) => <p> {props.name} {props.exercises} </p>
const Content = (props) => {
  return(
    <div>
      <Part name = {props.parts[0].name} exercises = {props.parts[0].exercises} /> 
      <Part name = {props.parts[1].name} exercises = {props.parts[1].exercises} />
      <Part name = {props.parts[2].name} exercises = {props.parts[2].exercises} />
    </div>
  )
}
const Total = (props) => <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + 
  props.parts[2].exercises}</p>

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course = {course} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} /> 
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

/*
/ Ejercicio 1.1
/ Se trata de factorizar el código inicial para que haya tres componentes nuevos: Header, Content y Total. En las líneas 13, 14 y 15
/ se define el componente Header. Se hace de modo completo, sin usar abreviaturas. Después, en la línea 19 se utiliza el componente.
/ Observar que el props se llama course y el valor que le damos es el almacenado en course.
/ En la línea 16 se define el componente Content con notación abreviada, y se utiliza en las líneas 21, 22 y 23. El otro componente 
/ es sencillo. Solo fijarse en que para sumar se mete toda la operación entre llaves.
/
/ Ejercicio 1.2
/ Refactorice el componente Content para que no represente ningún nombre de partes o su número de ejercicios por sí mismo. En su 
/ lugar, solo representa tres componentes Part de los cuales cada uno representa el nombre y el número de ejercicios de una parte. 
/ En la línea 17 se define el componente Part y en las siguientes de redefine Content. Este último actúa como un mero contenedor ya 
/ que es Part lo que recibe los argumentos. Esto también lo vemos en la declaración de la línea 29.
/
/ Ejercicio 1.3
/ Entre las líneas 5 y 17 se da una nueva definición de los datos, se trata de cuadrar el código para que todo funcione.
/ Vemos que se trata de definir bien, de manera coherente, todos los nombres asociados a las props
/
/ Ejercicio 1.4
/ Se vuelve a modificar la definición de los datos, según vemos en líneas 6 a 19, y se trata de modificar el código de nuevo.
/ Las modificaciones son bastante naturales, como puede verse en el código. Lo única que no salió a la primera es el componente
/ Total, ya que no se puede usar algo tipo parts[0] como identificador, por lo que lo he sustituido por parts0
/
/ Ejercicio 1.5
/ Se vuelve a modificar la definición de los datos, esta vez para ponerlo todo en un array único, y debe modificarse el código en
/ consecuencia. Además, veo que el ejercicio 1.4 no está bien, tendría que haber pasado los datos del siguiente modo en el return
/ final: <Header course={course} />
/        <Content parts={parts} />
/        <Total parts={parts} />, lo corregiré en este ejercicio.
/ El componente Content no se puede escribir simplificado, hace falta el return.
/
/
/
/
*/