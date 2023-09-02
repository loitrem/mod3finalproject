import React, { useState, createContext } from "react";

//create and export global state management
export const AppContext=createContext();

    // create react functional component
    const AppContextProvider = (props) => {

    //sets the userState (creating state)
    const [currentUser,setCurrentUser] = useState(null);


    return (
            //gives state access to entire app
            <AppContext.Provider value={{
                // add the use states to the provider
            currentUser,
            setCurrentUser

            }}> 
            {props.children}
            </AppContext.Provider>
        )
    }
    


export default AppContextProvider