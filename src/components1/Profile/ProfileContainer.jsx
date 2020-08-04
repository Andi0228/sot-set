import React from "react";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter, } from "react-router-dom";
import { compose } from "redux";


class ProfileContainer extends React.Component {

componentDidMount (){
  let userId = this.props.match.params.userId;
  if(!userId){
  
    userId = 6267 //this.props.autorizedUserId; 
   if(!this.props.isAuth){    // здвесь вместо isAuth был userId
      this.props.history.push("/login")
    }
  } 
  this.props.getUserProfile(userId);
  this.props.getStatus(userId);


   
}
  render() {
    return (
      <Profile {...this.props} 
      profile = {this.props.profile} 
      status={this.props.status}
      updateStatus={this.props.updateStatus}/>
    )
  }
}

let mapStateToProps = (state) =>({
profile: state.profilePage.profile,
status: state.profilePage.status,
//autorizedUserId: state.auth.id, //  удалить
isAuth: state.auth.isAuth        //
})

export default  compose(
  connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
 // withAuthRedirect
)(ProfileContainer);