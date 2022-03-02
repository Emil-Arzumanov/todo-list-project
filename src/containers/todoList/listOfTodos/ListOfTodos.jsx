import {useDispatch, useSelector} from "react-redux";
import listOfTodosStyle from "./ListOfTodos.module.css";
import ListPagination from "./listPagination/ListPagination";
import TodoElement from "./todoElement/TodoElement";

const ListOfTodos = function () {
    const todos = useSelector(state => state.todoInput);
    let startElement = todos.pageSize * (todos.currentPage - 1);
    let index = todos.pageSize * (todos.currentPage - 1);

    return (
        <div className={listOfTodosStyle.todoList__list}>
            <ListPagination/>
            {
                todos.todoList.map((elem, ind) => {
                    let indCondition = ind >= startElement && index < startElement + todos.pageSize;
                    let elemCondition = elem.condition === todos.todoFilter || todos.todoFilter === "all";
                    if (indCondition && elemCondition) {
                        index++;
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