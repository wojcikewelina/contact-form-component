import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



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
      );
  };

  return (
    <div>
      <h3>Contact us</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
              console.log(name);
            }}
          />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name={name} />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <div>
          <input type="submit" value="Send"  />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
