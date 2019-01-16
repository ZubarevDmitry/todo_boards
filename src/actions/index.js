import {ADD_CATEGORY, ADD_TODO, EDIT_CATEGORY_TITLE, EDIT_TODO, REMOVE_CATEGORY, REMOVE_TODO} from "./actionTypes";

export function addTodo(text, category_id) {
    return {type: ADD_TODO, text, category_id}
};

export function editTodo(id, text, category_id) {
    return {type: EDIT_TODO, id, text, category_id}
}

export function removeTodo(id, category_id) {
    return {type: REMOVE_TODO, id, category_id}
};

export function addCategory(title) {
    return {type: ADD_CATEGORY, title }
}

export function editCategoryTitle(id, title) {
    return {type: EDIT_CATEGORY_TITLE, id, title}
}

export function removeCategory(id) {
    return {type: REMOVE_CATEGORY, id}
}

