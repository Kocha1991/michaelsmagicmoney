import React, { useState, useRef } from "react";
import './input.scss';
import Icon from '../../image/input-icon.svg';



const Input = () => {
  const [isCopied, setIsCopied] = useState(false);
  const inputRef = useRef(null);

  const handleCopy = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      navigator.clipboard.writeText(inputValue)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        })
    }
  };

  return (
    <div className='input-block'>
      <input type="text" className='input-block__input' value='0x7910737759c35533f1fd6c49adead1869573cdfc' readOnly ref={inputRef}/> 
      <button className='input-block__icon' onClick={handleCopy}>
        <img src={Icon} alt="copy-icon"/>
      </button>
      <div className={`input-copied ${isCopied ? 'active' : ''}`}>Text copied to clipboard</div>
    </div>
  )
};

export default Input;
