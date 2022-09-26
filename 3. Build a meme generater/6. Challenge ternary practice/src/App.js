
import React from "react";
import './App.css';

function App() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
    const isGoingOut = true
    
    //let answer = isGoingOut=== true ? "Yes":"No"
  
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{isGoingOut=== true ? "Yes":"No"}</h1>
            </div>
        </div>
    );
}

export default App;
