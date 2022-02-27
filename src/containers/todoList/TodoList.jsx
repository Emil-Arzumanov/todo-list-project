import {useDispatch, useSelector} from "react-redux";
import todoListStyle from "./TodoList.module.css";
import FilterButtons from "./filterButtons/FilterButtons";
import ListOfTodos from "./listOfTodos/ListOfTodos";
import DeleteButtons from "./deleteButtons/DeleteButtons";

const TodoList = function () {
    const todos = useSelector(state => state.todoInput)
    const dispatch = useDispatch();

    return (
        <div className={todoListStyle.todoList}>
            <FilterButtons/>
            <ListOfTodos/>
            <DeleteButtons/>
        </div>
    );
};

export default TodoList