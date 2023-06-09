import React from "react";
import FunctionalComponent from "./components/functionalComponent/FunctionalComponent";
import ClassComponent from "./components/classComponent/ClassComponent";

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = React.useState(true);

  const switchTheme = () => setDarkTheme(!darkTheme);

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={switchTheme}>Switch color theme</button>
        <FunctionalComponent />
        <ClassComponent />
      </ThemeContext.Provider>
    </>
  );
}
