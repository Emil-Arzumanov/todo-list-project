import {createSlice} from "@reduxjs/toolkit";
import initialState from "../intitalState";

const todosInputSlice = createSlice({
    name: 'todosInputSlice',
    initialState,
    reducers: {
        addActivity(state, action) {
            state.todoList.push({
                activity: state.currentTodoText,
                condition: action.payload,
                id: state.todoList.length + 1
            });
            state.currentTodoText = "";
        },
        updateTextInput(state, action) {
            state.currentTodoText = action.payload;
        },
        nextPage(state) {
            if (state.currentPage < Math.ceil(state.todoList.length / state.pageSize))
                state.currentPage += 1;
        },
        previousPage(state) {
            if (state.currentPage > 1)
                state.currentPage -= 1;
        },
        deleteAllTodos(state) {
            state.todoList = [];
        },
        deleteDoneTodos(state) {
            let indToDelete = [];
            state.todoList.forEach((elem,ind) => {
                if (elem.condition === true) {
                    indToDelete.push(ind);
                }
            })
            for (let i = indToDelete.length -1; i >= 0; i--)
                state.todoList.splice(indToDelete[i],1);
        },
        deleteCurrentTodo(state, action) {
            state.todoList.forEach((elem, ind) => {
                if (elem.id === action.payload + 1) {
                    state.todoList.splice(ind, 1);
                }
            })
        },
        undoTodo(state, action) {
            state.todoList.forEach((elem) => {
                if (elem.id === action.payload) {
                    elem.condition = false;
                }
            })
        },
        doTodo(state, action) {
            state.todoList.forEach((elem) => {
                if (elem.id === action.payload) {
                    elem.condition = true;
                }
            })
        },
        changeTodoFilter(state, action) {
            state.todoFilter = action.payload;
            console.log(state.todoFilter);
        },
    },
})

export const {
    addActivity,
    updateTextInput,
    nextPage,
    previousPage,
    deleteAllTodos,
    deleteDoneTodos,
    deleteCurrentTodo,
    undoTodo,
    doTodo,
    changeTodoFilter,
} = todosInputSlice.actions
export default todosInputSlice.reducer