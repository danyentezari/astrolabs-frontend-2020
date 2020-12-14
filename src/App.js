import logo from './logo.svg';
import './App.css';

function NavBar(props) {
  return (
    <nav className={`navbar navbar-dark bg-dark ${props.className}`}>
      <div className="container-fluid">

        <a className="navbar-brand">Navbar</a>

        <div className="d-flex flex-grow-1">
          {props.children}
        </div>
        
        {props.extraComponent}
      </div>
    </nav>
  )
}

function Button(props) {
  return(
  <button type="button" className={props.className}>{props.children}</button>
  )
}

function Jumbotron(props) {
  return(
    <div className="jumbotron">
      <h1 className="display-4">{props.title}</h1>
      <p className="lead">{props.lead}</p>
      <hr className="my-4" />
      <p>{props.description}</p>
      <a className="btn btn-primary btn-lg" 
      href="#" role="button">{props.buttonLabel}</a>
    </div>
  )
}

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
