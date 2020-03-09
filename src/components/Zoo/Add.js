import React, {useState, Fragment} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {add_animal} from 'store/actions/zooActions'

function Add({addAnimal}) {
    const [animal, setAnimal] = useState({
        // name: '',
        count: 0,
        // origin: 'desconocido'
    })

    const handleCaractristic = (e) => {
        e.preventDefault()
        const value = e.target.value
        const field = e.target.name
        setAnimal( {
            ...animal,
            [field]: value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        addAnimal(animal)
        setAnimal({   
            name: '',
            count: 0,
            origin: 'desconocido'
        })
    }

    return (
        <Fragment>
            { console.log(animal)}
            <section>
                <div className="container">

                    <h2>Datos animal:</h2>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <label htmlFor="name">Name: </label>
                            <input type="text" id='name' name='name' value={animal.name} onChange={handleCaractristic}/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="count">Cantidad: </label>
                            <input type="number" id='count' name='count' value={animal.count} onChange={handleCaractristic} />
                        </fieldset>
                        {/* <button type='button' onClick={addAnimal(animal)}>Enviar animal</button> */}
                        <button type='submit' >Enviar</button>
                    </form>
                </div>
            </section>
        </Fragment>
    )
}

Add.propTypes = {
    addAnimal: PropTypes.func
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    addAnimal: (animal) => dispatch(add_animal(animal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Add)
