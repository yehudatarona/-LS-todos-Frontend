import React, { useEffect, useRef, useState } from "react";
import Moment from 'moment';
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import ToDoItem from "./toDoItem";
function CardItem(props) {
  let userInput = useRef(null);
  let history = useHistory();

  let carditem = useSelector((myStore) => myStore.todosList_ar)
  let [temp_ar, setTemp_ar] = useState([]);
  useEffect(() => {
              let val = carditem.filter(item => { return item.id == props.idItem })
              setTemp_ar(val)
             console.log("val->",val);
    // if (props.match) {
    //   if (props.match.params.id_item) {
    //     console.log("carditem", carditem);
    //     console.log(props.match.params.id_item);
    //     if (carditem) {
    //       let val = carditem.filter(item => { return item.id == props.match.params.id_item })
    //       console.log("val->",val);
    //       setTemp_ar(val)
    //     }

    //   }

    // }

  }, [])

  const addTask = () => {
    // dispatch({ type: "addCounterId" });
    // // alert(userInput.current.value);
    // let bodyData = {
    //   id: counterId,
    //   task_name: "todos shopping list",
    //   name: userInput.current.value,
    //   items: [{test:"123"}],
    //   created_at: dateFormat,
    //   updated_at:dateFormat
    // }
    // dispatch({ type: "addTask", taskItem:bodyData})
    // userInput.current.value="";
  }

  return (
    <div className="d-flex align-items-center justify-content-center">
      {/* <h1 className="display-4 mx-5" style={{ color: "turquoise" }}>Add an item to todo list </h1>
      <div className="d-flex align-items-center justify-content-center">
        <input ref={userInput} type="text" className="form-control w-25 border border-info" placeholder="I have to..." />
        <button onClick={addTask} className="btn btn-success">Add Item</button>
        <button onClick={()=>{history.push("/")}} className="btn btn-warning mx-1">Submit</button>
      </div> */}
      {/* {temp_ar.map((item, index) => {
        return (<ToDoItem key={index} item={item}></ToDoItem>)
      })} */}

    </div>
  );
}

export default CardItem;

