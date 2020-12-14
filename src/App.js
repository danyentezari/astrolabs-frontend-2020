import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar';
import Button from './Button';
import Jumbotron from './Jumbtotron';


function App() {
  return (
    <div className="App">

      <NavBar extraComponent={
          <div className="d-flex">
              <input className="form-control me-2" type="search" 
              placeholder="Search" aria-label="Search" />

              <button className="btn btn-outline-success" 
              type="submit">Search</button>
          </div>
        }>
        <Button className="btn btn-primary">Home</Button>
        <Button className="btn btn-primary">About</Button>
        <Button className="btn btn-primary">Contact</Button>
      </NavBar>

      <Jumbotron 
        title="Welcome to the App"
        lead="This is our new app!"
        description="In this app you are able to do this and that"
        buttonLabel="Learn More"
      />

      <NavBar className="fixed-bottom"/>

    </div>
  );
}

export default App;
