import React from 'react'

const InventorySlot = (props) => {
  return (
    <div className='inventory-slot'>
      <div className='option-buttons'>
        { props.sell ?
          <button
            onClick={() => props.onSellItem()}
            className='option-button'
          >
            Sell
          </button>
        : props.drop ?
          <button
            onClick={() => props.onDropItem()}
            className='option-button'
          >
            Drop
          </button>
        :
          null
        }
      </div>
      <div className='inv-slot-label'>
        ${props.item.value}
      </div>
      <div className='inv-slot-label'>
        {props.item.size}kg
      </div>
      <div className='inv-slot-label'>
        Lvl. {props.item.difficulty}
      </div>
    </div>
  )
}

export default InventorySlot