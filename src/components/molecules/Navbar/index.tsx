import React from 'react';
import './style.css';
import '../../_settings/_base.css';
import { NavLink } from "react-router-dom";

type NavLinkProps = {
    name: string,
    id: number,
    path: string
}

interface NavbarProps {
    navbarData: NavLinkProps[],
    className?:string
}

const Navbar: React.FC<NavbarProps> = ({navbarData, className}) => {
    return (
        <div className={`Navbar ${className}`}>
            {navbarData.map((navLink) => {
                const {name, id, path} = navLink;
                return (
                    <>
                        <NavLink to={path} className='NavLink margin-left-5' activeClassName={`selected primary`}>
                            {name}
                        </NavLink>
                        {id !== navbarData.length && <span className='line'>|</span>}
                    </>
                );
            })}
        </div>
    );
};

export default Navbar;