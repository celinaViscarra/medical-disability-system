import React from 'react'
import {Redirect} from 'react-router-dom'
import {useAuth} from '../SignUp/Context/AuthContext'

function CheckLogIn (){
    const {currentUser, logout} = useAuth()
    return (
    <>
        {currentUser === null ? <Redirect to='/login' />:''}
        </>
    );
}

export default CheckLogIn;