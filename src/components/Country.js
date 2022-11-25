import {Link} from "react-router-dom";

import css from '../components/style/country.module.css'

const Country = ({country}) => {

    const {name, countryCode} = country;

    return (
        <div>

            <Link to={`/holidays/${countryCode}`} className={css.link} state={{...country}}>

                <div className={css.country}>

                    <h4 className={css.text}>Country:</h4>

                    <p className={css.text}>{name}</p>

                </div>

            </Link>

        </div>
    );
};

export {Country};