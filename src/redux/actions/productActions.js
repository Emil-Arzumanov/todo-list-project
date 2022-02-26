import {ActionTypes} from "../constants/action-types";

export const addTodo = (todo = "todo") => {
    return {
        type: ActionTypes.ADD_TODO,
        todo: todo
    };
};

export const deleteAllTodos = (onlyDoneTodos = false) => {
    return {
        type: ActionTypes.DELETE_TODO,
        onlyDoneTodos: onlyDoneTodos
    };
}

export const updateTodoText = (text = "") => {
    return {
        type: ActionTypes.UPDATE_TODO_TEXT,
        text: text
    };
};