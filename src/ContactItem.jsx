import React from 'react'
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import { DeleteButton } from './DeleteButton';

const ContactItem = ({imageURL, name , tag, id, onDelete}) => {
  return (
    <div className="contact_item">
        <ContactItemImage imageURL={imageURL}/>
        <ContactItemBody name={name} tag={tag} />
        <DeleteButton id={id} onDelete={onDelete}/>
    </div>
  ) 
}

export default ContactItem