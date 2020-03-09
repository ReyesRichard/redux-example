import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from 'store/actions/counterActions'

function CounterComponent(props) {

    //Se generan desde props, pero se genera mejor desde mapDispatchToProps que convierte el dispatch en un array
    // const incrementCounter = () => {
    //     props.dispatch(increment())
    // }
    // const decrementCounter = () => {
    //     props.dispatch(decrement())
    //     // props.dispatch({
    //     //     type: DECREMENT
    //     // })
    // }

    return (
        <div>
            <p>Contador</p>
            <p>Valor: {props.value}</p>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </div>
    )
}

// Para pasar el valor por props, además se le puede poner un valor para que se reciba de difernte forma
const mapStateToProps = (state) => {
    return{
        value: state.counter,
    }
}

// Maneja el dispatch
const mapDispatchToProps = (dispatch)=>{
    return {
        increment: () => { 
            dispatch(increment())
        },
        decrement: ()=> dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)
