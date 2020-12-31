// import Moment from 'moment';
// let dateFormat = Moment(new Date()).format('DD/MM/YYYY');
const initState = {
  item: {
    id: Math.random((300 * 39)*10).toFixed(2),
    item_name: "homework",
    created_at: "26/12/2020",
    completed: false,
  },
  card: {
    id: 1,
    todo_name: "todos shopping list",
    items: [
      {
        id: Math.random(300 * 39).toFixed(2),
        item_name: "homework",
        created_at: "26/12/2020",
        completed: false,
      },
      {
        id: Math.random(300 * 39).toFixed(2),
        item_name: "googo ",
        created_at: "26/12/2020",
        completed: false,
      }],
    created_at: "26/12/2020",
    updated_at: "27/12/2020"
  },
  todosList_ar: [
    {
      id: 1,
      todo_name: "todos shopping list",
      items: [
        {
          id: Math.random(300 * 39).toFixed(2),
          item_name: "homework",
          created_at: "26/12/2020",
          completed: false,
        },
        {
          id: Math.random(300 * 39).toFixed(2),
          item_name: "googo ",
          created_at: "26/12/2020",
          completed: true,
        }],
      created_at: "26/12/2020",
      updated_at: "27/12/2020"
    },
    {
      id: 2,
      todo_name: "buy cars",
      items: [
        {
          id: Math.random(300 * 39).toFixed(2),
          item_name: "go to trip arond the world",
          created_at: "26/12/2020",
          completed: Boolean,
        },
        {
          id: Math.random(300 * 39).toFixed(2),
          item_name: "lensting to music list",
          created_at: "26/12/2020",
          completed: Boolean(false),
        }],
      created_at: "26/12/2020",
      updated_at: "27/12/2020"
    }
  ],
  counterId: 3
}

// let carditem = useSelector((myStore) => myStore.todosList_ar)
export const toDoReducer = (state = initState, action) => {
  if (action.type === "addTodoCrad") {
    // let temp_ar = state.todosList_ar;
    let temp_ar = [...state.todosList_ar];
    temp_ar.push(action.todoCrad);
    state.counterId++;
    return { ...state, todosList_ar: temp_ar }
  }
  else if (action.type === "addItem") {
   // debugger
    let index;
    let tempCard = state.todosList_ar.filter((item,i) => {
      if(item.id === action.ItemBody.id_card){
        index=i
        return item;
      }
     
    });
    let itemObj = {
      id: action.ItemBody.id,
      item_name: action.ItemBody.item_name,
      created_at: action.ItemBody.created_at,
      completed: action.ItemBody.created_at
    }
    console.log(state.todosList_ar);
    // let tempList = state.todosList_ar;
    let tempList = [...state.todosList_ar];
    //debugger
    
    tempList[index].items.push(itemObj)
    console.log("tempList->",tempList);
    return { ...state, todosList_ar: tempList }
  
    }

    else if(action.type === "delTask"){
      let temp_ar = [...state.todosList_ar];
      temp_ar.map(card=>{
        if(card.id == action.itemDelete.idCard){
          let deleteOneItem = card.items.filter(item=>{
            return item.id != action.itemDelete.itemId;
          })
        }
      })
       
      return {...state , todosList_ar:temp_ar}
    }


    else if (action.type === "changeCompleted") {
      let temp_ar = [...state.todosList_ar];
      temp_ar[action.itemChack.id_card] = action.itemChack.item
      return { ...state, todosList_ar: temp_ar }
    }
  
  else {
    return state;
  }
}