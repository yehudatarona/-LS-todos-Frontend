
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "../css_comps/todos.css"
import CardItem from './cardItem';
import ToDoItem from './toDoItem';
function TodoCard(props) {
    console.log("props.item->",props.item);

    return (
        <div className=" d-flex align-items-center justify-content-center border-0 mt-4">
            <div className="row p-3  mb-2 list">
                {/* <div className="d-flex align-items-center justify-content-center"> */}
                <ToDoItem key={props.item.id} index={props.index} item={props.item}></ToDoItem>
                {/* </div> */}
            </div>
        </div>
    )
}

export default TodoCard




// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import "../css_comps/todos.css"
// import CardItem from './cardItem';
// function TodoCard(props) {
//     let history = useHistory();
//     // let card = useSelector((myStore) => myStore.card)

//     const itemsPage = () => {
//        // history.push(`/addItems/${props.item.id}`)
//     }
//     // console.log("card",card);
//     return (
//         <div  className=" d-flex align-items-center justify-content-center">
//             <div onClick={itemsPage} className="row p-3  mb-2 list">
//                 {/* {props.item.todo_name} */}
//                 <CardItem idItem={props.item.id}/>
//             </div>
//         </div>
//     )
// }

// export default TodoCard


