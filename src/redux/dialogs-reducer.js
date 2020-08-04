//const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: " Ты самый крутой" },
    { id: 3, message: " привет" },
    { id: 4, message: " Эдгар оч тупенький" },
    { id: 5, message: " Ты слышал какой Эдгар глупый?" }
  ],
  dialogs: [
    { id: 1, name: "Жожо" },
    { id: 2, name: "Эдгар" },
    { id: 3, name: "Вардуи" },
    { id: 4, name: "Давид" },
    { id: 5, name: "Гугул" },
    { id: 6, name: "Булгур" }
  ],
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    //case UPDATE_NEW_MESSAGE_BODY: //{
      //return { ...state, newMessageBody: action.body };
      //let stateCopy = {...state} ;
    //}
    case SEND_MESSAGE: //{
      let body = action.newMessageBody;
      return{...state, messages: [...state.messages, { id: 6, message: body }]};
      //let stateCopy = {...state} ;
      //stateCopy.messages = [...state.messages];
    //}
    default:
      return state;
  };
};
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });
//export const updateNewMessageBodyCreator = body => ({type: UPDATE_NEW_MESSAGE_BODY,body: body});
export default dialogsReducer;
