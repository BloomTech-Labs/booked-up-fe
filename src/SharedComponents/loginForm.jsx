import react, { useState } from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


function Login(props) {

    const [creds, setCreds] = setState({})

    const handleChange = e => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        props.login(creds, props.history)
    }

    return (
        <>
         <div className='form-container' style={{ background: '#dfe6ed', margin: '8rem auto 0', border: '1px solid #cbd4de'}}>
             <h1>Login</h1>
             <form onSubmit={onSubmit}>
              <div className='form-group'>
                  <input className='form-control focus:border' type='text' name='username' placeholder='username' value={creds.username} onChange={handleChange}></input>
              </div>
              <div className='form-group'>
                 <input className='form-control focus:border' type='text' name='password' placeholder='password' value={creds.password} onChange={handleChange} ></input>
              </div>
              <button className="btn btn-primary" type="submit">Login</button>
             </form>  
         </div>
        
         <div className='form-footer'>
             <Link to='/registration'>Create an account</Link>
         </div>
        </>
    )
}

const mapStateToProps = state => ({
    loginError: state.loginError
})

export default connect(
    mapStateToProps,
    { login }
)(withRouter(login))