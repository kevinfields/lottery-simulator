import React, {useState, useEffect} from 'react'
import TicketSlot from './TicketSlot'
import WinningNumber from './WinningNumber'

const LotteryTicket = (props) => {

  const [winning, setWinnings] = useState(0);

  return (
    <div className='single-lottery-ticket'>
      <div className='ticket-name'>
        {props.ticketName}
      </div>
      <div className='winning-numbers'>
        {props.winningNumbers.map((number, key) => (
          <WinningNumber
            key={key}
            number={number} 
          />
        ))}
      </div>
      <div className='ticket-slots'>
        {props.slots.map((slot, key) => (
          <TicketSlot 
            number={slot}
            key={key}
            winners={props.winningNumbers}
          />
        ))}
      </div>
    </div>
  )
}

export default LotteryTicket