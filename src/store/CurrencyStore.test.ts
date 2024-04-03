import { currencyStore } from './CurrencyStore';
import { server } from '../mocks/server';
import { getRates, mainCurrency } from '../utils/index';

jest.mock('../utils', () => ({
    mainCurrency: 'USD',
    getRates: jest.fn(),
}));

describe('currencyStore', () => {
    beforeAll(() => server.listen());
    afterEach(() => {
        server.resetHandlers();
        currencyStore.currencies = {};
        currencyStore.isLoading = false;
    });
    afterAll(() => server.close());

    it('fetchCurrencies should fetch and set currencies', async () => {
        (getRates as jest.Mock).mockImplementationOnce(() => Promise.resolve({
            data: {
                [mainCurrency]: { usd: { rate: '1.00' }, EUR: { rate: '0.85' } }
            }
        }));

        await currencyStore.fetchCurrencies();
        expect(currencyStore.isLoading).toBe(false);
        expect(currencyStore.currencies).toHaveProperty('usd');
        expect(currencyStore.currencies['usd'].rate).toBe('1.00');
    });

    it('handles exceptions with fetchCurrencies when the request fails', async () => {
        (getRates as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error('Network error')));

        await currencyStore.fetchCurrencies();

        expect(currencyStore.isLoading).toBe(false);
        expect(currencyStore.currencies).toEqual({});
    });
});
