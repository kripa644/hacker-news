import React from 'react';
import './style.css';
import Text, {TextTheme, TextType} from '../../atoms/Text/index';
import Input from '../../atoms/Input/index';

type SearchProps = {
    className?: string
}

const SearchInput: React.FC<SearchProps> = ({className}) => {
    return (
        <div className={`SearchInput ${className}`}>
            <Text className={`${TextTheme.SECONDARY} ${TextType.LARGE}`}>Search:</Text>
            <Input type='text' className='margin-left-5'/>
        </div>
    );
};

export default SearchInput;