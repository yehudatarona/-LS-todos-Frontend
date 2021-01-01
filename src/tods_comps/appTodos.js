import React from 'react';
import TodoTitle from './todoTitle';
import CardItem from './cardItem';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './nav';
import ToDoList from './toDoList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { toDoReducer } from '../reducer/toDoReducer'
import Header from './header';
function AppTodos(props) {
  const myStore = createStore(toDoReducer);

  return (
    <div className="container-fluid">
      <Provider store={myStore}>
        <Router>
          <Header/>
          <Nav />
          <Route exact path={"/"} component={ToDoList} />
          <Route exact path={"/newTodo/"} component={TodoTitle} />
          <Route exact path={"/addItems/:id_item"} component={CardItem} />
        </Router>
      </Provider>


    </div>
  )
}

export default AppTodos