import React from "react";
import {addTodo} from "../actions";
import {connect} from "react-redux";

let AddTodo = ({key, category_id, dispatch}) => {
    let input;
  return (
    <li className='todo_item add_todo' key={key}>
        <form onSubmit={e => {
            e.preventDefault();

            if(!input.value.trim()){
                return
            }
            dispatch(addTodo(input.value, category_id));

            input.value = '';
        }}>
            <textarea rows="3" type="text" ref={node => {input = node}}/>
            <button type='submit' className='btn green'>Add New Card</button>
        </form>
    </li>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;