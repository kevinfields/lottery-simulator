import React from 'react'

const WalletTicketSlip = (props) => {

  const finished = props.ticket.claimed ? 'Finished' : 'Unfinished';

  return (
    <div className='wallet-ticket-slip'>
      <div className='ticket-slip-name'>
        {props.ticket.ticketName}
      </div>
      <div className='ticket-slip-value'>
        ${(props.ticket.winningNumbers.length - 2) * 5}
      </div>
      <div className='ticket-status'>
        {"("}{finished}{")"}
      </div>
      <button onClick={() => props.openTicket()}>
        View This Ticket
      </button>
    </div>
  )
}

export default WalletTicketSlip