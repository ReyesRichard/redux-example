import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import EditAnimal from 'Components/Zoo/Edit'

function EditZooContainer(props) {
    const {} = props

    return (
        <main>
            <section>
                <div className="container">
                    <h1> Editar animal</h1>
                    <EditAnimal />
                </div>
            </section>
        </main>
    )
}

EditZooContainer.propTypes = {
    
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(EditZooContainer)
