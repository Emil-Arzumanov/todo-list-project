import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import todosInputSlice from "./reducers/todoReducer";

const reducers = combineReducers({
    todoInput: todosInputSlice
})

export const store = configureStore({
    reducer: reducers,
})