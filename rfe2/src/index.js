import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let contacts = [{
    id: 1,
    name: 'Val',
    phone: '647 222 2222'},
    {
    id: 2,
    name: 'Pav',
    phone: '647 111 1111'},
    {
    id: 3,
    name: 'Hru',
    phone: '647 123 1234'}
]

ReactDOM.render(<App contacts={contacts} />, document.getElementById('root'));