//import { useContext } from 'react';
//import { ToDoContext } from '../../context/context';
import { TYPES } from '../ActionTypes/actionTypes'

export const initialList = {
  toDoList: [],
  //toDoList: JSON.parse(localStorage.getItem('toDoList')) || []
}

export const reducer = (state, action) => {
  let newList;
  switch (action.type) {
    case TYPES.ADD_TASK:
      //newList = [...state.toDoList, action.payload];
      //localStorage.setItem('toDoList', JSON.stringify(newList));
      return {
        ...state,
        toDoList: newList
      }
    case TYPES.DELETE_TASK:
      //newList = state.toDoList.filter(task => task !== action.payload);
      //localStorage.setItem('toDoList', JSON.stringify(newList));
      return {
        ...state,
        toDoList: newList
      }
    case TYPES.DELETE_ALL_TASKS:
      //localStorage.setItem('toDoList', JSON.stringify([]));
      return {
        ...state,
        toDoList: []
      }
    default:
      return state
  }
}