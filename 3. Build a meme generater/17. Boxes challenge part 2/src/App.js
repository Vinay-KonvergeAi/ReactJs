
import React from "react"
import "./App.css"
import boxes from "./boxes"
import Box from "./Box"


function App(props) {
  const [squares, setSquares] = React.useState(boxes)
  
  
  const squareElements = squares.map(square => (
      <Box key={square.id} on={square.on} ></Box>
  ))


  return (
      <main>
          {squareElements}
      </main>
  )
}



export default App;
