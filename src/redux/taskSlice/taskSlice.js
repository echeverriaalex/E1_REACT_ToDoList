import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toDoList: []
}

export const taskSlice = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      return{
        ...state,
        toDoList: [...state.toDoList, action.payload] // Como lo habia hecho el profe en clase y no me salio anteriormente
      }
    },
    deleteTask: (state, action) => {
      return {
        //state.toDoList = state.toDoList.filter(task => task.id !== action.payload);
        ...state,
        toDoList: state.toDoList.filter(task => task !== action.payload)
      }
    },
    deleteAllTasks: () => {
      return initialState // Vuelvo al estado inicial, que es un array vacio
    }
  }
})

export const { addTask, deleteTask, deleteAllTasks } = taskSlice.actions;
export default taskSlice.reducer; // exporto el reducer para usarlo en el store