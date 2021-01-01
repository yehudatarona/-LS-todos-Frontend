
const initState = {
  todosList_ar: []
}

export const toDoReducer = (state = initState, action) => {
 if (action.type === "updateList") {
    return { ...state, todosList_ar: action.data }
  }
  else {
    return state;
  }
}