import {useDispatch, useSelector} from "react-redux";
import listPaginationStyle from "./ListPagination.module.css";
import {nextPage, previousPage} from "../../../../redux/reducers/todoReducer";

const ListOfTodos = function () {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoInput)
    let pageLimit = Math.ceil(todos.todoList.length / todos.pageSize)
    if (pageLimit < 1) {
        return (
            <div className={listPaginationStyle.todoList__list__pagination}>
            </div>
        );
    } else {
        return (
            <div className={listPaginationStyle.todoList__list__pagination}>
                <button onClick={() => dispatch(previousPage())}>left</button>
                <button onClick={() => dispatch(nextPage())}>right</button>
                {todos.currentPage}:{pageLimit}
            </div>
        );
    }
};

export default ListOfTodos