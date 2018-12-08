import React from "react";
import propTypes from 'prop-types';
import Todo from './Todo';
import AddTodo from "./AddTodo";
import AddTodoList from "./AddTodoList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoList = ({todos}) => {
    let todosCategories = todos.map(cat => {
        return (
            <div className='todo_list-category' key={cat.category_id}>
                <h2>{cat.title}</h2>
                <ul>
                    {
                        cat.items.length ?
                            cat.items.map(todo => {
                                return <Todo key={todo.id} {...todo} category_id={cat.category_id}/>
                            })
                            : ''
                    }
                    <AddTodo key={cat.items.length} category_id={cat.category_id}/>
                </ul>
                <FontAwesomeIcon icon='ellipsis-h' size="lg"  />
            </div>
        )
    })
    return (
        <div className='todo_list'>
            {todosCategories}
            <AddTodoList/>
        </div>

    );
};

TodoList.propTypes = {
    todos: propTypes.array.isRequired
}

export default TodoList;