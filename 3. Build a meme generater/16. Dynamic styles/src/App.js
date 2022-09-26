
import React from "react"
import "./App.css"
import boxes from "./boxes"

function App(props) {
  const [squares, setSquares] = React.useState(boxes)
  
  const styles = {
      backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  }
  
  const squareElements = squares.map(square => (
      <div style={styles} className="box" key={square.id}></div>
  ))
  return (
      <main>
          {squareElements}
      </main>
  )
}



export default App;
