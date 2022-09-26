
import React from "react";
import './App.css';
import Header from "./Header"
import Body from "./Body"


function App() {
  const [user, setUser] = React.useState("Joe")

  return(
    <main>
      <Header user = {user} />
      <Body user = {user} />
    </main>
  )

}



export default App;
