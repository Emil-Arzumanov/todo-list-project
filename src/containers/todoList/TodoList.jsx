import {useDispatch, useSelector} from "react-redux";
import todoListStyle from "./TodoList.module.css";

const TodoList = function () {
    const todos = useSelector(state => state.todoInput)
    const dispatch = useDispatch();

    return (
        <div className={todoListStyle.todoList}>
            <h1>TodoList</h1>
            <div className={todoListStyle.todoList__filterButtons}>
                <button>All</button>
                <button>Done</button>
                <button>Todo</button>
            </div>

        </div>
    );
};

export default TodoList