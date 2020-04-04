// Lib imports
import React, { Component } from 'react';

/**
 * Login
 *
 * @class Login
 * @extends {Component}
 */
class Login extends Component {

    
    /**
     * Creates an instance of Login.
     * 
     * @param {Array} props
     * @memberof Login
     */
    constructor(props) {
        
        super(props);
        
        // Bind Methods
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }



    onFormSubmit(event) {

        event.preventDefault();

    }
  
    
    /**
     * Render the frontend
     *
     * @returns
     * @memberof Login
     */
    render() {
        return (   
            <main className="page page--middle page--user-login">
                <div className="page__content page__content--middle page__content--center">
                    
                    <h2 className="logo">Card<span>tracker</span></h2>

                    <form className="form form--login" onSubmit={this.onFormSubmit}>

                        <div className="grid">

                            <div className="grid__item 1/1">
                                <input type="text" name="user" placeholder="Username/E-mail" className="input input--dark" />
                            </div>

                            <div className="grid__item 1/1">
                                <input type="password" name="password" placeholder="Password" className="input input--dark" />
                            </div>

                            <div className="grid__item 1/1">
                                <button className="btn btn--primary" type="submit">Login</button>
                            </div>

                        </div>

                    </form>

                </div>
            </main>
        );
    }

}

export default Login;
