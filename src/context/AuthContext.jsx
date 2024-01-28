import { useEffect, useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvidor = ({children}) => {
    const [currentUser,setcurrentUser] = useState({});

    useEffect(() => {
        // get the current user
    },[]);
    
    return <AuthContext.Provider value={currentUser}>

    </AuthContext.Provider>
}