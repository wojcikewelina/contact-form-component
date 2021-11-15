import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactComponentStyle.scss';

const ContactUs = () => {
  //Przygotowałam formularz z wykorzystaniem emailjs.com //

  const form = useRef();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_u6fqojh',
        'template_99vm2f4',
        form.current,
        'user_5qrZifmSTry4T8BjK1sT9'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      });
  };

  return (
    <div className="contact-form">
      <h3>Contact us</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-element">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div className="input-element">
          <label>Telefon</label>
          <input
            type="tel"
            name="phone"
            onChange={handlePhoneChange}
            value={phone}
          />
        </div>
        <div className="input-element">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div className="input-element">
          <label>Message</label>
          <textarea
            name="message"
            onChange={handleMessageChange}
            value={message}
          />
        </div>
        <div>
          <input className="submit-button" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
