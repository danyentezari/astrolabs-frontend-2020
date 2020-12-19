import React from 'react';
import { Route, Link } from 'react-router-dom';
import NavBar from './NavBar';

const LayoutRoute = (props) => {
    return (

        <div>
            <NavBar extraComponent={
                <div className="d-flex">
                    <input className="form-control me-2" type="search" 
                    placeholder="Search" aria-label="Search" />
    
                    <button className="btn btn-outline-success" 
                    type="submit">Search</button>
                </div>
            }>
            <Link to="/" className="btn btn-primary">Home</Link>
            <Link to="/about" className="btn btn-primary">About</Link>
            <Link to="#" className="btn btn-primary">Contact</Link>
            </NavBar>

            <Route path={props.path} exact={props.exact} component={props.component}
            />

            <NavBar/>

        </div>
    )
}

export default LayoutRoute