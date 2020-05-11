import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assests/font-awesome/css/all.css'
import './assests/materialize/css/materialize.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


var firebaseConfig = {
    apiKey: "AIzaSyBajQ1VvHF4jyv7u6U0Kmt9H8DXb3Ar-2Y ",
    authDomain: "project-934168468131.firebaseapp.com",
    databaseURL: "https://project-934168468131.firebaseio.com",
    projectId: "project-934168468131",
    storageBucket: "project-934168468131.appspot.com",
    messagingSenderId: "sender-id",
    appId: "1:934168468131:web:ed4aa86b162bd37aa4fd16",
    measurementId: "G-measurement-id",
  };
  