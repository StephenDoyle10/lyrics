import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'whatwg-fetch';
import Greetings from './Greetings.jsx';

const element = (
    
        <Greetings/>
    
);

ReactDOM.render(element, document.getElementById('contents'))