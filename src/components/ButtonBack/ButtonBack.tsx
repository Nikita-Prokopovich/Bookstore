import { Children } from 'react';
import './ButtonBack.css';

interface IButtonBack {
    clickFunction ?: () => void,
}

export default function ButtonBack({clickFunction}:IButtonBack) {
  

    return (
    <>
    <div className='button-back-wrapper'>
    <button onClick={clickFunction} className='button-back'></button>
    </div>
    </>
  );
}

