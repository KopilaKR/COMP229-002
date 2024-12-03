import React, { useEffect, useState } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/api/contacts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || 'Unknown error');
        }

        const data = await response.json();
        setContacts(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const deleteContact = async (contactId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3000/api/contacts/${contactId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Unknown error');
      }

      setContacts(contacts.filter(contact => contact._id !== contactId));
    } catch (error) {
      setError(error.message);
      console.error('Error deleting contact:', error);
    }
  };

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="contact-list">
      <h2>All Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id} className="contact-item">
            <h3>{contact.typeOfService}</h3>
            <p>{contact.firstname} {contact.lastname}</p>
            <p>{contact.email}</p>
            <p>{contact.comments}</p>
            <button onClick={() => deleteContact(contact._id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
