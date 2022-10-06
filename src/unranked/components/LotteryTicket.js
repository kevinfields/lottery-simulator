import React, {useState, useEffect} from 'react'
import TicketSlot from './TicketSlot'
import WinningNumber from './WinningNumber'

const LotteryTicket = (props) => {

  const [winnings, setWinnings] = useState({
    numbers: [],
    individualNumbers: [],
    value: 0,
  });

  const adjustWinnings = (num) => {

    let newNumbers = [...winnings.numbers];
    newNumbers.push(num);

    let newIndividuals = [...winnings.individualNumbers];

    let newValue = winnings.value;

    if (!newIndividuals.includes(num)) {
      newIndividuals.push(num);
      newValue += 10;
    } else {
      newValue += 5;
    };

    setWinnings({
      numbers: newNumbers,
      individualNumbers: newIndividuals,
      value: newValue,
    });
  };

  return (
    <div className='single-lottery-ticket'>
      <div className='ticket-name'>
        {props.ticket.ticketName}
      </div>
      <div className='winning-numbers'>
        {props.ticket.winningNumbers.map((number, key) => (
          <WinningNumber
            key={key}
            number={number} 
          />
        ))}
      </div>
      <div className='ticket-slots'>
        {props.ticket.slots.map((slot, key) => (
          <TicketSlot 
            number={slot}
            key={key}
            winners={props.ticket.winningNumbers}
            addWinner={(num) => adjustWinnings(num)}
          />
        ))}
      </div>
      <div className='known-data'>
          Winnings: ${winnings.value}
      </div>
    </div>
  )
}

export default LotteryTicket