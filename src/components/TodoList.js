import React from "react";
import propTypes from 'prop-types';
import TodoListItem from './TodoListItem';
import AddTodoList from "./AddTodoList";

class TodoList extends React.Component{
    render(){
        const {todos} = this.props;

        let todosCategories = todos.map(cat => {
            return <TodoListItem cat={cat} key={cat.category_id}/>
        })
        return (
            <div className='todo_list'>
                {todosCategories}
                <AddTodoList/>
            </div>

        );
    }

};

TodoList.propTypes = {
    todos: propTypes.array.isRequired
}

export default TodoList;