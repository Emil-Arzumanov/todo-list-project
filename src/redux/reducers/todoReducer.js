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

const todosInputSlice = createSlice({
    name: 'todosInputSlice',
    initialState,
    reducers: {
        addActivity(state,action) {
            state.todoList.push({
                activity: state.currentTodoText,
                condition: action.payload,
                id: state.todoList.length+1
            });
            state.currentTodoText = "";
        },
        updateTextInput(state, action) {
            state.currentTodoText = action.payload;
        },
    },
})

export const { addActivity, updateTextInput } = todosInputSlice.actions
export default todosInputSlice.reducer