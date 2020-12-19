import React from 'react';
import styles from './TV.module.css';


type valueType = {
    value: number;
    incValue: number,
    start:number
    max:number
}

export const TV = (props: valueType) => {
    // debugger
      return (
           <div className={`${styles.tvStyle} ${props.incValue == props.max ? styles.red : ''}`}>
               {props.start<0 ? 'I have problem': props.value}
               {console.log('incValue:  '+props.incValue)}
           </div>

    )
}
