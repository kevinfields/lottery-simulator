import React from 'react'
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
          
      </div>
    </div>
  )
}

export default LotteryTicket