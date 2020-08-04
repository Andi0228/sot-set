import React from "react";
import s from "./Post.module.css";
const Post = props => {
  return (
    <div className={s.item}>
      <img src="https://img.novosti-n.org/upload/ukraine/362697.jpg" />
      {props.messAge}
      <div>
        <span>Like {props.likeCounst}</span>
      </div>
    </div>
  );
};
export default Post;
