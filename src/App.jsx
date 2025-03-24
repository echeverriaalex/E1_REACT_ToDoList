import { useContext } from 'react'
import { TaskForm } from './components/FormStyled/FormStyled'
import Wrapper from './components/Wrapper/Wrapper';
import { ButtonDeleteAllStyled, TaskListContainer } from './components/TasksContainer/TasksContainer.jsx';
import './index.css';
import { WrapperApp } from './components/WrapperApp/WrapperApp';
import { ToDoContext } from './context/context';

function App() {
  // const [tasks, setTasks] = useState([]) lo comento porque ya uso el context
  const { toDoList, setToDoList } = useContext(ToDoContext);  // importo el context y su state

  const deleteAllTasks = () => {
    //setTasks([]);
    setToDoList([]);
  }

  return (
    <Wrapper>
      <WrapperApp>
        <TaskForm />
        <TaskListContainer />
        {
          toDoList.length > 0 &&
          <ButtonDeleteAllStyled onClick={deleteAllTasks}>Borrar todas las tareas</ButtonDeleteAllStyled>
        }
      </WrapperApp>
    </Wrapper>
  )
}

export default App