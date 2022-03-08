import {useDispatch, useSelector} from "react-redux";
import listOfTodosStyle from "./ListOfTodos.module.css";
import ListPagination from "./listPagination/ListPagination";
import TodoElement from "./todoElement/TodoElement";
import {changeCurrentLisLength} from "../../../redux/reducers/todoReducer";

const ListOfTodos = function () {
    const todos = useSelector(state => state.todoInput);
    const dispatch = useDispatch();
    const todoListArray = todos.todoList;
    let startElement = todos.pageSize * (todos.currentPage - 1);
    let page = [];
    for (let i = 0; i < todoListArray.length; i++) {
        let elemCondition = todoListArray[i].condition === todos.todoFilter || todos.todoFilter === "all";
        if (elemCondition) {
            page.push(todoListArray[i]);
        }
    }
    dispatch(changeCurrentLisLength(page.length));

    return (
        <div className={listOfTodosStyle.todoList__list}>
            <ListPagination/>
            {
                page.map((elem, ind) => {
                    let indCondition = ind >= startElement && ind < startElement + todos.pageSize;
                    if (indCondition) {
                        return (
                            <TodoElement key={elem.id}
                                         id={elem.id}
                                         activity={elem.activity}
                                         condition={elem.condition}
                            />
                        );
                    }
                })
            }
        </div>
    );
};

export default ListOfTodos