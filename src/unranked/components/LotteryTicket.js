import React, {useState, useEffect} from 'react'
import TicketSlot from './TicketSlot'
import WinningNumber from './WinningNumber'

const LotteryTicket = (props) => {

  const [winnings, setWinnings] = useState({
    numbers: [],
    individualNumbers: [],
    value: props.ticket.winnings,
  });

  const [allowClaim, setAllowClaim] = useState(false);

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
    props.adjustCurrentWinnings(newValue);
  };
  
  const adjustViewedSlots = (key) => {
    props.adjustViewedSlots(key);
  };

  const adjustViewedWinnerSlots = (key) => {
    props.adjustViewedWinnerSlots(key);
  }

  const claimWinnings = () => {
    props.claimWinnings(props.ticket.totalValue);
  };

  useEffect(() => {

    let viewed = props.ticket.slots.every(slot => slot.viewed);
    if (viewed) {
      setAllowClaim(true);
    } else if (allowClaim && !viewed) {
      setAllowClaim(false);
    }
  }, [props.ticket])

  return (
    <div className='single-lottery-ticket'>
      <div className='ticket-name'>
        {props.ticket.ticketName}
      </div>
      <div className='winning-numbers'>
        {props.ticket.winningNumbers.map((number, key) => (
          <WinningNumber
            key={key}
            index={key}
            number={number.number}
            addOpened={() => adjustViewedWinnerSlots(key)}
            opened={number.viewed}
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
      {allowClaim ? 
        <div className='claim-winnings'>
          {props.ticket.claimed ? 
            <div className='winnings-summary'>
              You have claimed ${props.ticket.totalValue}
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
        : null
      }
    </div>
  )
}

export default LotteryTicket