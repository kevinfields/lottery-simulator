import React from 'react'

const Fish = (props) => {

  return (
    <div 
      className='fish'
      style={{
        borderColor: props.fish.borderColor,
        position: 'fixed',
        left: `${props.fish.left}vw`,
        bottom: `${props.fish.bottom}vh`,
        width: `${props.fish.size * 2}vw`,
        height: `${props.fish.size * 2}vw`,
      }}
    >
      <ul className='fish-stats'>
        <li>
          Value: {props.fish.value}
        </li>
        <li>
          Difficulty: {props.fish.difficulty}
        </li>
        <li>
          Weight: {props.fish.size}kg
        </li>
      </ul>
      <button onClick={() => props.attemptCatch()}>
        Try to Catch
      </button>
    </div>
  )
}

export default Fish