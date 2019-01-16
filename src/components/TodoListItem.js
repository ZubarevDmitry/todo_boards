import React, {Component} from 'react';
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import EditListTitle from "./EditListTitle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class TodoListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }
    }
    onEditClick = () => {
        this.setState({
            editing: !this.state.editing
        })
    }
    render() {
        const {cat} = this.props;
        let {editing} = this.state;
        return (
            <div className='todo_list-category'>
                <h2>{editing ? <EditListTitle category_id={cat.category_id} title={cat.title} afterSave={this.onEditClick}/> : cat.title}</h2>
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
                <FontAwesomeIcon icon='ellipsis-h' size="lg" onClick={this.onEditClick} />
            </div>
        );
    }
}

export default TodoListItem;