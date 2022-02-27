import deleteButtonsStyle from "./DeleteButtons.module.css";

const DeleteButtons = function () {
    return (
        <div className={deleteButtonsStyle.todoList__deleteButtons}>
            <button>Delete done tasks</button>
            <button>Delete all tasks</button>
        </div>
    );
};

export default DeleteButtons;