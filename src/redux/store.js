import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, messAge: "Hi тебя зовут гугулрл", likeCounst: 52 },
        { id: 2, messAge: "It's my first post", likeCounst: 32 },
        { id: 3, messAge: "Это суслик", likeCounst: 22 },
        { id: 4, messAge: "Глупый Эдгар", likeCounst: 32312 }
      ],
      newPostText: "Эдгурл"
    },
    dialogsPage: {
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
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("State  changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //наблюдатель
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
