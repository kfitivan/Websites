import "./Contactformstyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
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
