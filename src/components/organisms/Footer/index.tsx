import React from 'react';
import './style.css';
import '../../_settings/_base.css'

interface FooterProps {
    className?: string
}

const Footer: React.FC<FooterProps> = ({className, children}) => {
    return (
        <div className={`Footer ${className}`}>
            {children}
        </div>
    );
};

export default Footer;