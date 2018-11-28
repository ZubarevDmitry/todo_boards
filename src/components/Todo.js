import React from "react";
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TodoMenu from './TodoMenu';

class Todo extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            menuOpened: false
        }
    }
    onClick = () => {
       this.setState({menuOpened: !this.state.menuOpened})
    }
    render(){
        const {text, id} = this.props;
        const {menuOpened} = this.state;

        return (
            <li className={'todo_list-item' + (menuOpened ? ' expanded' : '')}>
                <p>{text}</p>
                <FontAwesomeIcon icon='edit' onClick={this.onClick}  />
                {menuOpened && <TodoMenu id={id} text={text} />}
            </li>
        );
    }

};

Todo.propTypes = {
    text: propTypes.string.isRequired
}

export default Todo;