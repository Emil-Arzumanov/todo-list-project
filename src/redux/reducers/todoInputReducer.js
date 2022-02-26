import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList: [
        {
            activity:"Learn React",
            condition: true,
            id:1
        },
        {
            activity:"Cook food",
            condition: false,
            id:2
        },
        {
            activity:"Go for a walk",
            condition: false,
            id:3
        },
        {
            activity:"Feed the dog",
            condition: false,
            id:4
        },
        {
            activity:"Go to sleep",
            condition: false,
            id:5
        },
    ],
    currentTodoText:"",
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addActivity(state, action) {
            state.todoList.push(action)
        },
        updateTextInput(state, text) {
            state.currentTodoText = text;
        },
    },
})

export const { addActivity, updateTextInput } = counterSlice.actions
export default counterSlice.reducer