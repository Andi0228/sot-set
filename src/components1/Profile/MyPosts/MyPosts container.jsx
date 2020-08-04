import React from "react";
import {
  addPostActionCreator,
  //UpdateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return{
    posts : state.profilePage.posts,
    newPostText : state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
   // UpdateNewPostText : (text) => {
  //let action = UpdateNewPostTextActionCreator(text);
 //dispatch(action);}, 
    addPost : (newPostText) => {dispatch(addPostActionCreator(newPostText))}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
