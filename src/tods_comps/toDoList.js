import React, { useEffect, useState } from 'react';
import ToDoItem from './toDoItem';
import { useDispatch, useSelector } from 'react-redux';
import TodoCard from './todoCrad';
import "../css_comps/todos.css"
import { doApiGet } from '../services/apiService';
function ToDoList(props) {

  let todosList_ar = useSelector((myStore) => myStore.todosList_ar);
  let dTodoList_ar = useDispatch();

  useEffect(() => {
    todosList();

  }, [])

  const todosList = () => {
    // let url = "http://localhost:3000/todos";
    let url = "https://ls-task-todos.herokuapp.com/todos";
    doApiGet(url)
      .then(data => {
        // console.log("data for DB", data);
       dTodoList_ar({ type: "updateList", data: data })
      });
  }
 

  return (
    <div className="container mt-4">
      <div className="d-flex flex-wrap justify-content-between " >
        {todosList_ar.map((cardTodo, index) => {
          return (<TodoCard key={cardTodo._id} indexCard={index} cardTodo={cardTodo} todosList={todosList}/>)
        })}
      </div>
    </div>

  )
}

export default ToDoList
