import useTheme from "./setTheme";
import './theme.css';
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  //state to manage theme
  const[theme, setTheme] = useTheme('theme', "light");

  const handleToggleTheme = () =>{
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
    
  }
  return (
    <div className="lightdark-mode" data-theme={theme}>      
    <div className="lightdark-container">
      <h2>Hello World! &nbsp;
       {theme === "light" ? 
        ( <FaMoon size={24}  onClick={handleToggleTheme} className="icon" /> )
       :( <FaSun size={24}   onClick={handleToggleTheme} className="icon" /> )}
       </h2>
      <button onClick={handleToggleTheme}>Change Theme</button>     
      
    </div>
  </div>
  )
}

export default ThemeToggle;