import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
function TodoTitle(props){
  let todoName = useRef(null);
  let history =useHistory();
  const addTodo =()=>{
    alert(todoName.current.value)
    history.push("/addItems/");
  }
  return(
    <div className="container text-center">  
    <h1 className="display-3 mb-3" >named todo title</h1>
     <div className="d-flex align-items-center justify-content-center">
        <input ref={todoName} type="text" className="form-control w-25 border border-info" placeholder="enter todo name..." />
        <button onClick={addTodo} className="btn btn-primary">Apply</button>
      </div>
    </div> 
  )
}

export default TodoTitle
