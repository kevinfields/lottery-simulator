import React from 'react'

const Wallet = (props) => {
  return (
    <div className='wallet'>
      ${props.money}
    </div>
  )
}

export default Wallet