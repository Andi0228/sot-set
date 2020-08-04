import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  //1
  let pash = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={pash}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;
