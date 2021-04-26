import React, {useState, useEffect} from 'react';
import './style.css';
import '../../_settings/_base.css';
import {fetchItem} from '../../api/api';
import moment from 'moment';
import Text, {TextTheme, TextType} from '../../atoms/Text/index';
import Image from '../../atoms/Image/index';
import Link from '../../atoms/Link/index';
import Loader from '../../atoms/Loader/index';

type ItemProps = {
    className?: string,
    id: number,
    number: number
}

const Item: React.FC<ItemProps> = ({id, number, className}) => {
    const [result, setResult]: any = useState([]);
    const [loading, setLoading] = useState(true);

    const classNames = `Item ${className}`;

    useEffect(() => {
        fetchItem(id)
        .then(res => {
            setResult(res);
            setLoading(false);
        });
    }, [id]);

    return (
        <div className={classNames}>
            {loading ?
            <Loader/>:
            <>
                <tr id="26233736">
                    <td align="right" valign="top">
                        <Text className={`${TextTheme.SECONDARY} ${TextType.LARGE} ${number < 10 ? 'space' : ''}`}>{number}.</Text>
                    </td>      
                    <td valign="top">
                        <Link className='margin-left-5 margin-right-2' location='vote?id=26233736&amp;how=up&amp;goto=from%3Fsite%3Dthedrive.com'>
                            <Image source='arrow.gif' alt='arrow'/>
                        </Link>
                    </td>
                    <td>
                        <Link location={result.url} className='visited'>
                            <Text className={`${TextTheme.PRIMARY} ${TextType.LARGE}`}>{result.title}</Text>
                        </Link>
                        {result.url && <Link location={result.url} className='link'>
                            <Text className={`${TextTheme.SECONDARY} ${TextType.SMALL}`}>
                                ({`${result.url}`.replace('http://','').replace('https://','').split(/[/?#]/)[0]})
                            </Text>
                        </Link>}
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}></td>
                    <td >
                        <Text className={`${TextType.SMALL} ${TextTheme.SECONDARY}`}>
                            {result.score} points by {result.by} {moment.unix(result.time).fromNow()} | past
                        </Text>
                        {/* <span className="score" id="score_26233736">{result.score} points</span> by {result.by} <span className="age">{moment.unix(result.time).fromNow()} | past</span> */}
                    </td>
                </tr>
                <tr className="spacer"></tr>
            </>
            }
        </div>
    );
};

export default Item;