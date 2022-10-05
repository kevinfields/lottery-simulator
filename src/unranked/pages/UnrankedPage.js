import React, {useState, useEffect} from 'react';
import Loading from '../../components/Loading';
import loadTicket from '../../functions/loadTicket';
import LotteryTicket from '../components/LotteryTicket';
import '../UnrankedStyles.css';
import '../../styles/LotteryTicket.css';
import TicketDisplay from '../components/TicketDisplay';
const UnrankedPage = () => {
 
  const [loading, setLoading] = useState(true);
  const [money, setMoney] = useState(10);
  const [tickets, setTickets] = useState([]);

  const loadTickets = (count) => {
    let catcher = [];
    for (let i=0; i<count; i++) {
      catcher.push(loadTicket((i + 3), 30, 0.25));
    };
    setTickets(catcher);
    setLoading(false);
  };

  const buyTicket = (ticket) => {

    let ticketIndex = tickets.find(tkt => tkt.price === ticket.price);
    let ticketCatcher = [...tickets];
    ticketCatcher.splice(ticketIndex, 1);
    setTickets(ticketCatcher);
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
          Current Funds: ${money}
        </div>
        <div className='ticket-shelf'>
          {tickets.map((ticket, key) => (
            <TicketDisplay
              key={key}
              ticket={ticket}
              buyTicket={() => buyTicket(ticket)}
              price={(key + 1) * 5}
            />
          ))}
        </div>
      </> }
    </div>
  )
}

export default UnrankedPage