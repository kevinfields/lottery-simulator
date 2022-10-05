import React, {useState, useEffect} from 'react'

const WinningNumber = (props) => {
 
  const [suffix, setSuffix] = useState('');
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {

    if (revealed) {
      setSuffix('-revealed')
    };

  }, [revealed]);

  return (
    <div 
      className={`winning-number-slot${suffix}`}
      onClick={() => setRevealed(true)}
    >
      { 
        revealed ?
          props.number
        :
          null
      }
    </div>
  )
}

export default WinningNumber