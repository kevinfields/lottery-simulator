import React, {useState, useEffect} from 'react'
import Loading from '../../components/Loading';
import loadFish from '../functions/loadFish';
import Fish from './Fish';

const colorArray = ['gray', 'green', 'blue', 'red', 'black', 'purple'];

const Pond = (props) => {

  const [currentFish, setCurrentFish] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadFishes = () => {

    let fishNet = [];
    for (let i=0; i<5; i++) {

      let fish = loadFish(i);
      fish = {
        ...fish,
        left: Math.floor(Math.random() * 70) + 15,
        bottom: Math.floor(Math.random() * 70) + 10,
        borderColor: colorArray[i],
      };
      fishNet.push(fish);
    };
    setCurrentFish(fishNet);
    setLoading(false);
  }

  useEffect(() => {
    loadFishes();
  }, []);

  return (
    <div className='pond'>
      {loading ? 
        <Loading />
        :
        currentFish.map((fish, key) => (
          <Fish 
            fish={fish}
            key={key}
            attemptCatch={() => console.log(JSON.stringify(fish))}
          />
        ))
      }
    </div>
  )
}

export default Pond