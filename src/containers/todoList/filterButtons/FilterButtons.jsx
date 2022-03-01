import filterButtonsStyle from "./FilterButtons.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeTodoFilter} from "../../../redux/reducers/todoReducer";

const FilterButtons = function () {
    const todos = useSelector(state => state.todoInput.todoFilter);
    const dispatch = useDispatch();

    return (
        <div className={filterButtonsStyle.todoList__filterButtons}>
            <button
                onClick={() => {dispatch(changeTodoFilter("all"))}}
                className={todos==="all" ? filterButtonsStyle.all : ""}
            >All</button>
            <button
                onClick={() => {dispatch(changeTodoFilter(true))}}
                className={todos===true ? filterButtonsStyle.done : ""}
            >Done</button>
            <button
                onClick={() => {dispatch(changeTodoFilter(false))}}
                className={todos===false ? filterButtonsStyle.todo : ""}
            >Todo</button>
        </div>

    );
};

export default FilterButtons