import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/slices/apiSlices';

const FetchData: React.FC = () => {
    const dispatch = useDispatch();

    const { data, isLoading, error } = useSelector((state: { api: { data: any; isLoading: boolean; error: string | null } }) => state.api);

    useEffect(() => {
        dispatch(fetchData('/posts/1') as any);
    }, [dispatch]);

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};

export default FetchData;
