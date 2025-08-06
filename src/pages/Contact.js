// src/pages/Contact.js

import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Message sent:', formData);
    alert('Message Sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>

      <div className="contact-info">
        <p><strong>Email:</strong> mansoorzarish@gmail.com</p>
        <p><strong>Phone:</strong> <a href="tel:0310-7083044">0310-7083044</a></p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/zarish-mansoor-a9320b307"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/zarish-mansoor-a9320b307
          </a>
        </p>
      </div>

      <h3>Send Me a Message</h3>

      <form className="contact-form" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="name">Name:</label></td>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email:</label></td>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="message">Message:</label></td>
              <td>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td><button type="submit">Send</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </section>
  );
}

export default Contact;

