import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

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

    </div>
  );
}

export default App;
