import React, {useState, useEffect} from 'react';
import Loading from '../../components/Loading';
import loadTicket from '../../functions/loadTicket';
import LotteryTicket from '../components/LotteryTicket';
import '../UnrankedStyles.css';
import '../../styles/LotteryTicket.css';
const UnrankedPage = () => {
 
  const [loading, setLoading] = useState(true);
  const [money, setMoney] = useState(10);
  const [tickets, setTickets] = useState([]);

  const loadTickets = () => {
    let catcher = [];
    for (let i=0; i<3; i++) {
      catcher.push(loadTicket(3, 30, 0.1));
    };
    setTickets(catcher);
    setLoading(false);
  };

  useEffect(() => {
    loadTickets();
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
          {tickets.map(ticket => (
            <LotteryTicket
              ticketName={ticket.ticketName}
              winningNumbers={ticket.winningNumbers}
            />
          ))}
        </div>
      </> }
    </div>
  )
}

export default UnrankedPage