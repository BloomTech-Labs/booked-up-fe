import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuthenticated, ...otherProps}) => {
    return (
        <>
            <Route {...otherProps}
            render={(props) => {
                // if(localStorage.getItem('token')) {
                if(isAuthenticated) {
                    return <Component />;
                } 
                else {
                    return <Redirect to='/login' />
                }
                }
            } />
        </>
    )
}

export default PrivateRoute