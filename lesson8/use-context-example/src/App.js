import React from "react";
import FunctionalComponent from "./components/functionalComponent/FunctionalComponent";
import ClassComponent from "./components/classComponent/ClassComponent";

// 1.
export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = React.useState(true);

  const switchTheme = () => setDarkTheme(!darkTheme);

  return (
    <>
      {/* 2 */}
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={switchTheme}>Switch color theme</button>
        <FunctionalComponent />
        <ClassComponent />
      </ThemeContext.Provider>
    </>
  );
}
