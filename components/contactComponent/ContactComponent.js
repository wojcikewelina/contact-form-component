import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const ContactUs = () => {
  const form = useRef();

  

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
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
