import { toContainElement } from '@testing-library/jest-dom/dist/matchers';
import React, {useState, useEffect} from 'react'

const TicketSlot = (props) => {

  const [revealed, setRevealed] = useState(false);
  let suffix = '';
  if (props.opened) {
    if (props.winners.includes(props.number)) {
      suffix = '-win';
    } else {
      suffix = '-loss';
    };
  };
  
  useEffect(() => {

    if (revealed) {
      if (props.winners.includes(props.number)) {
        props.addWinner(props.number);
        props.addOpened();
      } else {
        props.addOpened()
      }
    }
  }, [revealed]);


  return (
    <div 
      className={`ticket-slot${suffix}`}
      onClick={() => setRevealed(true)}
    >
      { props.opened ?
          props.number
        :
          null
      }
    </div>
  )
}

export default TicketSlot