'use client'
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    const toggleBurgerMenu = (value)=>{
        setShowBurgerMenu((value));
    }

    const value = {
        showBurgerMenu,
        toggleBurgerMenu
    };

    return (<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>)

}