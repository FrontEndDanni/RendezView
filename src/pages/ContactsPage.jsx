import React from 'react';
import '../styling/contactspage.css';

function ContactsPage() {
  const contacts = [
    { id: 1, name: 'John Doe', email: 'john@example.com', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Emily Brown', email: 'emily@example.com', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <div className="contact-list">
        {contacts.map((contact) => (
          <div className="contact-card" key={contact.id}>
            <img src={contact.image} alt={contact.name} />
            <h3>{contact.name}</h3>
            <p>Email: {contact.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactsPage;
