import React, {Component} from 'react';
import {editCategoryTitle, removeCategory} from "../actions";
import {connect} from 'react-redux';

class EditListTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        }
    }
    onSaveClick = () => {
        const {category_id, dispatch} = this.props;
        dispatch(editCategoryTitle(category_id, this.state.title));
        this.props.afterSave();
    }

    onRemoveClick = () => {
        const {category_id, dispatch} = this.props;
        dispatch(removeCategory(category_id));
        this.props.afterSave();
    }
    onInputChange = (e) => {
        this.setState({title: e.target.value})
    }
    render() {
        let {title} = this.state;
        return (
            <>
                <input type="text" value={title} onChange={this.onInputChange}/>
                <button type="button" className="btn green small" onClick={this.onSaveClick}>Save</button>
                <button type="button" className="btn red small remove" onClick={this.onRemoveClick}>Remove</button>
            </>
        );
    }
}

export default connect()(EditListTitle);