import React from 'react'
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';

const ContactItem = ({imageURL, name , tag}) => {
  return (
    <div className="contact_item">
        <ContactItemImage imageURL={imageURL}/>
        <ContactItemBody name={name} tag={tag} />
    </div>
  ) 
}

export default ContactItem