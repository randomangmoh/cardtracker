// Lib imports
import React, { Component } from 'react';

// Components
import Header from '../components/Header';

/**
 * Homepage
 *
 * @class Home
 * @extends {Component}
 */
class Home extends Component {

    
    /**
     * Creates an instance of Home.
     * 
     * @param {Array} props
     * @memberof Home
     */
    constructor(props) {
        super(props);
    }
  
    
    /**
     * Render the frontend
     *
     * @returns
     * @memberof Home
     */
    render() {
        return (   
            <main className="page page--user-home">
                <Header />
                <div>Home</div>
            </main>
        );
    }

}

export default Home;
