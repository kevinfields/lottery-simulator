import React from 'react'
import TicketSlot from './TicketSlot'
import WinningNumber from './WinningNumber'

const LotteryTicket = (props) => {

  return (
    <div className='single-lottery-ticket'>
      <div className='ticket-name'>
        {props.ticketName}
      </div>
      <div className='winning-numbers'>
        {props.winningNumbers.map(number => (
          <WinningNumber number={number} />
        ))}
      </div>
      <div className='ticket-slots'>
        {props.slots.map(slot => (
          <TicketSlot number={slot} />
        ))}
      </div>
    </div>
  )
}

export default LotteryTicket