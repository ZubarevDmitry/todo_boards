import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editTodo} from "../actions";

class EditTodo extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: this.props.text
        }
    }

    onSaveClick = () => {
        const {id, category_id, dispatch} = this.props;
        dispatch(editTodo(id, this.state.text, category_id));
        this.props.afterSave();
    }
    onInputChange = (e) => {
        this.setState({text: e.target.value})
    }
    render() {
        let {text} = this.state;

        return (
            <>
                <input type="text" value={text} onChange={this.onInputChange}/>
                <button type="submit" class="btn green small" onClick={this.onSaveClick}>Save</button>
            </>
        );
    }
}

export default connect()(EditTodo);