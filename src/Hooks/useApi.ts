import { useQuery } from 'react-query';
import api from '../api';

const fetcher = async (url: string) => {
    const response = await api.get(url);
    return response.data;
};

export const useApi = <T>(url: string) => {
    return useQuery<T>(url, () => fetcher(url));
};
