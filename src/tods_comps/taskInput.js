import React, { useRef } from "react";
import Moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import ToDoList from "./toDoList";
import { useHistory } from "react-router-dom";
function TaskInput(props) {
  let userInput = useRef(null);
  let history = useHistory()
  // let dateInput = useRef(null);
  let counterId = useSelector((myStore) => myStore.counterId)
  let dispatch = useDispatch()
  let dateFormat = Moment(new Date()).format('DD/MM/YYYY');

  const addTask = () => {
    dispatch({ type: "addCounterId" });
    // alert(userInput.current.value);
    let bodyData = {
      id: counterId,
      task_name: "todos shopping list",
      name: userInput.current.value,
      items: [{test:"123"}],
      created_at: dateFormat,
      updated_at:dateFormat
    }
    dispatch({ type: "addTask", taskItem:bodyData})
    userInput.current.value="";
  }

  return (
    <div className="container text-center">
      <h1 className="display-4 mx-5" style={{ color: "turquoise" }}>Add an item to todo list </h1>
      <div className="d-flex align-items-center justify-content-center">
        <input ref={userInput} type="text" className="form-control w-25 border border-info" placeholder="I have to..." />
        {/* <input ref={dateInput} type="date" className="form-control w-25  mx-1 border border-info" /> */}
        <button onClick={addTask} className="btn btn-success">Add Item</button>
        <button onClick={()=>{history.push("/")}} className="btn btn-warning mx-1">Submit</button>
      </div>
      <ToDoList/>
    </div>
  );
}

export default TaskInput;

