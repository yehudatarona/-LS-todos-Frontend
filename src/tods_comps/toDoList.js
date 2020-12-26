import React, { useEffect, useState } from 'react';
// import Moment from 'moment';
import ToDoItem from './toDoItem';
import { useSelector } from 'react-redux';
// import {useSelector,useDispatch} from 'react-redux'
function ToDoList(props) {
  // let [formatDate, setFormatDtae] = useState(Moment(new Date()).format('DD/MM/YYYY'));
  // let [task_ar, setTask_ar] = useState([
  //   { name: "Do homework", date: formatDate },
  //   { name: "Go to work", date: formatDate }
  // ])
  let tasks_ar = useSelector((myStore)=>myStore.tasks_ar)
  return (
    <div>
      <h2>Task List 1</h2>
      {/* <h2>{tasks_ar.task_name}</h2> */}
      <div className="row" >
        {tasks_ar.map(item => {
          return (<ToDoItem key={item.id} item={item} />)
        })}
      </div>
    </div>

  )
}

export default ToDoList
