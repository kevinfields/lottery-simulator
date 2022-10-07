import React, {useState, useEffect} from 'react'

const WinningNumber = (props) => {
 

  let suffix = '';
  if (props.opened) {
    suffix = '-revealed';
  };


  return (
    <div 
      className={`winning-number-slot${suffix}`}
      onClick={() => props.addOpened()}
    >
      { 
        props.opened ?
          props.number
        :
          null
      }
    </div>
  )
}

export default WinningNumber