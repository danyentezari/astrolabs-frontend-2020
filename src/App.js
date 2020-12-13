import logo from './logo.svg';
import './App.css';

function NavBar(prop) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>

        <div className="d-flex flex-grow-1">
          {prop.children}
        </div>
        
        {prop.extraComponent}
      </div>
    </nav>
  )
}


function Button(prop) {
  return(
  <button type="button" className="btn btn-primary">{prop.children}</button>
  )
}

function App() {
  return (
    <div className="App">
  
      <NavBar extraComponent={
        <div className="d-flex">
          <div>
            <input className="form-control me-2" type="search" 
            placeholder="Search" aria-label="Search" />

            <button className="btn btn-outline-success" 
            type="submit">Search</button>
          </div>
          </div>
      }>
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </NavBar>

      <div style={{'height': 'calc(100vh - 160px)'}}></div>

      <NavBar>
        Legal
        <ul>
          <li><a href="">Terms &amp; Conditions</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Return Policy</a></li>
        </ul>

        About
        <ul>
          <li><a href="">Our Company</a></li>
          <li><a href="">Our History</a></li>
        </ul>
      </NavBar>
  
    </div>
  );
}




export default App;
