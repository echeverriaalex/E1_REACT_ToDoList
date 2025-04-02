//import { useContext } from "react";
//import { ToDoContext } from "../../context/context";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../redux/taskSlice/taskSlice.js";
import { ButtonDeleteStyled, TaskContainerStyled, TaskListContainerStyled } from "./TaskListContainerStyled";

export const TaskListContainer = () => {
    const toDoList = useSelector((state) => state.toDoList);
    const dispatch = useDispatch(); // dispatch para enviar acciones al store
    //const { toDoList, setToDoList } = useContext(ToDoContext)  // importo el context y su state

    /*
    const deleteTask = (index) => {
        console.log('Borrando tarea');
        //setTasks(tasks.filter((task, i) => i !== index));
        //setToDoList(toDoList.filter((task, i) => i !== index)); // parametro task lo dejo porque es obligatorio para filter porque el segundo parametro siempre es index
    }
    */

    return (
        <TaskListContainerStyled>
            {
                toDoList.map((task, index) => {
                return(
                    <TaskContainerStyled key={index}>
                        <p>{task}</p>
                        <ButtonDeleteStyled onClick={()=> dispatch(deleteTask(task))}>Borrar</ButtonDeleteStyled>
                    </TaskContainerStyled>
                    )
                })
            }
        </TaskListContainerStyled>
    )
}