import React from "react";
import s from "./../Dialogs.module.css";



const Message = (props) => {
  //2
  return <div className={s.message}>{props.message}</div>;
};


export default Message;
