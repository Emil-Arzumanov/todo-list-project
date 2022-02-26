import {combineReducers} from "redux";
import {todosReducer} from "./todoInputReducer";

export const reducers = combineReducers({
    allTodos: todosReducer,
});