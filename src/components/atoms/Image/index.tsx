import React from 'react';
import './style.css';

type ImageProps = {
    source: string,
    width?: string,
    height?: string,
    alt?: string,
    className?: string
    handleClick?: () => void
}

const Image = ({source, width, height, alt, className, handleClick}: ImageProps) => {
    return (
        <img src={source} className={className} alt={alt} width={width} height={height} onClick={handleClick}/>
    );
};

export default Image;