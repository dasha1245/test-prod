import {useEffect, useState} from "react";

import {countriesService} from "../services";
import {Country} from "./Country";
import css from './style/countries.module.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [value, setValue] = useState('');
    const [filterDirect, setFilterDirect] = useState('Descending');

    const filteredCountries = countries.filter(country => {
        return country.name.toLowerCase().includes(value.toLowerCase())
    });

    useEffect(() => {
            countriesService.getAllCountries().then(value => {
                if(filterDirect === 'Descending' ){
                    let sortedCountries = value.data.sort();
                    setCountries(sortedCountries);
                }
                if(filterDirect === 'Ascending' ){
                    let sortedCountries = value.data.reverse();
                    setCountries(sortedCountries);
                }
            })
    }, [value, filterDirect]);


    function changeFilterDirection() {
        if(filterDirect === 'Descending'){
            setFilterDirect('Ascending');
        }
        if(filterDirect === 'Ascending'){
            setFilterDirect('Descending');
        }
    }

    function removeAll() {
        setValue('');
    }

    return (
        <div>

            <div>

                <input type="text"
                       placeholder={'Search country here...'}
                       onChange={(event) => setValue(event.target.value)}
                       className={css.search}
                       value={value}
                />
                <div  className={css.buttons}>
                    <button onClick={() => changeFilterDirection()} className={css.button}>{filterDirect}</button>
                    <button onClick={() => removeAll()} className={css.button}>Reset</button>
                </div>

            </div>

            <h2 className={css.text}>List of countries:</h2>

            <div className={css.countries}>
                {filteredCountries?.map((country, index) => <Country country={country} key={index}/>)}
            </div>

        </div>
    );
};

export {Countries};