
import React from "react";
import './App.css';

function App() {
  const thingsArray = ["Thing 1", "Thing 2"]
  const thingsElement = thingsArray.map(thing => <p key={thing} >{thing}</p>)

function addItem(){
  const newThingsArray = `Things ${thingsArray.length + 1}`
  thingsArray.push(newThingsArray)
  console.log(thingsArray)        
} 

  return (
      <div>
          <button
          onClick={addItem}
          >Add Item</button>
          {thingsElement}
      </div>
  );
}

export default App;
