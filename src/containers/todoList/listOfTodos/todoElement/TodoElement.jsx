import {useDispatch, useSelector} from "react-redux";
import todoElementStyle from "./TodoElement.module.css";
import {deleteCurrentTodo} from "../../../../redux/reducers/todoReducer";

const TodoElement = function (props) {
    const dispatch = useDispatch();

    return (
        <div key={props.id} className={todoElementStyle.todoList__list__todo}>
            <span>{props.activity}</span>
            <button onClick={() => dispatch(deleteCurrentTodo(props.id-1))}>Delete</button>
        </div>
    );
};

export default TodoElement