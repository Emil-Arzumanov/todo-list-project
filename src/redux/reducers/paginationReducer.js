import {createSlice} from "@reduxjs/toolkit";
import initialState from "../intitalState";

const todosPaginationSlice = createSlice({
    name: 'paginationSlice',
    initialState,
    reducers: {
        nextPage(state) {
            if (state.currentPage < Math.ceil(state.todoList.length/state.pageSize))
                state.currentPage += 1;
        },
        previousPage(state) {
            if (state.currentPage > 1)
                state.currentPage -= 1;
        },
    },
})

export const {nextPage, previousPage} = todosPaginationSlice.actions
export default todosPaginationSlice.reducer