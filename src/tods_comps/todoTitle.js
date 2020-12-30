import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Moment from 'moment';
import { $CombinedState } from 'redux';
function TodoTitle(props) {

  let todoName = useRef(null);
  let history = useHistory();

  let counterId = useSelector((myStore) => myStore.counterId)
  let dispatch = useDispatch()
  let dateFormat = Moment(new Date()).format('DD/MM/YYYY');
  

  
  const addTodo = () => {
    // dispatch({ type: "addCounterId" });
    // alert(userInput.current.value);
    console.log("counterId",counterId);
    let bodyData = {
      id: counterId,
      todo_name: todoName.current.value,
      items: [],
      created_at: dateFormat,
      updated_at: dateFormat
    }
    dispatch({ type: "addTodoCrad", todoCrad: bodyData })
    todoName.current.value = "";
    // history.push(`/addItems/${counterId}`);
    history.push("/");
  }

  // const addTodo = () => {
  //   alert(todoName.current.value)
  //   history.push("/addItems/");
  // }
  return (
    <div className="container text-center">
      <h1 className="display-4 text-info mt-5" >Named your todo note title</h1>
      <div className="d-flex align-items-center justify-content-center mt-4">
        <input ref={todoName} type="text" className="form-control w-50 border border-info" placeholder="Please enter todo name..." />
        <button onClick={addTodo} className="btn btn-primary">Apply</button>
      </div>
    </div>
  )
}

export default TodoTitle
