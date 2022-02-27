import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import todosInputSlice from "./reducers/todoReducer";
import paginationReducer from "./reducers/paginationReducer";

const reducers = combineReducers({
    todoInput: todosInputSlice,
    pagination: paginationReducer
})

export const store = configureStore({
    reducer: reducers,
})