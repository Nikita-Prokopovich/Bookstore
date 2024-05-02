import './Header.css'; 
import Input from '../Input/Input';
import { useState } from 'react';
import ButtonTitle from '../ButtonTitle/ButtonTitle';

function Header () {
    const clickFunction = () => {}
    const [inputValueName, setInputValueName] = useState('')
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const maxLength = 60;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length <= maxLength) {
            setInputValueName(event.target.value);
        }
    };

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
    <>
    <div className='header-container'>
        <div className='header-wrapper'>
            <div className='header__name'>BOOKSTORE</div>
            <div className='header-search-block'>
                <form className='header-form'>
                    <Input
                        inputTitle = ''
                        inputPlaceholder = 'Search'
                        isDisabled = {false}
                        inputClass = 'input-main'
                        inputType = 'text'
                        inputValue = {inputValueName}
                        setInputValue={handleInputChange}
                    />
                    <button onClick={clickFunction} type='button' className='button-search'></button>
                </form>
            </div>
            <div className='header-icon-block'>
                <ButtonTitle ButtonClass='header-icon' ButtonID='heart'/>
                <ButtonTitle ButtonClass='header-icon' ButtonID='shop'/>
                <ButtonTitle ButtonClass='header-icon' ButtonID='user'/>
                <ButtonTitle ButtonClass='header-icon' ButtonID='burger' toggleSidebar={openSidebar}/>
            </div>
        </div>
    </div>
    <div className={`overlay ${sidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
            <button className='button-close ' onClick={closeSidebar}></button>
            <Input
                inputTitle = ''
                inputPlaceholder = 'Search'
                isDisabled = {false}
                inputClass = 'input-sidebar' 
                inputType = 'text'
                inputValue = {inputValueName}
                setInputValue={handleInputChange}
            />
        </div>
    </div>
    </>
    );
};

export default Header;


