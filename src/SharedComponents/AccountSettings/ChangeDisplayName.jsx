import React from "react"
import { connect } from "react-redux";

function ChangeDisplayName(props) {
    return (
        <div>
            <p>Change your Display or User Name here</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isLogged: state.isLogged,
    }
  }
  
  export default connect (
    mapStateToProps,
    {}
  )(ChangeDisplayName)
