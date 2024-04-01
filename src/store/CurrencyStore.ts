import { makeAutoObservable } from 'mobx';
import { getRates, mainCurrency } from '../utils';
import { ParticularCurrencyRates } from '../models/CurrencyRates';

class CurrencyStore {
    currencies: ParticularCurrencyRates;
    isLoading: boolean;
    searchTerm: string;
    error: string | null;

    constructor() {
        makeAutoObservable(this);
        this.currencies = {};
        this.isLoading = false;
        this.searchTerm = '';
        this.error = null;
    }

    async fetchCurrencies(): Promise<void> {
        if (Object.keys(this.currencies).length === 0 && !this.isLoading) {
            this.isLoading = true;
            this.error = null;
            try {
                const response = await getRates();
                this.currencies = response.data[mainCurrency];
            } catch (e) {
                this.error = e instanceof Error ? e.message : 'An unexpected error occurred';
            } finally {
                this.isLoading = false;
            }
        }
    }

    setSearchTerm(term: string): void {
        this.searchTerm = term;
    }

    get filteredCurrencies(): ParticularCurrencyRates {
        const lowerCaseTerm = this.searchTerm.toLowerCase();
        return Object.entries(this.currencies)
            .reduce((acc, [key, value]) =>
                key.includes(lowerCaseTerm)
                    ? ({ ...acc, [key]: value })
                    : acc,
            {});
    }

}

export const currencyStore = new CurrencyStore();
