import React, {useEffect, useState} from 'react';
import {fetchData} from '../../api/api';
import ListItem from '../../organisms/ListItem/index';
import Loader from '../../atoms/Loader/index';

interface ListProps {
    url: string
}

const List: React.FC<ListProps> = ({url}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData(url)
        .then(res => {
            setData(res);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading ?
            <Loader/> :
            <ListItem data={data}/>
            }
        </>
    );
};

export default List;