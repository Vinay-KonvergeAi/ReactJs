
import React from "react";
import './App.css';

function App() {

  const [isGoingOut, set] = React.useState(true)

      /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

  function changeMind(){
    set(prevState => !prevState)
    //alternate code
    //set(prevState => prevState ? false : true)
  }

  return (
    <div className="state">
        <h1 className="state--title">Do I feel like going out tonight?</h1>
        <div onClick={changeMind} className="state--value">
            <h1>{isGoingOut ? "Yes":"NO"}</h1>
        </div>
    </div>
);
}

export default App;
