import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'whatwg-fetch';
import GreetingsParent from './GreetingsParent.jsx';

const element = (
    
        <GreetingsParent/>
    
);

ReactDOM.render(element, document.getElementById('contents'))