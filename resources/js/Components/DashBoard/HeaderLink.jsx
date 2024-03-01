import React from 'react';

const HeaderLink = ({ checkActive = true, href, className, children }) => {
    const currentPath = window.location.pathname;
    const isActive = currentPath === href && checkActive;

    const classNames = ['border-b-2 uppercase', className, isActive ? 'border-white' : 'border-transparent']
        .filter((cls) => cls); // Remove undefined or empty strings

    return (
        <a href={href} className={classNames.join(' ')} style={{ color: 'black', fontSize: '1.2rem', fontWeight: 'bold' }}>{children}</a>
    );
};

export default HeaderLink;
