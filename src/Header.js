import React from 'react'

function Header() {
    return (
        <div>
            <div className="header">
                <img 
                className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </div>
            <div className="header__search">
                <input className="header_searchInput" type="text" />
                {/* logo */}
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className='header__optionLineOne'>Hello Guest</span>        
                    <span className='header__optionLineTwo'>Sign In</span>        
                </div>
                <div className="header__option">

                </div>
                <div className="header__option">

                </div>
            </div>
        </div>
    )
}

export default Header
