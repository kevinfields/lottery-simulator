import React, {useState, useEffect} from 'react';
import Loading from '../../components/Loading';
import loadTicket from '../../functions/loadTicket';
import LotteryTicket from '../components/LotteryTicket';
import '../UnrankedStyles.css';
import '../../styles/LotteryTicket.css';
import TicketDisplay from '../components/TicketDisplay';
import WalletTicketSlip from '../components/WalletTicketSlip';
const UnrankedPage = () => {
 
  const [loading, setLoading] = useState(true);
  const [money, setMoney] = useState(10);
  const [forSale, setForSale] = useState([]);
  const [myTickets, setMyTickets] = useState([]);
  const [viewingShelf, setViewingShelf] = useState(true);
  const [openedTicket, setOpenedTicket] = useState(null);
  const [openedKey, setOpenedKey] = useState('');
  const [ticketInfoScreen, setTicketInfoScreen] = useState({
    open: false,
    info: {},
  });
  const [ticketChances, setTicketChances] = useState({
    extraWinners: 0,
    slots: 30,
    accuracy: 4,
  })

  const loadTickets = (count) => {
    let catcher = [];
    for (let i=ticketChances.extraWinners; i<count; i++) {
      catcher.push(loadTicket((i + 3), ticketChances.slots, (1 / ticketChances.accuracy)));
    };
    setForSale(catcher);
    setLoading(false);
  };

  const buyTicket = (key) => {

    let price = forSale[key].price;

    if (money < price) {
      return;
    };

    let ticketCatcher = [...forSale];
    let newestTicket = ticketCatcher.splice(key, 1);
  
    ticketCatcher.push(loadTicket((Number(ticketChances.extraWinners) + 3), ticketChances.slots, (1 / ticketChances.accuracy)));
    setForSale(ticketCatcher);

    let myCatcher = [...myTickets];

    myCatcher.push(newestTicket[0]);
    setMyTickets(myCatcher);
    setMoney(money - price);
  };

  const openTicket = (key) => {
    setViewingShelf(false);
    setOpenedTicket(myTickets[key]);
    setOpenedKey(key);
  };

  const adjustViewedSlots = (key, ticket) => {
    let copy = {...ticket};
    copy.slots[key].viewed = true;
    setOpenedTicket({
      ...copy,
    });

    let myTicketCatcher = [...myTickets];
    myTicketCatcher[ticket.index] = copy;
    setMyTickets(myTicketCatcher);

  };

  const adjustViewedWinnerSlots = (key, ticket) => {

    let copy = {...ticket};
    copy.winningNumbers[key].viewed = true;
    setOpenedTicket({
      ...copy,
    });

    let myTicketCatcher = [...myTickets];
    myTicketCatcher[ticket.index] = copy;
    setMyTickets(myTicketCatcher);
  }

  const claimWinnings = (value) => {
    setMoney(Number(money) + Number(value));
    setOpenedTicket({...openedTicket, claimed: true, winnings: Number(value)});

    let myTicketsCatcher = [...myTickets];
    myTicketsCatcher[openedKey] = {...openedTicket, claimed: true, winnings: Number(value)};
    setMyTickets(myTicketsCatcher);
  };

  const openTicketInfo = (key, open) => {


    if (open) {
      setTicketInfoScreen({
        open: true,
        info: {...myTickets[key]},
      });
    } else {
      setTicketInfoScreen({
        open: false,
        info: {},
      })
    }
  };

  const adjustWinnings = (value) => {
    let myTicketsCatcher = [...myTickets];
    myTicketsCatcher[openedKey] = {...openedTicket, winnings: Number(value)};
    setMyTickets(myTicketsCatcher);
  };

  useEffect(() => {
    loadTickets(3);
  }, []);


  return (
    <div className='page'>
      { loading ? 
        <Loading /> 
      : 
        <> 
          <h1 className='welcome-header'>
            Welcome to the Lottery Store!
          </h1>
          <div className='wallet-container'>
            <div className='current-funds'>Current Funds: ${money}</div>
            <div className='ticket-deck'>
              {myTickets.map((ticket, key) => (
                <WalletTicketSlip 
                  ticket={ticket} 
                  key={key}
                  openTicket={() => openTicket(key)}
                  openTicketInfo={() => openTicketInfo(key, true)}
                  closeTicketInfo={() => openTicketInfo(key, false)}
                />
              ))}
            </div>
          </div>
          {viewingShelf ?
          <>
            <div className='ticket-shelf'>
              {forSale.map((ticket, key) => (
                <TicketDisplay
                  key={key}
                  ticket={ticket}
                  buyTicket={() => buyTicket(key)}
                  price={(ticket.winningNumbers.length - 2) * 5}
                  funds={money}
                />
              ))}
            </div>
            <div className='funds-tracker'>
                <div>You have ${money}</div>
                {
                  money === 0 ?
                  <button onClick={() => setMoney(10)}>Restart</button>
                  :
                  null
                }
            </div>
            <div className="adjust-ticket-chances">
              <div className='ticket-adjuster-slot'>
                <label htmlFor='winners-adjuster'>Winners: </label>
                <input
                  id='winners-adjuster'
                  value={ticketChances.extraWinners}
                  type='number'
                  onChange={(e) => setTicketChances({...ticketChances, extraWinners: e.target.value})}
                />
              </div>
              <div className='ticket-adjuster-slot'>
                <label htmlFor='slots-adjuster'>Slots: </label>
                <input
                  id='slots-adjuster'
                  value={ticketChances.slots}
                  type='number'
                  onChange={(e) => setTicketChances({...ticketChances, slots: e.target.value})}
                />
              </div>
              <div className='ticket-adjuster-slot'>
                <label htmlFor='accuracy-adjuster'>Accuracy: </label>
                <input
                  id='accuracy-adjuster'
                  value={ticketChances.accuracy}
                  type='number'
                  onChange={(e) => setTicketChances({...ticketChances, accuracy: e.target.value})}
                />
              </div>
            </div>
            </>
          :
            <div className='opened-ticket-display'>
              <LotteryTicket
                ticket={openedTicket}
                adjustViewedSlots={(key) => adjustViewedSlots(key, openedTicket)}
                adjustViewedWinnerSlots={(key) => adjustViewedWinnerSlots(key, openedTicket)}
                adjustCurrentWinnings={(value) => adjustWinnings(value)}
                claimWinnings={(value, key) => claimWinnings(value, key)}
              />
              <button onClick={() => setViewingShelf(true)}>
                Go Back
              </button>
            </div>
          }
          { ticketInfoScreen.open ?
            <div className='ticket-info-screen'>
              <div className='ticket-info-item'>
                {ticketInfoScreen.info.claimed ? 'Claimed' : 'Unclaimed'}
              </div>
              <div className='ticket-info-item'>
                Value: ${ticketInfoScreen.info.totalValue}
              </div>
              <div className='ticket-info-item'>
                Current Winnings: ${ticketInfoScreen.info.winnings}
              </div>
            </div>
            :
            null
          }
        </>
      }
    </div>
  )
}

export default UnrankedPage