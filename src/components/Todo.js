import React from "react";
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditTodo from './EditTodo';

class Todo extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            edit_view: false
        }
    }
    onEditClick = () => {
       this.setState({edit_view: !this.state.edit_view})
    }
    render(){
        const {text, id, category_id} = this.props;
        const {edit_view} = this.state;

        return (
            <li className={'todo_list-item' + (edit_view ? ' expanded' : '')}>
                <p>{!edit_view && text || edit_view && <EditTodo id={id} text={text} category_id={category_id} afterSave={this.onEditClick}/>}</p>
                <FontAwesomeIcon icon='edit' onClick={this.onEditClick}  />
            </li>
        );
    }

};

Todo.propTypes = {
    text: propTypes.string.isRequired
}

export default Todo;