import React from 'react';
import s from './pixel.module.css'

export const Pixel = () => {
    return (
        <div className={s.block}>
            <div className={s.lowerPurple}></div>
            <div className={s.smallBall}></div>
            <div className={s.bigBall}></div>
            <div className={s.triangle}></div>
            <div className={s.stick}></div>
        </div>
    );
};
