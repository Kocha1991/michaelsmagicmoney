import React from "react";

import './swapperBlock.scss';

const SwapperBlock = ({title, amount, onTrack, balance}) => {
  return (
    <div className='swap-from-to'>
      <div className='swap-from-to__amount'>
        <h2 className='swap-from-to__text swap-from-to__text--title'>
          {title}
        </h2>
        <span className='swap-from-to__text swap-from-to__text--amount'>
          {amount}
        </span>
        <span className='swap-from-to__text'>
          ≈$ {onTrack}
        </span>
      </div>
      <div className='swap-from-to__coin'>
        
        <span className='swap-from-to__text'>
          Balance: {balance}
        </span>
      </div>
    </div>
  )
};

export default SwapperBlock;
