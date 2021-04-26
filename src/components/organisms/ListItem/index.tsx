import React, {useState, useEffect} from 'react';
import './style.css';
import {useLocation} from 'react-router';
import QueryString from 'query-string';
import {Link, useHistory} from 'react-router-dom';
import Item from '../../molecules/Item/index';
import Text, {TextTheme, TextType} from '../../atoms/Text/index';

interface ListItemProps {
    className?: string,
    data: any
}

const ListItem: React.FC<ListItemProps> = ({className, data}) => {

    const [dataPerPage, setDataPerPage] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [nextPage, setNextPage] = useState(2);
    const [more, setMore] = useState(false);
    const [offset, setOffset] = useState(0);
    const count = 30;

    const location = useLocation();
    const pathName = location.pathname;
    const history = useHistory();
    const queryParams = location.search ? QueryString.parse(location.search): null;

    useEffect(() => {
        if(queryParams && queryParams.p) {
            if (data.length > count * (+queryParams.p -1)) {
                let newOffset = count * (+queryParams.p - 1);
                setOffset(newOffset);
                setNextPage(+queryParams.p + 1);
                setDataPerPage(data.slice(newOffset, newOffset + count));
                moreButton(+queryParams.p);
            }
            else {
                history.push(pathName);
                setDataPerPage(data.slice(offset, offset + count));
                if (data.length > count) {
                    setMore(true);
                }
            }
        }
        else {
            setDataPerPage(data.slice(0, count));
            setNextPage(2);
            setOffset(0);
            if (data.length > count) {
                setMore(true);
            }
        }
    }, [pageCount, location]);

    const moreButton = (pageNum: number) => {
        return data.length <= pageNum * count ? setMore(false) : setMore(true);
    };

    const paginate = () => {
        setOffset(pageCount * count);
        setNextPage(nextPage + 1);
        setPageCount(pageCount + 1);
    }
    
    return (
        <table cellPadding="0" cellSpacing="0" className={`ListItem ${className}`}>
            <tbody>
                {dataPerPage.map((data, index) => {
                    return <Item key={index} id={data} number={offset + index + 1}/>
                })}
                <tr className="morespace" ></tr>
                <tr>
                    {/* <td colSpan={1}></td> */}
                    {more && 
                    <td>
                        <Link to={`${pathName}?p=${+nextPage}`} onClick={paginate} className='more' rel='next'>
                            <Text className={`${TextTheme.PRIMARY} ${TextType.LARGE}`}>more</Text>
                        </Link>
                    </td>
                    }
                </tr>
            </tbody>
        </table>
    );
};

export default ListItem;