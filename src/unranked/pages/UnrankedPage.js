import React, {useState, useEffect} from 'react';
import '../UnrankedStyles.css';

const UnrankedPage = () => {

  const [money, setMoney] = useState(10);

  return (
    <div className='page'>
      <h1 className='welcome-header'>
        Welcome to the Lottery Store!
      </h1>
      <div className='wallet-container'>
        Current Funds: ${money}
      </div>
    </div>
  )
}

export default UnrankedPage