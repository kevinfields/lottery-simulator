import React, {useState, useEffect} from 'react'
import Loading from '../../components/Loading';
import getFishCoord from '../functions/getFishCoord';
import loadFish from '../functions/loadFish';
import Fish from './Fish';
import Inventory from './Inventory';
import Wallet from './Wallet';

const colorArray = ['gray', 'green', 'blue', 'red', 'black', 'purple'];

const Pond = (props) => {

  const [currentFish, setCurrentFish] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [money, setMoney] = useState(5);
  const [loading, setLoading] = useState(true);

  const loadFishes = () => {

    let fishNet = [];
    for (let i=0; i<5; i++) {

      let fish = loadFish(i);
      const fishCoords = getFishCoord(15, 90, 10, 80, fishNet, fish);
      fish = {
        ...fish,
        left: fishCoords.x, 
        bottom: fishCoords.y,
        borderColor: colorArray[i],
      };
      fishNet.push(fish);
    };
    setCurrentFish(fishNet);
    setLoading(false);
  };

  const attemptCatch = (key) => {

    let attempt = currentFish[key];
    const cost = Math.floor(attempt.value / 2);

    if (cost > money) {
      return;
    };

    let copy = [...currentFish];
    const difficulty = Math.floor(Math.random() * 5);
    const fishCoords = getFishCoord(15, 90, 10, 80, currentFish, attempt);
    copy[key] = {
      ...loadFish(difficulty),
      left: fishCoords.x, 
      bottom: fishCoords.y,
      borderColor: colorArray[difficulty],
    };
    if (Math.floor(Math.random() * attempt.difficulty) > attempt.difficulty - 2) {
      let invCopy = [...inventory];
      invCopy.push(attempt);
      setInventory(invCopy);
    };
    setCurrentFish(copy);
    setMoney(money - cost);
  };

  const sellItem = (key) => {

    let copy = [...inventory];
    copy.splice(key, 1);
    setInventory(copy);
    let earnings = inventory[key].value;
    setMoney(Number(money) + Number(earnings));

  };

  const dropItem = (key) => {

    let copy = [...inventory];
    copy.splice(key, 1);
    setInventory(copy);

  };

  useEffect(() => {
    loadFishes();
  }, []);

  return (
    <div className='pond'>
      {loading ? 
        <Loading />
        :
        <>
          {currentFish.map((fish, key) => (
            <Fish 
              fish={fish}
              key={key}
              attemptCatch={() => attemptCatch(key)}
            />
          ))}
          <Inventory 
            inventory={inventory}
            sellItem={(key) => sellItem(key)}
            dropItem={(key) => dropItem(key)}
          />
          <Wallet
            money={money}
          />
        </>
      }

    </div>
  )
}

export default Pond