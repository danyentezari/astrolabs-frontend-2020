import logo from './logo.svg';
import './App.css';


function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <div className="d-flex">
          <input className="form-control me-2" type="search" 
          placeholder="Search" aria-label="Search" />

          <button className="btn btn-outline-success" 
          type="submit">Search</button>
        </div>
      </div>
    </nav>
  )
}

function Button() {
  return(
    <button type="button" className="btn btn-success">Success</button>
  )
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Button />
    </div>
  );
}

export default App;
