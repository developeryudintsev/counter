import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Buttons} from './components/Buttons'
import {TV} from "./components/TV";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "./store/store";
import {StartReducerAC} from "./reducers/StartReducer";
import {MaxReducerAC} from "./reducers/MaxReducer";
import {IncReducerAC} from "./reducers/IncValueReducer";
import {log} from "util";

function App() {
    // let [start, setStart] = useState(0);
    // let [max, setMax] = useState(0);

    let start = useSelector<AppRootStateType, number>(state => state.start);
    let max = useSelector<AppRootStateType, number>(state => state.max);
    let dispatch = useDispatch();
    const startValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // setStart(Number(event.currentTarget.value));
        dispatch(StartReducerAC(Number(event.currentTarget.value)))
    }

    const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // setMax(Number(event.currentTarget.value));
        dispatch(MaxReducerAC(Number(event.currentTarget.value)))
    }

    let setFoo = () => {
        setFooStart();
        setFooMax();
    }
    const setFooStart = () => {
        let start2 = String(start);
        localStorage.setItem('start', start2);
        // setIncValue(start)
        dispatch(IncReducerAC(start-1))

    }
    const setFooMax = () => {
        // console.log(max);
        let max2 = String(max);
        localStorage.setItem('max', max2);
    }


    let incValue = useSelector<AppRootStateType, number>(state => state.incValue);
    const inc = () => {
        dispatch(IncReducerAC(incValue))
          // let sum = incValue;
        // sum++;
        // setIncValue(sum)
    }

    const reset = () => {
        // setIncValue(start)
        dispatch(IncReducerAC(start-1))

    }


    return (
        <div className="App">
            <input onChange={startValueHandler} className={'startValue'} type={'number'}/>
            <input onChange={maxValueHandler} className={'maxValue'} type={'number'}/>
            <Buttons callBack={() => setFoo()} buttonName={'set'} incValue={incValue} max={max}/>
            <div>
                <TV value={incValue} incValue={incValue} start={start} max={max}/>
                <Buttons callBack={() => inc()} buttonName={'inc'} incValue={incValue} start={start} max={max}/>
                <Buttons callBack={() => reset()} buttonName={'reset'} incValue={incValue} start={start} max={max}/>
            </div>
        </div>
    );
}

export default App;

//=====================================================================================================
// import React, {ChangeEvent, useState} from 'react';
// import './App.css';
// import {Buttons} from './components/Buttons'
// import {TV} from "./components/TV";
//
// function App() {
//     let [start, setStart] = useState(0);
//     let [max, setMax] = useState(0);
//     const startValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
//         setStart(Number(event.currentTarget.value));
//     }
//
//     const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
//         setMax(Number(event.currentTarget.value));
//     }
//
//     let setFoo = () => {
//         setFooStart();
//         setFooMax();
//     }
//     const setFooStart = () => {
//         console.log(start);
//         let start2 = String(start);
//         localStorage.setItem('start', start2);
//         setIncValue(start)
//     }
//     const setFooMax = () => {
//         console.log(max);
//         let max2 = String(max);
//         localStorage.setItem('max', max2);
//     }
//
//
//
//     let [incValue, setIncValue] = useState(Number(localStorage.getItem('start')))
//     const inc = () => {
//         let sum = incValue;
//         sum++;
//         setIncValue(sum)
//     }
//
//     const reset = () => {
//         setIncValue(start)
//     }
//
//     return (
//         <div className="App">
//             <input onChange={startValueHandler} className={'startValue'} type={'number'}/>
//             <input onChange={maxValueHandler} className={'maxValue'} type={'number'}/>
//             <Buttons callBack={() => setFoo()} buttonName={'set'} incValue={incValue} max={max}/>
//             <div>
//                 <TV value={incValue} incValue={incValue} start={start} max={max}/>
//                 <Buttons callBack={() => inc()} buttonName={'inc'} incValue={incValue} start={start} max={max}/>
//                 <Buttons callBack={() => reset()} buttonName={'reset'} incValue={incValue} start={start} max={max}/>
//             </div>
//         </div>
//     );
// }
//
// export default App;