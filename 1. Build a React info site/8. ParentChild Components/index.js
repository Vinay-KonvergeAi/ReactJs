function Header(){
    return <header>
      <nav>
        <img src="./react-logo.png" width="80px"></img>
      </nav>
    </header>
}
function MainContent(){
  return <div>
    <h1>Reasons Why React is Useful</h1>
    <ol>
      <li>Reason 1 2 3 4 5</li>
      <li>Reason 1 2 3 4 5</li>
      <li>Reason 1 2 3 4 5</li>
      <li>Reason 1 2 3 4 5</li>
      <li>Reason 1 2 3 4 5</li>
    </ol>
  </div>
}
function Footer(){
  return <footer>
      <small>"© 20xx Meshram development. All rights reserved."</small>
    
    </footer>
}
function TempNo(){
  return <div>
    <Header/>
    <MainContent/>
    <Footer/>
    
  </div>
}

ReactDOM.render(<TempNo/>,document.getElementById("root"))