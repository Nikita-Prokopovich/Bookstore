import React from 'react';
import './SubscribeCard.css'; 
import Input from '../Input/Input';
import { useState } from 'react';



export default function SubscribeCard() {
    const [inputValueEmail, setInputValueEmail] = useState('')
    const clickFunction = () => {}
    return (
    <>
    <div className='subscribe-container'>
        <div className='subscribe-wrapper'>
            <div className='subscribe-box' > 
                <h1 className='subscribe__title'>Subscribe to Newsletter</h1>
                <form className='subscribe-form'>
                    <Input 
                        inputTitle = 'Be the first to know about new IT books, upcoming releases, exclusive offers and more.'
                        inputPlaceholder = 'Your email'
                        isDisabled = {false}
                        inputClass = 'subscribe-input'
                        inputType = 'email'
                        inputValue = {inputValueEmail}
                        setInputValue = {e => setInputValueEmail(e.target.value)}
                    ></Input>
                    <button onClick={clickFunction} type='button' className='subscribe__button'>SUBSCRIBE</button>
                </form>
            </div>
        </div>
    </div>
    </>

    );
}