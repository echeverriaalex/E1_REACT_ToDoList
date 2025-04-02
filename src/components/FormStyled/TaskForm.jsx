import { useState } from 'react'
//import { ToDoContext } from "../../context/context";
//import { initialList, reducer } from "../reducer/reducer";
//import { TYPES } from '../ActionTypes/actionTypes'
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/taskSlice/taskSlice";

import { FormStyled, TitleStyled, ContainerStyled, InputStyled, MessageError, ButtonStyled } from "./FormStyled";

export const TaskForm = () => {
    const dispatch = useDispatch(); // dispatch para enviar acciones al store
    const toDoList = useSelector((state) => state.toDoList);
    const [taskError, setTaskError] = useState();
    const [task, setTask] = useState(""); // Estado para almacenar el valor del input
    //const { toDoList, setToDoList } = useContext(ToDoContext);  // importo el context y su state
    //const [state, dispatch] = useReducer(reducer, initialList);

    const handleAddTask = (event) => {
        event.preventDefault();
        if (task.trim() === "") return;
    
        if(!checkTaskExists(task)){
          setTaskError(false);
          //setTasks([...tasks, task]); // Agrega la tarea a la lista
          //setToDoList([...toDoList, task]);
          //dispatch({type: TYPES.ADD_TASK, payload: task});
          dispatch(addTask(task)); // Agrega la tarea al store
          
          localStorage.getItem("toDoList")?
              localStorage.setItem("toDoList", JSON.stringify([...JSON.parse(localStorage.getItem("toDoList")), task]))
            : localStorage.setItem("toDoList", JSON.stringify([...toDoList, task])); // Guarda la lista en el localStorage
          setTask(""); // Limpia el input después de agregar la tarea
        }
        else{
          setTaskError(true);
        }
    }

    const checkTaskExists = (task) =>{
        return toDoList.includes(task);
    }

    const handleInputChange = (event) => {
        let newTask = event.target.value;        
        if(newTask.length < 1 || !checkTaskExists(newTask)){
          setTaskError(false);
        }
        setTask(newTask); // Actualiza el estado con el valor del input
    };

    return(
        <FormStyled>
            <TitleStyled>Nuctasks</TitleStyled>
            <ContainerStyled>
                <InputStyled 
                    type="text" 
                    placeholder="¿Que desea agregar?" 
                    value={task} // Controla el input con el estado
                    onChange={handleInputChange} // Captura el valor del input
                />
                { /* <ButtonStyled type='submit' onClick={handleAddTask}>Agregar</ButtonStyled> */ }
                <ButtonStyled type='submit' onClick={ handleAddTask }>Agregar</ButtonStyled>
            </ContainerStyled>
            {
                taskError && <MessageError>La tarea ya existe</MessageError>
            }
        </FormStyled>
    )
}