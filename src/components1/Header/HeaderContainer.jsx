import React from "react";
import Header from "./Header";
import Axios from "axios";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reduser";

class HeaderContainer extends React.Component{

 
    render (){
        return <Header login={this.props.login} {...this.props} />

     
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
   
});
export default connect(mapStateToProps, {logout})(HeaderContainer);                                                          
