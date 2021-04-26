import React from 'react';
import './style.css';

type LinkProps = {
    location: string,
    className?: string,
    handleClick?: () => void
}

const Link: React.FC<LinkProps> = ({location, className, handleClick, children}) => {
    const classNames = `Link ${className}`;
    return (
        <a className={classNames} href={location} onClick={handleClick}>
            {children}
        </a>
    );
};

export default Link;