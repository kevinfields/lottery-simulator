import React from 'react'
import InventorySlot from './InventorySlot'

const Inventory = (props) => {
  return (
    <div className='inventory'>
      {props.inventory.map((item, key) => (
        <InventorySlot 
          item={item} 
          key={key}
          sell={item.forSale}
          drop={!item.forSale}
          onSellItem={() => props.sellItem(key)}
          onDropItem={() => props.dropItem(key)}
        />
      ))}
    </div>
  )
}

export default Inventory