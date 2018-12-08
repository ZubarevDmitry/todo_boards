import {ADD_CATEGORY, ADD_TODO, EDIT_TODO, REMOVE_CATEGORY, REMOVE_TODO} from "../actions/actionTypes";
import uuid from 'uuid';

function todoReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            let newTodos = [...state.todos];
            newTodos.filter(cat => {
                if (cat.category_id === action.category_id) {
                    cat.items.push({
                        id: uuid.v4(),
                        text: action.text,
                    })
                    return cat;
                }
                return cat;
            })
            return {...state, todos: [...newTodos]};
        case EDIT_TODO:
            let newEditTodos = [...state.todos];
            newEditTodos.filter(cat => {
                if (cat.id === action.category_id){
                    cat.items.filter(todo => {
                        if(todo.id === action.id){
                            todo.text = action.text;
                            return todo;
                        }
                        return todo;
                    })
                    return cat;
                }
                return cat;
            })

            return {...state, todos: [...newEditTodos]};
        case
        REMOVE_TODO:
            let filteredTodos = state.filter(t => t.id !== action.id);
            return {...filteredTodos};
        case ADD_CATEGORY:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.title,
                        category_id: uuid.v4(),
                        items: []
                    }
                    ]
            };
        case REMOVE_CATEGORY:
            return state
        default:
            return state;
    }
}

export default todoReducer;