import React from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import { ContextProvider } from "./Store/TodoContext";

function App() {
  return (
    <React.Fragment>
      <ContextProvider>
        <div className="App">
          <TodoList />
        </div>
      </ContextProvider>
    </React.Fragment>
  );
}

export default App;
