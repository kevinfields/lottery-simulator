import { toContainElement } from '@testing-library/jest-dom/dist/matchers';
import React, {useState, useEffect} from 'react'

const TicketSlot = (props) => {

  const [revealed, setRevealed] = useState(false);
  const [suffix, setSuffix] = useState('');
  
  useEffect(() => {

    if (revealed) {
      if (props.winners.includes(props.number)) {
        setSuffix('-win');
      } else {
        setSuffix('-loss');
      }
    }
  }, [revealed])


  return (
    <div 
      className={`ticket-slot${suffix}`}
      onClick={() => setRevealed(true)}
    >
      { revealed ?
          props.number
        :
          null
      }
    </div>
  )
}

export default TicketSlot