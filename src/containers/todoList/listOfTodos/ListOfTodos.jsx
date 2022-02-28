import {useDispatch, useSelector} from "react-redux";
import listOfTodosStyle from "./ListOfTodos.module.css";
import ListPagination from "./listPagination/ListPagination";
import TodoElement from "./todoElement/TodoElement";

const ListOfTodos = function () {
    const todos = useSelector(state => state.todoInput);
    const startElement = todos.pageSize*(todos.currentPage-1);

    return (
        <div className={listOfTodosStyle.todoList__list}>
            <ListPagination/>
            {
                todos.todoList.map((elem,ind) => {
                    if(ind >= startElement && ind < startElement+todos.pageSize) {
                        return (
                            <TodoElement key={elem.id} id={elem.id} activity={elem.activity} condition={elem.condition}/>
                        );
                    }
                })
            }
        </div>
    );
};

export default ListOfTodos