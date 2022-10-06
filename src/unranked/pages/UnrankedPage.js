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

  const loadTickets = (count) => {
    let catcher = [];
    for (let i=0; i<count; i++) {
      catcher.push(loadTicket((i + 3), 30, 0.25));
    };
    setForSale(catcher);
    setLoading(false);
  };

  const buyTicket = (key) => {

    
    let ticketCatcher = [...forSale];
    let newestTicket = ticketCatcher.splice(key, 1);

    ticketCatcher.push(loadTicket(((forSale[key].price / 5) + 2), 30, 0.25));
    setForSale(ticketCatcher);

    let myCatcher = [...myTickets];
    
    myCatcher.push(newestTicket[0]);
    setMyTickets(myCatcher);
  };


  useEffect(() => {
    loadTickets(3);
  }, [])

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
              />
            ))}
          </div>
        </div>
        <div className='ticket-shelf'>
          {forSale.map((ticket, key) => (
            <TicketDisplay
              key={key}
              ticket={ticket}
              buyTicket={() => buyTicket(key)}
              price={(ticket.winningNumbers.length - 2) * 5}
            />
          ))}
        </div>
      </> }
    </div>
  )
}

export default UnrankedPage