import "./Contactformstyles.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tdpmktp', 'template_5dj09rw', form.current, 'rNEWneEgbUcV9_h3s')
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
      {isSent && <p className="success-message">Message sent successfully!</p>}
      <div className="contact-detail">
      <h2>Find Us</h2>
      <p>You can visit our Offices in <strong>Kirima Sub-County</strong> P.O.BOX 10 Kanungu</p>
      <p>You can also Call us directily via <strong> +256 788 809381 +256 758 667299 or WhatsApp +256 772 605121</strong></p>
      <p>Or you can Email us via <strong> omukaziwomutima@gmail.com </strong> or visit our website <strong>omukaziwomutima.org</strong></p>
      </div>
    </div>
  );
}
export default ContactForm;

