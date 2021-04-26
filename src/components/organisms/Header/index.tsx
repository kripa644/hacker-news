import React from 'react';
import './style.css';
import '../../_settings/_base.css';

interface HeaderProps {
    className?: string
}

const Header: React.FC<HeaderProps> = ({className, children}) => {
    return (
        <div className={`Header ${className}`}>
            {children}
        </div>
    );
};

export default Header;