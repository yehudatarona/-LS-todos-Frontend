// import Moment from 'moment';
// let dateFormat = Moment(new Date()).format('DD/MM/YYYY');
const initState ={
    tasks_ar:[
        // { id:1, name: "Do homework", date: dateFormat },
        // { id:2, name: "Go to work", date: dateFormat }
      ],
      counterId:2
}


export const toDoReducer = (state = initState, action) => {
    if(action.type === "addTask"){
      let temp_ar = [...state.tasks_ar];
      temp_ar.push(action.taskItem);
      return {...state , tasks_ar:temp_ar}
    }
    else if(action.type ==="addCounterId"){
        state.counterId++;
        return{...state,counterId:state.counterId++}

    }
  
    else{
      return state;
    }
  }