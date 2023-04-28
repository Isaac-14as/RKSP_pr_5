import React from 'react';
import classes from "./Text.module.css";

const Text = () => {
    return (
        <div className={classes.text_main}>
            <h1>Пользовательское соглашение</h1>
            <p>1. Вы переписываете на нашу компанию всю свою недвижимость.</p>
            <p>2. Вы должны отработать на чайной плантация наших партнеров 10 лет в Шри-Ланке.</p>
            <p>3. Вы не имеете право иметь претензии в сторону компании при получении морального или физичиского ущерба.</p>
        </div>
    );
};

export default Text;