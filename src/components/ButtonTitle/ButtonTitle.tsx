import React from "react";
import './ButtonTitle.css';

interface ButtonTitleProps {
  ButtonClass?: string;
  ButtonID?: string;
  toggleSidebar?: () => void;
}

function ButtonTitle({ ButtonClass, ButtonID, toggleSidebar }: ButtonTitleProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); 
    if (toggleSidebar) {
      toggleSidebar();
    }
  }

  return (
    <>
      <button onClick={handleClick} id={ButtonID} className={ButtonClass}></button>
    </>
  );
}

export default ButtonTitle;

