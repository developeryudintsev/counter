import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Buttons} from './components/Buttons'
import {TV} from "./components/TV";

function App() {
    let [start, setStart] = useState(0);
    let [max, setMax] = useState(0);
    const startValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStart( Number( event.currentTarget.value));
    }

    const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMax(Number(event.currentTarget.value));
    }

    const setFoo = () => {
        console.log(start)
        console.log(max)
        let start2=String(start)
        let max2=String(max)
        localStorage.setItem('start', start2);
        localStorage.setItem('max', max2);
        setIncValue(start)
    }


    let [incValue, setIncValue] = useState(Number(localStorage.getItem('start')))
    const inc = () => {
        let sum = incValue;
            sum++;
            setIncValue(sum)
    }

    const reset = () => {
        setIncValue(start)
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


//==============================================
// import React, {ChangeEvent, useState} from 'react';
// import './App.css';
// import {Buttons} from './components/Buttons'
// import {TV} from "./components/TV";
//
// function App() {
//     let [start, setStart] = useState(0);
//     let [max, setMax] = useState(0);
//     const startValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
//         setStart( Number( event.currentTarget.value));
//     }
//
//     const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
//         setMax(Number(event.currentTarget.value));
//     }
//
//     const setFoo = () => {
//         console.log(start)
//         console.log(max)
//         let start2=String(start)
//         let max2=String(max)
//         localStorage.setItem('start', start2);
//         localStorage.setItem('max', max2);
//     }
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
//         setIncValue(0)
//     }
//
//     return (
//         <div className="App">
//             <input onChange={startValueHandler} className={'startValue'} type={'number'}/>
//             <input onChange={maxValueHandler} className={'maxValue'} type={'number'}/>
//             <Buttons callBack={() => setFoo()} buttonName={'set'} incValue={incValue}/>
//             <div>
//                 <TV value={incValue} incValue={incValue}/>
//                 <Buttons callBack={() => inc()} buttonName={'inc'} incValue={incValue}/>
//                 <Buttons callBack={() => reset()} buttonName={'reset'} incValue={incValue}/>
//             </div>
//         </div>
//     );
// }
//
// export default App;