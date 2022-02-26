import appStyle from './App.module.css';
import TodoInput from "./containers/todoInput/TodoInput";

function App() {
  return (
    <div className={appStyle.App}>
      <div className={appStyle.mainSection}>
        <TodoInput/>
        <div></div>
      </div>
    </div>
  );
}

export default App;
