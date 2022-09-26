import './App.css';
import React from 'react';
import Navbar from "./component/Navbar"
import Main from "./component/Main"

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  
  return (
      <div className="container">
          <Navbar 
              darkMode={darkMode} 
              toggleDarkMode={toggleDarkMode}
          />
          <Main darkMode={darkMode} />
      </div>
  )
}

export default App;
