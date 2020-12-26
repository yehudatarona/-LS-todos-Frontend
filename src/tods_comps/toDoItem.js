import React from 'react';
function ToDoItem(props) {
  let item = props.item;

  return (
    <div className="d-flex justify-content-between col-lg-7">
      <div className="">
        <input id={item.id} type="checkbox" name="isDone" className="mr-1" />
        <label htmlFor={item.id}>{item.name}</label>
      </div>
      <div>{item.date}</div>
    </div>
  )
}

export default ToDoItem
