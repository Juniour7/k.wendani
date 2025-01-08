import React from 'react';

// Components
import NavLg from './NavLg';
import NavSm from './NavSm';

const NavBar = () => {
    return (
        <>
            <div className="lg:hidden">
                <NavSm />
            </div>
            <div className="hidden lg:block">
                <NavLg />
            </div>
        </>
    );
}

export default NavBar;