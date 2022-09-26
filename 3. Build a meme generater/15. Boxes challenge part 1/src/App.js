
import React from "react"
import "./App.css"
import boxes from "./boxes"

function App() {
  const [squares, setSquares] = React.useState(boxes)
  
  const squareElements = squares.map(square => (
      <div className="box" key={square.id}></div>
  ))
  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from boxes.js
   * 2. Map over that state array and display each one
   *    as an empty square (black border, transparent bg color)
   *    (Don't worry about using the "on" property yet)
   */
  return (
      <main>
          {squareElements}
      </main>
  )
}



export default App;
