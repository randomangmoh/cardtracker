// Lib imports
import React, { Component } from 'react';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';


/**
 * Main app class for the store wrapper,
 * this is the entry point to our application.
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {

    
    /**
     * Creates an instance of App.
     * 
     * @param {Array} props
     * @memberof App
     */
    constructor(props) {
        super(props);
    }
  
    /**
     * Render the frontend
     *
     * @returns
     * @memberof App
     */
    render() {
        return (    
           <Login />
        )
    }

}

export default App;
