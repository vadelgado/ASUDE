import React from 'react';

const Logo = ({  ...props }) => {
    return (
        <img
            src="/logo-home1.webp"
            alt="Logo"
            {...props}
        />
    );
};

export default Logo;
