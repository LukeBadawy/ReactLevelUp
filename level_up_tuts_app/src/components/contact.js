import React from 'react';

const Contact = ({contact, item}) => 

  <li className="list-group-item list-group-item-action">
    {contact.name} {contact.phone} {item}
  </li>

export default Contact;