import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {countriesService} from "../services";
import {Holiday} from "./Holiday";
import css from '../components/style/holidays.module.css';

const Holidays = () => {

    const {state:country} = useLocation();

    const [holidays, setHolidays] = useState([]);

    useEffect(()=> {
        countriesService.getAllHolidays(country.countryCode).then(value => setHolidays(value.data))
    }, [country.countryCode]);

    return (
        <div className={css.holidays}>
            {holidays?.map((holiday, index) => <Holiday holiday={holiday} key={index}/>)}
        </div>
    );
};

export {Holidays};