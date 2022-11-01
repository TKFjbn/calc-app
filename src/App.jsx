/* eslint no-eval: 0*/
//importación
import React, { useState } from "react"
import words from "lodash.words"
import Functions from "./components/Functions"
import MathOperations from "./components/MathOperations"
import Numbers from "./components/Numbers"
import Result from "./components/Result"
import "./App.css"


//función
const App = () => {

    //array destructuring
    //1ra posicion: valor por defecto
    //2da posicion: funcion que permite modificar el valor por defecto
    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)

    //es similar a un if 
    //(esVerdadero) ? (resultadoPorVerdadero) : (resultadoPorFalso)
    const value = items.length > 0 ? items[items.length - 1] : "0"

    //cuerpo de la función o lo que ejecuta la funcion
    console.log("renderizacion de la app", value)
    return (
        <main className='react-calculator'>
            <Result value={value} />
            <Numbers onClickNumber={number => {
                console.log("Click en el Number: ", number)
                setStack(`${stack}${number}`)
            }}/>
            <Functions 
                onContentClear={() => {
                    console.log("Content Clear")
                    setStack("")
                }}
                onDelete={() => {
                    if(stack.length > 0){
                        const newStack = stack.substring(0, stack.length - 1)
                        console.log("Delete")
                        setStack(newStack)
                    }
            }}/>
            <MathOperations
                onClickOperation={operation => {
                    console.log("Operation: ",operation)
                    setStack(`${stack}${operation}`)
                }}
                onClickEqual={equal => {
                    console.log("Equal: ",equal)
                    //es peligrosa la utilizacion de eval
                    setStack(eval(stack).toString())
            }}/>
    </main>)
}

//exportación
export default App