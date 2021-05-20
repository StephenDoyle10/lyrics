import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'whatwg-fetch';
import GreetingsParent from './GreetingsParent.jsx';
import { Grid } from 'react-bootstrap';

const element = (
        <Grid fluid>
                <GreetingsParent/>
        </Grid>
    
);

ReactDOM.render(element, document.getElementById('contents'))