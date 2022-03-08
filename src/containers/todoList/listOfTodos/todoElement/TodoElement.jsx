import {useDispatch, useSelector} from "react-redux";
import todoElementStyle from "./TodoElement.module.css";
import {
    deleteCurrentTodo,
    disableEditModAndChangeTodo,
    doTodo,
    enableEditMod,
    undoTodo,
    updateEditTextInput
} from "../../../../redux/reducers/todoReducer";

const TodoElement = function (props) {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoInput)

    return (
        <div key={props.id}>
            {
                props.edit ?
                    <div className={todoElementStyle.todoEditor}>
                        <input
                            type="text"
                            onChange={(e) => dispatch(updateEditTextInput(e.target.value))}
                            value={todos.currentEditText}
                        />
                        <button onClick={() => dispatch(disableEditModAndChangeTodo(props.id))}>Ок</button>
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