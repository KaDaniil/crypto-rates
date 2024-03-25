import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { mainCurrency } from '../utils';

class CurrencyStore {
    currencies = {};
    isLoading = true;

    constructor() {
        makeAutoObservable(this);
    }

    fetchCurrencies() {
        this.isLoading = true;
        axios.get('https://app.youhodler.com/api/v3/rates/extended')
            .then((response) => {
                if (response?.data?.[mainCurrency]) {
                    this.currencies = response.data[mainCurrency];
                    this.isLoading = false;
                }
            })
            .catch(e => {
                console.log(e);
                this.isLoading = false;
            });
    }

    getCurrencies() {
        if (Object.keys(this.currencies).length === 0 && !this.isLoading) {
            this.fetchCurrencies();
        }
        return this.currencies;
    }
}

export const currencyStore = new CurrencyStore();
