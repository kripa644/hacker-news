import React from 'react';
import './style.css';
import '../../_settings/_base.css';
import Link from '../../atoms/Link/index';
import Text, {TextTheme, TextType} from '../../atoms/Text/index';

type FooterNavProps = {
    name: string,
    id: number,
    location: string
}

interface NavbarProps {
    footerData: FooterNavProps[],
    className?:string
}

const FooterNav: React.FC<NavbarProps> = ({footerData, className}) => {
    return (
        <div className={`FooterNav ${className}`}>
            {footerData.map((link) => {
                const {name, id, location} = link;
                return (
                    <Link location={location} key={id}>
                        <Text className={`${(id === 1 || id === 2 || id === 4 || id === 6) ? TextTheme.SECONDARY : TextTheme.PRIMARY} ${TextType.SMALL} margin-left-3`}>
                            {name}{id !== footerData.length && <span className='footerLine margin-left-3'>|</span>}
                        </Text>
                    </Link>
                ) 
            })}
        </div>
    );
};

export default FooterNav;