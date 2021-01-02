import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "../css_comps/todos.css";
import { doApiGet, doApiPost } from '../services/apiService';
function TodoTitle(props) {

  let todoName = useRef(null);
  let history = useHistory();
  let dispatch = useDispatch()

  const addTodo = () => {
    if (todoName.current.value === "") {
      alert("Please enter todo name");
    }
    else {
      // let url = `http://localhost:3000/todos/createTodo`;
      let url = `https://ls-task-todos.herokuapp.com/todos/createTodo`;
      let body = {
        todo_name: todoName.current.value

      }
      doApiPost(url, body)
        .then(data => {
          let url = "https://ls-task-todos.herokuapp.com/todos";
          doApiGet(url)
            .then(data => {
              console.log("data for DB", data);
              dispatch({ type: "updateList", data: data })
              todoName.current.value = "";
              history.push("/");
            });
        })
    }
  }

  return (
    <div className="container text-center">
      <h1 className="display-4 text-info mt-5" >Named your todo note title</h1>
      <div className="d-flex align-items-center justify-content-center mt-4 todoTitle">
        <input ref={todoName} type="text" className="form-control w-50 p-4 border border-info todoTitle" placeholder="Please enter todo name..." />
        <button onClick={addTodo} className="btn-lg btn-primary">Apply</button>
      </div>
    </div>
  )
}

export default TodoTitle
