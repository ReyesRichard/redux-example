import React, {Fragment} from 'react'
import {connect} from 'react-redux'

import {setName} from 'store/actions/userActions'
function ViewUIContainer({user, setUser}) {

    const handleName = (e) =>{
        const name = e.target.value
        setUser(name)
    }
    return ( 
        <Fragment>
            {user.name}
            <input type="text" onChange={handleName}/>
            {/* <button onClick={setUser}> Change</button> */}
        </Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        setUser: (name) => dispatch(setName(name))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewUIContainer)
