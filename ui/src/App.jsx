import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'whatwg-fetch';
import GreetingsParent from './GreetingsParent.jsx';
import { Grid, Row, Col } from 'react-bootstrap';

const element = (
        <Grid fluid>
        <Row>
                <Col xs={12} sm={10} smOffset={1} mdOffset={3} md={6} lgOffset={3} lg={6}>
                <GreetingsParent/>
                </Col>
                </Row>
                </Grid>
        
    
);

ReactDOM.render(element, document.getElementById('contents'))