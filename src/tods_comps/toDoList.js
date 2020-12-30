import React, { useEffect, useState } from 'react';
// import Moment from 'moment';
import ToDoItem from './toDoItem';
import { useSelector } from 'react-redux';
import TodoCard from './todoCrad';
import "../css_comps/todos.css"
// import {useSelector,useDispatch} from 'react-redux'
function ToDoList(props) {
  // let [formatDate, setFormatDtae] = useState(Moment(new Date()).format('DD/MM/YYYY'));
  // let [task_ar, setTask_ar] = useState([
  //   { name: "Do homework", date: formatDate },
  //   { name: "Go to work", date: formatDate }
  // ])
  let todosList_ar = useSelector((myStore)=>myStore.todosList_ar)
  return (
    <div className="mt-4 ">
      <h1 className="display-3 text-center text-primary p-2">Todos Notes</h1>
      <div className="d-flex flex-wrap justify-content-between align-items-center" >
        {/* <div className="col-lg-6"> */}

        {todosList_ar.map((item,index) => {
          return (<TodoCard key={item.id} index={index} item={item}/>)
        })}
        {/* </div> */}
      </div>
    </div>

  )
}

export default ToDoList
