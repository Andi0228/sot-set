import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLenghtCreator , required} from "../../../utils/validators/validators";
import { Textarea } from "../../commom/FormsControls/FormsComtrols.jsx";



 
const maxLenght10 = maxLenghtCreator(10);

const MyPosts = React.memo(props => { //shouldComponentUpdate(nextProps, nextState){ return nextProps !== this.props || nextState !== this.state;}

  let postsElements = [...props.posts].reverse().map(p => (
    <Post messAge={p.messAge} likeCounst={p.likeCounst} />
  ));
 
  let onAddPost = (value) => {
    props.addPost(value.newPostText);
  };



  //let onPostChange = () => {
    //let text = newPostElement.current.value;
    //props.UpdateNewPostText(text);};
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});


const  AddNewPostForm = (props) =>{
  return(
  <form onSubmit={props.handleSubmit}>
  <div>
    <Field name={"newPostText"} component={Textarea} placeholder={"Post message"}
     validate={[required, maxLenght10]}/>
  </div>
  <div>
    <button>Add Post</button>
  </div>
</form>
  )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;
