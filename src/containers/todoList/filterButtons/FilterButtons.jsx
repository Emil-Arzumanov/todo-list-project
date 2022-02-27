import filterButtonsStyle from "./FilterButtons.module.css";

const FilterButtons = function () {
    return (
        <div className={filterButtonsStyle.todoList__filterButtons}>
            <button>All</button>
            <button>Done</button>
            <button>Todo</button>
        </div>

    );
};

export default FilterButtons