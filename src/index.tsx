import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './Fonts/TheWildBreathOfZelda-15Lv.ttf';
import './Fonts/BasaltRegular-Jx3o.ttf';
import { CharacterPageRoute, LandingPageRoute, LogInPageRoute, RegisterPageRoute, UserHomePageRoute } from './Routes';
import { Router } from '@reach/router';

ReactDOM.render(
    <Router>
        <LandingPageRoute path="/" />
        <LogInPageRoute path="login" />
        <UserHomePageRoute path="home" />
        <RegisterPageRoute path="register" />
        <CharacterPageRoute path="character" />
    </Router>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
