import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { mainCurrency } from '../utils';

function Coin() {
    const [currencies, setCurrencies] = useState({});
    const { coinId } = useParams();


    useEffect(() => {
        axios.get('https://app.youhodler.com/api/v3/rates/extended')
            .then((response) => {
                if (response?.data?.[mainCurrency]) {
                    setCurrencies(response?.data?.[mainCurrency]);
                }
            })
            .catch(e => console.log(e));
    }, []);

    console.log(currencies, coinId, currencies?.[coinId]);
    if (currencies?.[coinId] === undefined) {
        return 'Loading...';
    }
    return (
        <>
            <div>
                {
                    Object.entries(currencies?.[coinId]).map(([coinKey, coinValue]) => (
                        <div key={coinKey}>
                            <div>
                                {coinKey}
                            </div>
                            <div>
                                {coinValue}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Coin;
