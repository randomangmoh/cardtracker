// Lib imports
import React, { Component } from 'react';

// Components
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

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
                
                <section className="page__content">
                    
                    <SearchBar />

                    <section className="tiles">

                            <div className="tile tile--active">
                                <div className="tile__inner">
                                    <div className="tile__content">
                                        <span className="tile__title">Your Collection</span>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="tile">
                                <div className="tile__inner">
                                    <div className="tile__content">
                                        <span className="tile__title">Database</span>
                                    </div>
                                </div>
                            </div>

                            <div className="tile">
                                <div className="tile__inner">
                                    <div className="tile__content">
                                        <span className="tile__title">Latest Expansion</span>
                                    </div>
                                </div>
                            </div>

                            <div className="tile">
                                <div className="tile__inner">
                                    <div className="tile__content">
                                        <span className="tile__title">The Marketplace</span>
                                    </div>
                                </div>
                            </div>

                            <div className="tile">
                                <div className="tile__inner">
                                    <div className="tile__content">
                                        <span className="tile__title">New Releases</span>
                                    </div>
                                </div>
                            </div>

                            <div className="tile">
                                <div className="tile__inner">
                                    <div className="tile__content">
                                        <span className="tile__title">More</span>
                                    </div>
                                </div>
                            </div>

                    </section>

                </section>
            </main>
        );
    }

}

export default Home;
