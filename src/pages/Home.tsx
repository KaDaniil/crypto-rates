import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { mainCurrency } from '../utils';

function Home() {
    const [currencies, setCurrencies] = useState({});

    useEffect(() => {
        axios.get('https://app.youhodler.com/api/v3/rates/extended')
            .then((response) => {
                if (response?.data?.[mainCurrency]) {
                    setCurrencies(response?.data?.[mainCurrency]);
                }
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <>
            <div>
                {
                    Object.entries(currencies).map(([currencyName, currency]) => (
                        <Link key={currencyName} to={currencyName}>
                            <div>
                                {currencyName}
                            </div>
                            <div>
                                {currency.rate}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}

export default Home;
