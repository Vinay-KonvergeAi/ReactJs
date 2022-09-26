//import logo from './logo.svg';
import './App.css';
import Header from "./Header"


function MainContent(){
  return (
    <div>
      <h1>Reasons Why React is Useful</h1>
      <ol>
        <li>Reason 1 2 3 4 5</li>
        <li>Reason 1 2 3 4 5</li>
        <li>Reason 1 2 3 4 5</li>
        <li>Reason 1 2 3 4 5</li>
        <li>Reason 1 2 3 4 5</li>
      </ol>
    </div>
  )
}
function Footer(){
  return (
    <footer>
        <small>"© 20xx Meshram development. All rights reserved."</small>
      
    </footer>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
      
    </div>
    )
}

export default App;
