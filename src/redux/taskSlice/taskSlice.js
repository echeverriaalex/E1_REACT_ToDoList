import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //toDoList: []
    //toDoList: JSON.parse(localStorage.getItem('toDoList')) || []

    toDoList: localStorage.getItem('toDoList')
                ? JSON.parse(localStorage.getItem('toDoList'))
                : []
}

export const taskSlice = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      let newList = [...state.toDoList, action.payload];
      //localStorage.setItem('toDoList', JSON.stringify(newList)); // Lo borro porque agrewga 2 veces el dato que ingreso
      return{
        ...state, 
        toDoList: newList
        //toDoList: [...state.toDoList, action.payload] // Como lo habia hecho el profe en clase y no me salio anteriormente
      }
    },
    deleteTask: (state, action) => {
      let newList = state.toDoList.filter(task => task !== action.payload);
      localStorage.setItem('toDoList', JSON.stringify(newList));
      return {
        //state.toDoList = state.toDoList.filter(task => task.id !== action.payload);
        ...state,
        toDoList: newList
        //toDoList: state.toDoList.filter(task => task !== action.payload)
      }
    },
    deleteAllTasks: () => {
      localStorage.removeItem('toDoList');
      //return initialState // Vuelvo al estado inicial, que es un array vacio
      return {
        toDoList: []
      }
    }
  }
})

export const { addTask, deleteTask, deleteAllTasks } = taskSlice.actions;
export default taskSlice.reducer; // exporto el reducer para usarlo en el store