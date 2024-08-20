import React from 'react';

const NavButton = ({className}) => {
    return (
        <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 7H1M1 7L7 1M1 7L7 13" stroke="#403F3D" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default NavButton;