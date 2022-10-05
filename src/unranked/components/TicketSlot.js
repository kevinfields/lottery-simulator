import React, {useState, useEffect} from 'react'

const TicketSlot = (props) => {

  const [revealed, setRevealed] = useState(false);

  return (
    <div 
      className='ticket-slot'
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