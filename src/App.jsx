import { useState } from 'react'
import { ButtonStyled, ContainerStyled, FormStyled, InputStyled, TitleStyled } from './components/FormStyled/FormStyled'
import Wrapper from './components/Wrapper/Wrapper';

import { ButtonDeleteAllStyled, ButtonDeleteStyled, TaskContainerStyled, TasksContainerStyled } from './components/TasksContainer/TasksContainer';
import './index.css';
import { WrapperApp } from './components/WrapperApp/WrapperApp';

function App() {

  // Le pedi ayuda a chatGTP para resolver este ejercicio
  const [task, setTask] = useState(""); // Estado para almacenar el valor del input
  const [tasks, setTasks] = useState([])

  /* // Tareas de prueba para ver como iba quedando los estilos
  let tasks = [
    'Tarea 1', 'Tarea 2', 'Tarea 3',
    'Tarea 4', 'Tarea 5', 'Tarea 6',
    'Tarea 7', 'Tarea 8', 'Tarea 9',
    'Tarea 10', 'Tarea 11', 'Tarea 12'
  ];
  */


  const handleInputChange = (event) => {
    setTask(event.target.value); // Actualiza el estado con el valor del input
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (task.trim() === "") return;
    console.log('Agregando tarea');
    setTasks([...tasks, task]); // Agrega la tarea a la lista
    setTask(""); // Limpia el input después de agregar la tarea
  }

  const deleteTask = (index) => {
    console.log('Borrando tarea');
    setTasks(tasks.filter((task, i) => i !== index));
  }

  const deleteAllTasks = () => {
    setTasks([]);
  }

  return (
    <Wrapper>
      <WrapperApp>
        <FormStyled onSubmit={handleAddTask}>
          <TitleStyled>Nuctasks</TitleStyled>
          <ContainerStyled>
            <InputStyled 
              type="text" 
              placeholder="¿Que desea agregar?" 
              value={task} // Controla el input con el estado
              onChange={handleInputChange} // Captura el valor del input
            />
            <ButtonStyled type='submit' onClick={handleAddTask}>Agregar</ButtonStyled>
          </ContainerStyled>
        </FormStyled>
        <TasksContainerStyled>
          {
            tasks.map((task, index) => {
              return (
                <TaskContainerStyled key={index}>
                  <p>{task}</p>
                  <ButtonDeleteStyled onClick={()=>deleteTask(index)}>Borrar</ButtonDeleteStyled>
                </TaskContainerStyled>
              )
            })
          }
  
          {
            tasks.length > 0 &&
            <ButtonDeleteAllStyled onClick={deleteAllTasks}>Borrar todas las tareas</ButtonDeleteAllStyled>
          }
        </TasksContainerStyled>
      </WrapperApp>
    </Wrapper>
  )
}

export default App
