import React from "react";
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Todo = ({text}) => {
  return (
    <li className='todo_list-item'>
        <p>{text}</p>
        <FontAwesomeIcon icon='edit' size="lg"  />
        <FontAwesomeIcon icon='trash-alt'size="lg"  />
    </li>
  );
};

Todo.propTypes = {
    text: propTypes.string.isRequired
}

export default Todo;