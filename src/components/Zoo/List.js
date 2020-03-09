import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

import {deleted_animal} from 'store/actions/zooActions'

function List({animals, deleteAnimal, updateAnimal, history}) {
    return (
        <section>
            <div className="container">
                <ul>
                    {
                        animals.map( (animal, index) =>
                            <li key={animal.name + index}>
                                {`${animal.name} - ${animal.count} - ${animal.origin}`} 
                                <button onClick={()=>deleteAnimal(animal.id)}>Delete</button>
                                <button onClick={()=>history.push('/zooEdit/' + animal.id )}>Edit</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    animals: state.zoo
})

const mapDispatchToProps = (dispatch) => ({
    deleteAnimal: (id) => dispatch(deleted_animal(id)),
    // updateAnimal: (animal) => dispatch(update_animal(animal))
})

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(List)