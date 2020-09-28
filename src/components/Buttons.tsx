import React from 'react';
import {log} from "util";

type callBackType = {
    callBack: () => void
    buttonName?: string
    incValue?: number
    start?:number
    max?: number
}

export const Buttons = (props: callBackType) => {
    console.log(props.max)
    return (
        <span>
            <button
                disabled={
                    (props.incValue === props.start && props.buttonName === 'reset' ? true : false)
                    ||
                    (props.incValue == props.max && props.buttonName === 'inc' ? true : false)
                } onClick={props.callBack}>{props.buttonName}</button>
        </span>
    )
}