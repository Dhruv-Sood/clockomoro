import {useState , useContext, createContext} from "react"

const DarkModeContext = createContext()

const DarkModeProvider = ({children}) => {
    const [darkMode , setDarkMode] = useState(false)

    return (
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    );
}

export {DarkModeContext , DarkModeProvider}