import React from 'react'

const TicketDisplay = (props) => {
  return (
    <div className='ticket-display'>
      <div className='ticket-name'>
        {props.ticket.ticketName}
      </div>
      <div className='winning-numbers'>
        {props.ticket.winningNumbers.map((number, key) => (
          <div 
            className='winning-number-slot' 
            key={key}
          />
        ))}
      </div>
      <div className='ticket-slots'>
        {props.ticket.slots.map((slot, key) => (
          <div
            className='ticket-slot'
            key={key}
          />
        ))}
      </div>
      <button
        className='buy-ticket-button'
        onClick={() => props.buyTicket()}
      >
        Buy This Ticket ({props.price})
      </button>
    </div>
  )
}

export default TicketDisplay