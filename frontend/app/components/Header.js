// Lib imports
import React from 'react';

/** 
 * Header Immutable Component
 * @todo - add nav menu and functionality.
 */
const Header = () => {

    return (
        <header className="header">
            <nav className="header__nav grid">
                <div className="grid__item 2/3">
                    <h2 className="logo logo--small">Card<span>tracker</span></h2>
                </div>
                <div className="grid__item 1/3">
                    <div className="header__navToggle">
                        <i className="fal fa-bars"></i>
                    </div>
                </div>
            </nav>
        </header>
    );

}

export default Header;
