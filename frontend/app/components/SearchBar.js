// Lib imports
import React from 'react';

/** 
 * Header Immutable Component
 * @todo - Add advanced search markup / styling and functionality.
 */
const Header = () => {

    return (
        <section className="search-bar">

            <label className="search-bar__wrap input--dark input--search" htmlFor="search-input">
                <input type="text" className="search-bar__input" name="search-input" />
                <button className="search-bar__search"><i className="fas fa-search"></i></button>
                <div className="search-bar__dropdown"></div>
            </label>

            <div className="search-bar__advanced">
                <small>Advanced Search</small>

                {/* Advanced Search */}         

            </div>

        </section>
    );

}

export default Header;
