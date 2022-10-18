import React from 'react';
import Pond from '../components/Pond';
import '../Fishing.css';

const FishingPage = () => {


  return (
    <div className='page'>
      <div className='welcome'>
        CATCH SOME FISH
      </div>
      <Pond />
    </div>
  )
}

export default FishingPage