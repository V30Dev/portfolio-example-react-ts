import { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="contact__right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input name="Email" type="text" placeholder="Email" />
          <textarea name="Message" placeholder="Message"></textarea>
          <button type="submit" onClick={() => setShowMessage(true)}>
            Send
          </button>
          {showMessage && (
            <span>Thanks for your message! I’ll get back to you soon.</span>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
