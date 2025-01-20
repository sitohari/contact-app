import React from 'react'

export const DeleteButton = ({id, onDelete}) => {
  return (
    <button className='contact_item_delete' onClick={() => onDelete(id)}>x</button>
  )
}
