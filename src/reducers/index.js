import {
    ADD_CATEGORY,
    ADD_TODO,
    EDIT_TODO,
    REMOVE_CATEGORY,
    REMOVE_TODO,
    EDIT_CATEGORY_TITLE
} from "../actions/actionTypes";
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
                if (cat.category_id === action.category_id){
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

        case REMOVE_TODO:
            let newRemoveTodos = [...state.todos];
            newRemoveTodos.filter(cat => {
                if (cat.category_id === action.category_id){
                    let index = -1;
                    cat.items.forEach((todo, i) => {
                        if(todo.id === action.id){
                            index = i;
                        }
                    });

                    if(index > -1){
                        cat.items.splice(index, 1);
                    }
                    return cat;
                }
                return cat;
            })
            return {...state, todos: [...newRemoveTodos]};

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
            let newRemoveList = [...state.todos];
            newRemoveList.forEach((cat, index) => {
                if(cat.category_id === action.id){
                    newRemoveList.splice(index, 1);
                }
            })
            return {...state, todos: [...newRemoveList]};
        case EDIT_CATEGORY_TITLE:
            let newEditList = [...state.todos];
            newEditList.filter(cat => {
                if (cat.category_id === action.id){
                    cat.title = action.title;
                    return cat;
                }
                return cat;
            })
            return {...state, todos: [...newEditList]};

        default:
            return state;
    }
}

export default todoReducer;