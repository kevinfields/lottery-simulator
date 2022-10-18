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
      <Link to='/fishing-pond'>
        Fishing Pond
      </Link>
    </div>
  )
}

export default Links