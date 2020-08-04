import { usersAPI } from "../api/api";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
//const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: 1, messAge: "Hi тебя зовут гугулрл", likeCounst: 52 },
    { id: 2, messAge: "It's my first post", likeCounst: 32 },
    { id: 3, messAge: "Это суслик", likeCounst: 22 },
    { id: 4, messAge: "Глупый Эдгар", likeCounst: 32312 },
  ],
  //newPostText: "Эдгурл",
  profile: null,
  status: " ",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        messAge: action.newPostText,
        likeCounst: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };

    //case UPDATE_NEW_POST_TEXT: {
    //return {...state, newPostText : action.newText}; }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.PostId),
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);

  dispatch(setStatus(response.data)); //.then(window.location.reload( true ))
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(response.data));
  }
};

//export const UpdateNewPostTextActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT,newText: text});
export default profileReducer;
