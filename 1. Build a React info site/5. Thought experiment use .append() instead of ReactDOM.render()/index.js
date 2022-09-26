//ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

//const h1 = document.createElement("h1")
//h1.textContent="This is imperative way to Program"
//h1.className = "header"
//document.getElementById("root").append(h1)

//import React from "react"
//import ReactDom from "react-dom"


const page =(
    <div>
        <ul>
            <li>About</li>
            <li>Contect</li>
            <li>Info</li>
        </ul>
    </div>
)
//document.getElementById("root").append(JSON.stringify(page))
ReactDOM.render(page,document.getElementById("root"))