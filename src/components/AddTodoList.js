import React from "react";
import {addCategory} from "../actions";
import {connect} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AddTodoList = ({dispatch}) => {
    let input;
    return (
        <div className='todo_list-category'>
            <form onSubmit={e => {
                e.preventDefault();

                if (!input.value.trim()) {
                    return
                }

                dispatch(addCategory(input.value));

                input.value = '';
            }}>
                <input type='text' ref={node => input = node}/>
                <button type='submit' className='btn green'><FontAwesomeIcon icon='plus-square' /> Add New List</button>
            </form>
        </div>
    );
};

export default connect()(AddTodoList);