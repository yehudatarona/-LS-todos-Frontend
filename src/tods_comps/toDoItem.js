import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import "../css_comps/todos.css"
import Moment from 'moment';
function ToDoItem(props) {
  let userInput = useRef(null);
  let dateFormat = Moment(new Date()).format('DD/MM/YYYY');
  let [item,setItem] = useState(props.item.items)

  useEffect (()=>{
    setItem(props.item.items)
  },[props.item.items.length])

  let dispatch = useDispatch();
  const addTask = () => {
    let tempItem = {
      id_card: props.item.id,
      id: Math.random((300 * 39)*10).toFixed(2),
      item_name: userInput.current.value,
      created_at: dateFormat,
      completed: false
    }

   dispatch({ type: "addItem", ItemBody: tempItem })
    console.log("item123->",item);
    setItem([])
  }

  const checkedItem=(val)=>{
    console.log("item",item);
   console.log("val =>",val);
   console.log("item[val].completed->",!item[val].completed);
   item[val].completed = !item[val].completed;
   let obj={
     item:item,
     idCard:props.index
   }
   dispatch({ type: "changeCompleted", itemChack:  obj })
   //setItem(item);
    
  }


    // const delTask = (_id) => {
    //   let temp = userDate.filter(item => item.id !== _id)
    //   setUserDate(temp);
    //   saveTolocal(temp)
    // }

    return (
      <div className="p-2 ">
        <h1 className="display-4 text-center text-white" >{props.item.todo_name}</h1>
        <div className="d-flex align-items-center justify-content-center">
          <input ref={userInput} type="text" className="form-control  border border-info" placeholder="I have to..." />
          <button onClick={addTask} className="btn btn-info">Add</button>
        </div>
        {item.map((val, i) => {
          return (
            <div key={i} className="d-flex justify-content-between align-items-center p-2 mt-1 items ">
              <div>
                <input id={val.id} type="checkbox" name="isDone" onClick={()=>{
                  checkedItem(i)
                }} className="mr-1" checked={val.completed} />
                <label htmlFor={val.id}>{val.item_name}</label>
              </div>
              <div>{val.created_at}</div>
              {/* <div> */}
              <button onClick={() => { alert(val.id) }} className="btn btn-outline-secondary">X</button>
              {/* </div> */}
            </div>)

        })}
      </div>
    )
  }

  export default ToDoItem

