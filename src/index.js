import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import todoReducer from './reducers';
import {Provider} from 'react-redux';

let store = createStore(todoReducer, {
    todos: [
        {
            category_id: 0,
            title: 'To Do',
            items: [
                {
                    id: 0,
                    text: 'Buy a ticket to the concert'
                },
                {
                    id: 1,
                    text: 'Cook a pie'
                },
                {
                    id: 2,
                    text: 'Go to shopping with wife'
                }
            ]
        },
        {
            category_id: 1,
            title: 'Important notes',
            items: [
                {
                    id: 0,
                    text: 'Do some important task'
                },
                {
                    id: 1,
                    text: 'And another important task'
                }
            ]
        },
        {
            category_id: 2,
            title: 'To learn',
            items: [
                {
                    id: 0,
                    text: 'Redux'
                },
                {
                    id: 1,
                    text: 'HOOKs'
                }
            ]
        }
    ]
});


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
