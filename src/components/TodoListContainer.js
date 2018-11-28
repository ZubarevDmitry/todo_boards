import TodoList from './TodoList';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps
)(TodoList)