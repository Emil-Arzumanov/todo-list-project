import {useDispatch, useSelector} from "react-redux";
import listOfTodosStyle from "./ListOfTodos.module.css";
import ListPagination from "./listPagination/ListPagination";

const ListOfTodos = function () {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoInput);
    const startElement = todos.pageSize*(todos.currentPage-1);

    return (
        <div className={listOfTodosStyle.todoList__list}>
            <ListPagination/>
            {
                todos.todoList.map((elem,ind) => {
                    if(ind >= startElement && ind < startElement+todos.pageSize) {
                        return (
                            <div key={elem.id} className={listOfTodosStyle.todoList__list__todo}>{elem.activity}</div>
                        );
                    }
                })
            }
        </div>
    );
};

export default ListOfTodos