
import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./components/data"

function App() {
  const cards= data.map(item =>{
    return <Card
      key={item.id}
      item={item}
      //{...item} aternative for line 12 , however all cut all the item words in Card.js
    />
  })
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;


