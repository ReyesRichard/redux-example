import React, {Fragment, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

import {update_animal} from 'store/actions/zooActions'

function Edit({updateAnimal, match, animals}) {
    const [animal, setAnimal] = useState(
        {}
    )
    useEffect(()=>{
        setAnimal(animals.filter( animal => animal.id === match.params.id)[0])
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault()
        updateAnimal(animal)
    }

    const handleCaractristic = (e) => {
        e.preventDefault()
        const value = e.target.value
        const field = e.target.name
        setAnimal( {
            ...animal,
            [field]: value
        })
    }

    return (
        <Fragment>
           <section>
                <div className="container">
                    {console.log(animal)}
                    <h2>Datos animal:</h2>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <label htmlFor="name">Name: </label>
                            <input type="text" id='name' name='name' value={animal.name} onChange={handleCaractristic}/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="count">Cantidad: </label>
                            <input type="text" id='count' name='count' value={animal.count} onChange={handleCaractristic} />
                        </fieldset> 
                        {/* <button type='button' onClick={addAnimal(animal)}>Enviar animal</button> */}
                        <button type='submit' >Guardar</button>
                    </form>
                </div>
            </section>
        </Fragment>
    )
}

Edit.propTypes = {
    
}

const mapStateToProps = (state) => ({
    animals: state.zoo 
})

const mapDispatchToProps = (dispatch) => ({
    updateAnimal: (animal) => dispatch(update_animal(animal)),
})

export default compose( withRouter, connect(mapStateToProps, mapDispatchToProps))(Edit)
