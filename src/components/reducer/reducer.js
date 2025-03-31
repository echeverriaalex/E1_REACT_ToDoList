//import { useContext } from 'react';
//import { ToDoContext } from '../../context/context';
import { TYPES } from '../ActionTypes/actionTypes'

export const initialList = {
  toDoList: []
}

export const reducer = (state, action) => {
  //const { toDoList, setToDoList } = useContext(ToDoContext);

  switch (action.type) {
    case TYPES.ADD_TASK:
      return {
        ...state,
        toDoList: [...state.toDoList, action.payload],
      }
    case TYPES.DELETE_TASK:
      return {
        ...state,
        toDoList: state.toDoList.filter(task => task.id !== action.payload)
      }
    case TYPES.DELETE_ALL_TASKS:
      return {
        ...state,
        toDoList: []
      }
    default:
      return state
  }
}