import React from 'react';
import {useHistory} from 'react-router-dom';
import './CoverTaco.css';

const CoverTaco = props => {
    const history = useHistory();
    const routeToTacos = event => {
        console.log("Submitting...");
        history.push("/taco-list");
    }    

    return (
        <div>
        <div>
        <h1>Welcome to Random Taco 🌮 </h1>
        <h2>Enter A Taco Paradise ⛵ </h2>
        <img src="https://images.unsplash.com/photo-1564767655658-4e6b365884ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="delicous tacos"></img>
        </div>
        
        <button onClick={routeToTacos}
        className="md-button shop-button">Click For Recipes</button>
        
        </div>
    )
}

export default CoverTaco;