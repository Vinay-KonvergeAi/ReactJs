
import './App.css';

function App() {
  function handleClick(){
    console.log("I was cilcked!")
  }
  
  function handleOnMouseOver(){
    console.log("Mouse Over")
  }
  
  return (
    <div className="container">
      <img 
        src="https://wallpaperaccess.com/full/143728.jpg" alt="" 
        onMouseOver={handleOnMouseOver}
      />
      <button onClick={handleClick} >Click me</button>
    </div>
  );
}

export default App;
