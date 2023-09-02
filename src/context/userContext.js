import React, { useState, createContext } from "react";

//create and export global state management
export const AppContext=createContext();

    // create react functional component
    const AppContextProvider = (props) => {

    //sets the userState (creating state)
    const [todo,setTodo] = useState(null);


    return (
            //gives state access to entire app
            <AppContext.Provider value={{
                // add the use states to the provider
            todo,
            setTodo

            }}> 
            {props.children}
            </AppContext.Provider>
        )
    }
    


export default AppContextProvider