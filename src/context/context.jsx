import { createContext, useState } from "react";

export const ToDoContext = createContext();

export const ToDoContextProvider = ({ children }) => {
    
    const [toDoList, setToDoList] = useState(["alex", "nahuel", "echeverria"]);

    return(
        <ToDoContext.Provider value={{toDoList, setToDoList}} >
            {children}
        </ToDoContext.Provider>
    )
}