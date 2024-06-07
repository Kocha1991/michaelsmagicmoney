import React, { useState } from "react";
import { Btn } from '../Btns/Btns';
import SwapperBlock from './SwapperBlock/SwapperBlock';
import { useSDK } from "@metamask/sdk-react";


//import styles
import './swapper.scss';

//import icons and img
import ConnectIcon from '../../image/connect-wollet.svg';

const Swapper = ({text}) => {
  const { sdk, connected, account } = useSDK();
  const [signedMessage, setSignedMessage] = useState("");

  const handleConnectAndSign = async () => {
    try {
      const message = "Your message here";
      const signature = await sdk.connectAndSign({ msg: message });
      setSignedMessage(signature);
    } catch (error) {
      console.error("Error in signing:", error);
    }
  };

  return (
    <div className='swapper'>
      <div className='swapper__header'>
        <h2 className='swapper__subheader'>{text}</h2>
        
        {connected && (
          <div className='swapper__connected'>
            {account && `Connected account: ${account}`}
          </div>
        )}
      </div>
      
      <div className='swapper__box'>
          <SwapperBlock 
            title='You’re paying'
            amount={440.20}
            onTrack={6730.320}
            balance={3.98}
          />
          <button type="button" className='swapper__change-btn'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4498 6.71997L6.72974 3L3.00977 6.71997" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.72949 21L6.72949 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.5498 17.28L17.2698 21L20.9898 17.28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.2695 3V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <SwapperBlock 
            title='To receive'
            amount={20.10}
            onTrack={330.320}
            balance={1223.98}
          />
      </div>
      <div className='swapper__btns'>
        <Btn
          text="Swap"
        />
        <Btn 
          src={ConnectIcon}
          alt='wallet-icon'
          onClick={handleConnectAndSign}
          text='Connect wallet'
        />
        {signedMessage && <p>Signed Message: {signedMessage}</p>}
      </div>
    </div>
  )
};

export default Swapper;
