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
  
  const adjustViewedSlots = (key) => {
    props.adjustViewedSlots(key);
  };

  const claimWinnings = () => {
    props.claimWinnings(winnings.value);
    setWinnings({...winnings, value: 0});
  }

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
            number={slot.number}
            opened={slot.viewed}
            key={key}
            index={key}
            winners={props.ticket.winningNumbers}
            addWinner={(num) => adjustWinnings(num)}
            addOpened={() => adjustViewedSlots(key)}
          />
        ))}
      </div>
      <div className='known-data'>
          Winnings: ${winnings.value}
      </div>
      <div className='claim-winnings'>
        {props.ticket.claimed ? 
          <div className='winnings-summary'>
            You have claimed ${winnings.value}
          </div>
        :
          <button
            className='claim-winnings-button'
            onClick={() => claimWinnings()}
          >
            Claim Winnings
          </button>
        }
      </div>
    </div>
  )
}

export default LotteryTicket