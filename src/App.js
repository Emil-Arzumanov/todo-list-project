import appStyle from './App.module.css';
import TodoInput from "./containers/todoInput/TodoInput";
import TodoList from "./containers/todoList/TodoList";

function App() {
  return (
    <div className={appStyle.App}>
      <div className={appStyle.mainSection}>
        <TodoInput/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
