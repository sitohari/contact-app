import React from 'react'

const ContactItemImage = ({imageURL}) => {
  return (
    <div className="contact_item_image">
        <img src={imageURL} alt="contact-avatar" />
    </div>
  )
}

export default ContactItemImage