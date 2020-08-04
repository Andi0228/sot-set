import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components1/Navbar/Navbar";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
//import DialogsContainer from "./components1/Dialogs/DialogsContainer";
import UsersContainer from "./components1/Users/UsersContainer";
//import ProfileContainer from "./components1/Profile/ProfileContainer";
import HeaderContainer from "./components1/Header/HeaderContainer";
import LoginPage from "./components1/Login/Login";
import { connect } from "react-redux";
import {initializeApp} from "./redux/app-reduser"
import { compose } from "redux";
import Preloader from "./components1/commom/preloader/preloader";
import store from './redux/redux-store';
import {Provider} from "react-redux";
import { withSuspense } from "./HOC/withSuspense";

const DialogsContainer = React.lazy(() => import('./components1/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components1/Profile/ProfileContainer'));

class App extends React.Component {


  componentDidMount(){
    this.props.initializeApp();
   }


  render() {

if(!this.props.initialized){    
return <Preloader/>
}
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={ withSuspense(DialogsContainer)} />
            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
               
            
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginPage />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized : state.app.initialized
})

let AppContainer = compose (
  withRouter, 
  connect(mapStateToProps, {initializeApp}))(App);   
let SimonyanJSApp = (props) => {
  return <BrowserRouter>
  <Provider store={store}>
      <AppContainer/>
      </Provider>
  </BrowserRouter>
}

export default SimonyanJSApp;