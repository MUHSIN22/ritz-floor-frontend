import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const [isChecked, setChecked] = useState(false)

    // Function to set user on login
    const login = user => {
        setUser(user);
        setChecked(true);
    }

    // Function to reset user on logout
    const logout = () => {
        let isConfirmed = window.confirm("Are you sure to logout?");
        if(isConfirmed){
            sessionStorage.clear();
            setUser(false);
            navigate('/');
        }
    }

    return <AuthContext.Provider value={{isChecked,user,login,logout}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}