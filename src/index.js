import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimonyanJSApp from './App';


    ReactDOM.render(
<SimonyanJSApp/> , document.getElementById('root'));


serviceWorker.unregister();
