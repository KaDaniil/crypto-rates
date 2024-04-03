import { http, HttpResponse } from 'msw';
import { mainCurrency } from '../utils';

export const handlers = [
    http.get('https://app.youhodler.com/api/v3/rates/extended', () => {
        return HttpResponse.json({
                [mainCurrency]: { USD: { rate: '1.00' }, EUR: { rate: '0.85' } }
            },
            { status: 200 }
        );
    }),
];
