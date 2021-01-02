import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import "../css_comps/todos.css"
import { doApiGet, doApiPost } from '../services/apiService';
function ToDoItem(props) {

  let userInput = useRef(null);
  let items = props.cardTodo.items
  let dispatch = useDispatch();

  const addTask = async () => {
    if (userInput.current.value === "") {
      alert("Please item name");
    }
    else {
      // let url = `http://localhost:3000/todos/${props.cardTodo._id}/addItem/`
      let url = `https://ls-task-todos.herokuapp.com/todos/${props.cardTodo._id}/addItem/`
      let body = {
        item_name: userInput.current.value
      }

      doApiPost(url, body)
        .then(() => {
         
          props.todosList();
        })
      userInput.current.value = "";

    }
  }

  const checkedItem = (_val, _itemIndex) => {
    // let url = `http://localhost:3000/todos/${props.cardTodo._id}/updateStatus/${props.cardTodo.items[_itemIndex]._id}`;
    let url = `https://ls-task-todos.herokuapp.com/todos/${props.cardTodo._id}/updateStatus/${props.cardTodo.items[_itemIndex]._id}`;
    let body = {
      completed: !_val
    }
    doApiPost(url, body)
      .then(()=> {
        
        props.todosList();

      })

  }

  const deleteItem = (_itemIndex) => {
    let url = `https://ls-task-todos.herokuapp.com/todos/${props.cardTodo._id}/deleteItem/${props.cardTodo.items[_itemIndex]._id}`;
    doApiPost(url)
      .then(() => {
        
        props.todosList();

      })
  }

  const deleteTodoCard = () => {
    let url = `https://ls-task-todos.herokuapp.com/todos/deleteTodo/${props.cardTodo._id}`;

    doApiPost(url)
      .then(() => {
        props.todosList();

      })
  }

  return (
    <div className="p-2 ">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="display-4 text-center" >{props.cardTodo.todo_name}</h1>
        <span onClick={deleteTodoCard} className="delTodoCard">X</span>
      </div>

      <div className="d-flex align-items-center justify-content-center inputItem">
        <input ref={userInput} type="text" className="form-control  border border-info " placeholder="I have to..." />
        <button onClick={addTask} className="btn btn-info">Add</button>
      </div>
      {items.map((val, itemIndex) => {
        return (
          <div key={itemIndex} className="d-flex justify-content-between align-items-center p-2 mt-1 items ">
            <div>
              <input id={val.id} type="checkbox" name="isDone" onChange={() => {
                checkedItem(val.completed, itemIndex)
              }} className="mr-1" checked={val.completed} />
              <label htmlFor={val.id}>{val.item_name}</label>
            </div>
            <div>{val.created_at}</div>
            <button onClick={() => { deleteItem(itemIndex) }} className="btn btn-secondary text-danger">X</button>
          </div>)
      })}
    </div>
  )
}

export default ToDoItem

