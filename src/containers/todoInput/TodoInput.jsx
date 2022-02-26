import todoInputStyle from "./TodoInput.module.css"

const TodoInput = function () {
    return (
        <div className={todoInputStyle.todoInput}>
            <h1 className={todoInputStyle.todoInput__h1}>TodoInput</h1>
            <div className={todoInputStyle.todoInput__textAndButton}>
                <input type="text" placeholder="New Todo"/>
                <button>Add new task</button>
            </div>
        </div>
    );
};

export default TodoInput