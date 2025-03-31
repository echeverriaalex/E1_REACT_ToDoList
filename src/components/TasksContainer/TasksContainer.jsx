//import { useContext } from "react";
import styled from "styled-components";
//import { ToDoContext } from "../../context/context";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../redux/taskSlice/taskSlice";

export const TasksContainerStyled = styled.div`
    width: 100%;
    overflow: auto;
    /*background: green;*/
    height: 300px;
`;

export const TaskContainerStyled = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    p{
        /*text-transform: capitalize;*/
    }

    border-bottom: 1px solid#c0c0c0;
`;

export const ButtonDeleteStyled = styled.button`
    border: none;
    background:#eb0a0a;
    color: white;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
`;

export const ButtonDeleteAllStyled = styled(ButtonDeleteStyled)`
    margin-top: 20px;
    width: 100%;
`;

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
        <TasksContainerStyled>
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
        </TasksContainerStyled>
    )
}