import React from 'react'

const InventorySlot = (props) => {
  return (
    <div className='inventory-slot'>
      <div className='option-buttons'>
        
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