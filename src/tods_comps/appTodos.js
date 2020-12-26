import React from 'react';
import TodoTitle from './todoTitle';
import TaskInput from './taskInput';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './nav';
import ToDoList from './toDoList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { toDoReducer } from '../reducer/toDoReducer'
function AppTodos(props) {
  const myStore = createStore(toDoReducer);

  return (
    <div className="container">
      <Provider store={myStore}>
        <Router>
          <Nav />
          {/* <TaskInput /> */}
          {/* <ToDoList /> */}
          {/* <ItemsList/> */}
          <Route exact path={"/"} component={ToDoList} />
          <Route exact path={"/newTodo/"} component={TodoTitle} />
          <Route exact path={"/addItems/"} component={TaskInput} />
        </Router>
      </Provider>


    </div>
  )
}

export default AppTodos