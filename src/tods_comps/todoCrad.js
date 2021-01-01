
import React from 'react';
import "../css_comps/todos.css"
import ToDoItem from './toDoItem';
function TodoCard(props) {
    // console.log("props.cardTodo->",props.cardTodo);
    return (
        <div className="border-0 mt-4">
            <div className="row p-3  mb-2 list">
                <ToDoItem key={props.cardTodo._id} indexCard={props.indexCard} cardTodo={props.cardTodo} todosList={props.todosList}></ToDoItem>
            </div>
        </div>
    )
}

export default TodoCard
