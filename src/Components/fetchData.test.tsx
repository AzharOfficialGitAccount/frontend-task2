import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import FetchData from './fetchData';

test('renders data correctly', async () => {
    render(
        <Provider store={store}>
            <FetchData />
        </Provider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});
