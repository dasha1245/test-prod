import css from '../components/style/holiday.module.css';

const Holiday = ({holiday}) => {

    const {date, localName, name} = holiday;

    return (
        <div>

            <div className={css.holiday}>

                <div className={css.header}>
                    <h3>{localName}</h3>
                </div>

                <hr/>
                <div>

                    <b><p>Translated in English: {name}</p></b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi aspernatur beatae
                        consequatur dolores eligendi ipsa laborum minus molestiae nostrum, numquam optio perferendis
                        possimus, quis, rem rerum saepe similique voluptates!</p>
                    <h5>Celebrate on {date}</h5>

                </div>

            </div>

        </div>
    );
};

export {Holiday};