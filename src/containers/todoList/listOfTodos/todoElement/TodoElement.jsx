import {useDispatch} from "react-redux";
import todoElementStyle from "./TodoElement.module.css";
import {deleteCurrentTodo, doTodo, enableEditMod, undoTodo} from "../../../../redux/reducers/todoReducer";

const TodoElement = function (props) {
    const dispatch = useDispatch();

    return (
        <div key={props.id}>
            {
                props.edit ?
                    <div className={todoElementStyle.todoEditor}>
                        <input type="text"/>
                        <button>Ок</button>
                    </div> :
                    <div className={props.condition
                        ? todoElementStyle.todoList__list__todoDone + " " + todoElementStyle.todoList__list__todo
                        : todoElementStyle.todoList__list__todo}>
                        <span>{props.activity}</span>
                        <button
                            className={todoElementStyle.button__edit}
                            onClick={() => dispatch(enableEditMod(props.id))}
                        >Edit</button>
                        {
                            props.condition
                                ? <button
                                    onClick={() => dispatch(undoTodo(props.id))}
                                >Undo</button>
                                : <button
                                    className={todoElementStyle.button__do}
                                    onClick={() => dispatch(doTodo(props.id))}
                                >Do</button>
                        }
                        <button onClick={() => dispatch(deleteCurrentTodo(props.id - 1))}>Delete</button>
                    </div>

            }
        </div>
    );
};

export default TodoElement