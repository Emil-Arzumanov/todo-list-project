import deleteButtonsStyle from "./DeleteButtons.module.css";
import {useDispatch} from "react-redux";
import {deleteAllTodos, deleteDoneTodos} from "../../../redux/reducers/todoReducer";

const DeleteButtons = function () {
    const dispatch = useDispatch();

    return (
        <div className={deleteButtonsStyle.todoList__deleteButtons}>
            <button onClick={() => dispatch(deleteDoneTodos())}>Delete done tasks</button>
            <button onClick={() => dispatch(deleteAllTodos())}>Delete all tasks</button>
        </div>
    );
};

export default DeleteButtons;