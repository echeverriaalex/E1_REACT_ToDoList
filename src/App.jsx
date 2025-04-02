//import { useContext, useReducer } from 'react'
import {  TaskForm } from './components/FormStyled/TaskForm';
import Wrapper from './components/Wrapper/Wrapper';
import './index.css';
import { WrapperApp } from './components/WrapperApp/WrapperApp';
//import { ToDoContext } from './context/context';
//import { TYPES } from './components/ActionTypes/actionTypes.js';
//import { initialList, reducer } from './components/reducer/reducer.js';
import { useDispatch, useSelector } from 'react-redux';
//import store from './redux/index.js';
import { deleteAllTasks } from './redux/taskSlice/taskSlice.js';
import { ButtonDeleteAllStyled } from './components/TaskListContainer/TaskListContainerStyled.js';
import { TaskListContainer } from './components/TaskListContainer/TaskListContainer.jsx';

function App() {
  // const [tasks, setTasks] = useState([]) lo comento porque ya uso el context
  //const { toDoList, setToDoList } = useContext(ToDoContext);  // importo el context y su state
  //const [state, dispatch] = useReducer(reducer, initialList);
  //console.log('toDoList desde App.jsx', toDoList);

  /*
  // Esto es cuando usaba useState
  const deleteAllTasks = () => {
    //setTasks([]);
    setToDoList([]);
  }
  */

  //const toDoList = store.getState().task.toDoList; // obtengo el state del store, en este caso el toDoList
  const toDoList = useSelector((state) => state.toDoList); // obtengo el state del store, en este caso el toDoList
  const dispatch = useDispatch(); // dispatch para enviar acciones al store
  //console.log('toDoList desde App.jsx', toDoList); // imprimo el state del store, en este caso el toDoList

  return (
      <Wrapper>
        <WrapperApp>
          <TaskForm />
          <TaskListContainer />
          {
            toDoList.length > 0 &&
            <ButtonDeleteAllStyled 
              // onClick={ () => dispatch({ type: TYPES.DELETE_ALL_TASKS })}
              onClick={ () => dispatch(deleteAllTasks()) }
            >
              Borrar todas las tareas
            </ButtonDeleteAllStyled>
          }
        </WrapperApp>
      </Wrapper>
  )
}

export default App