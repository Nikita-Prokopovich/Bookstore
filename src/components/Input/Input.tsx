import './Input.css'


interface IInput {
    inputTitle:string;
    inputPlaceholder:string;
    isDisabled:boolean;
    inputClass:string;
    inputType:string;
    inputValue: string;
    setInputValue: React.ChangeEventHandler<HTMLInputElement>
}
    


export default function Input({inputTitle, inputPlaceholder, isDisabled, inputClass, inputType, inputValue, setInputValue}: IInput) {
    return ( 
    <>  
        <div className='input-wrapper'>
            <p className='input-name subscribe-input-name'>{inputTitle}</p>
            <input value = {inputValue} onChange={setInputValue} type={inputType} placeholder={inputPlaceholder} disabled={isDisabled} className={inputClass}/>
        </div>
    </>
    );
}