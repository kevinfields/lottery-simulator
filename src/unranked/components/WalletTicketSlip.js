import React from 'react'

const WalletTicketSlip = (props) => {
  return (
    <div className='wallet-ticket-slip'>
      <div className='ticket-slip-name'>
        {props.ticket.ticketName}
      </div>
      <div className='ticket-slip-value'>
        ${(props.ticket.winningNumbers.length - 2) * 5}
      </div>
      <button onClick={() => props.openTicket()}>
        View This Ticket
      </button>
    </div>
  )
}

export default WalletTicketSlip