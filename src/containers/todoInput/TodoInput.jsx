import todoInputStyle from "./TodoInput.module.css"
import {useDispatch, useSelector} from "react-redux";
import {addActivity, updateTextInput} from "../../redux/reducers/todoReducer";

const TodoInput = function () {
    const todos = useSelector(state => state.todoInput)
    const dispatch = useDispatch();

    return (
        <div className={todoInputStyle.todoInput}>
            <div className={todoInputStyle.todoInput__textAndButton}>
                <input type="text"
                       placeholder="New Todo"
                       onChange={(event) => dispatch(updateTextInput(event.target.value))}
                       value={todos.currentTodoText}
                />
                <button onClick={() => dispatch(addActivity(false))}>
                    Add new task
                </button>
            </div>
        </div>
    );
};

export default TodoInput