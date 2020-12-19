import React from 'react';
import {log} from "util";
import {store} from "../store/store";

type callBackType = {
    callBack: () => void
    buttonName?: string
    incValue?: number
    start?: number
    max?: number
}

export const Buttons = (props: callBackType) => {
    return (
        <span>
            <button
                disabled={
                    // (props.incValue === props.start && props.buttonName === 'reset' ? true : false)
                    (store.getState().incValue === store.getState().start && props.buttonName === 'reset' ? true : false)
                    ||
                    // (props.incValue == props.max && props.buttonName === 'inc' ? true : false)
                    (store.getState().incValue ==store.getState().max && props.buttonName === 'inc' ? true : false)
                } onClick={props.callBack}>{props.buttonName}
            </button>
        </span>
    )
}
//=============================================================================================
// import React from 'react';
// import {log} from "util";
//
// type callBackType = {
//     callBack: () => void
//     buttonName?: string
//     incValue?: number
//     start?: number
//     max?: number
// }
//
// export const Buttons = (props: callBackType) => {
//     return (
//         <span>
//             <button
//                 disabled={
//                     (props.incValue === props.start && props.buttonName === 'reset' ? true : false)
//                     ||
//                     (props.incValue == props.max && props.buttonName === 'inc' ? true : false)
//                 } onClick={props.callBack}>{props.buttonName}
//             </button>
//         </span>
//     )
// }