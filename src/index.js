import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import todoReducer from './reducers';
import {Provider} from 'react-redux';
import uuid from 'uuid';

let store = createStore(todoReducer, {
    todos: [
        {
            category_id: uuid.v4(),
            title: 'To Do',
            items: [
                {
                    id: uuid.v4(),
                    text: 'Buy a ticket to the concert'
                },
                {
                    id: uuid.v4(),
                    text: 'Cook a pie'
                },
                {
                    id: uuid.v4(),
                    text: 'Go to shopping with wife'
                }
            ]
        },
        {
            category_id: uuid.v4(),
            title: 'Important notes',
            items: [
                {
                    id: uuid.v4(),
                    text: 'Do some important task'
                },
                {
                    id: uuid.v4(),
                    text: 'And another important task'
                }
            ]
        },
        {
            category_id: uuid.v4(),
            title: 'To learn',
            items: [
                {
                    id: uuid.v4(),
                    text: 'Redux'
                },
                {
                    id: uuid.v4(),
                    text: 'HOOKs'
                }
            ]
        }
    ]
});


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
