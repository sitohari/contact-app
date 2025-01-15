import React from 'react'

function ContactItemBody({name, tag}) {
    return ( 
        <div className="contact_item_body">
            
            <h3 className="contact_item_title">{name}</h3>
            <p className="contact_item_tag">@{tag}</p>
        </div>
    );
}

export default ContactItemBody;