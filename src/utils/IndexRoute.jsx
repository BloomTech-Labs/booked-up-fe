import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const IndexRoute = ({component: Component, isAuthenticated, ...otherProps}) => {
    return (
        <>
            <Route {...otherProps}
            render={(props) => {
                if(localStorage.getItem('token')) {
                    return <Redirect to='/dashboard' />
                } 
                else {
                    return <Redirect to='/login' />
                }
                }
            } />
        </>
    )
}

export default IndexRoute