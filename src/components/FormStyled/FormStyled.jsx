import styled from "styled-components";
import { useState } from 'react'
//import { ToDoContext } from "../../context/context";
//import { initialList, reducer } from "../reducer/reducer";
//import { TYPES } from '../ActionTypes/actionTypes'
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/taskSlice/taskSlice";

export const FormStyled = styled.form`
    /*border: 1px solid #000;*/
    width: 100%;
    padding: 10px;
`;

export const TitleStyled = styled.h2`
    text-align: center;
`;

export const ContainerStyled = styled.div`
    display: flex;
    gap: 5px;
    width: 100%;
`;

export const InputStyled = styled.input`
    padding: 5px;
    border-radius: 5px;
    width: 100%;
    border: 1px solid#c4c4c4;
`;

export const MessageError = styled.p`
    margin-top: 5px;
    background: red;
    color: #fff;
    width: 100%;
    padding: 10px 5px;
    border-radius: 5px;
`;

export const ButtonStyled = styled.button`
    border-radius: 5px;
    text-align: center;
    color: white;
    background: #3a83d6;
    padding: 8px 20px;
    border: none;
    cursor: pointer;
`;

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