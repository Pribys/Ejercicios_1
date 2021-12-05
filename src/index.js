import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

    const Header = (props) => {  
        return (<h1>{props.course}</h1>)
    } 
    
    const Part = (props) => <p> {props.part.name} {props.part.exercises} </p>
    const Content = () => 
      <div>
        <Part part = {part1} /> 
        <Part part = {part2} />
        <Part part = {part3} />
      </div>
    const Total = (props) => <p>Number of exercises {props.part1 + props.part2 + props.part3}</p>
  
    return (
      <div>
        <Header course = {course} />
        <Content  />
        <Total part1 = {part1.exercises} part2 = {part2.exercises} part3 = {part3.exercises} /> 
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
/
/
/
/
/
*/