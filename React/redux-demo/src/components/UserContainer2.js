import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux'

function UserContainer2(props) {
    return (
        <div>
            hello
        </div>
    );
}
const mapStateToProps = state => {
    return{
        userData:state.user
    }
}
const mapDispatchToProps = dispatch  => {
    return{
        fetchUsers: () => dispatch(fetchUsers())
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer2);