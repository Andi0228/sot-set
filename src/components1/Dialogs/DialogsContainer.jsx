import React from "react";
import {
  //updateNewMessageBodyCreator,
  sendMessageCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = state => ({
dialogsPage: state.dialogsPage,
});

let mapDispatchToProps = dispatch => {
  return {
   // updateNewMessageBody: body => {
     // dispatch(updateNewMessageBodyCreator(body));
    //},
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    }
  };
};


export default compose(connect(mapStateToProps, mapDispatchToProps),
withAuthRedirect
)
(Dialogs);
