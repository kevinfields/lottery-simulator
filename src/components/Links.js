import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className='links'>
      <Link to='/'>
        Home
      </Link>
      <Link to='/unranked-game'>
        Unranked Game
      </Link>
    </div>
  )
}

export default Links