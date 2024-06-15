import "./contact.scss"
import { useState } from "react";
import validator from "validator";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailRequiredError, setEmailRequiredError] = useState(false);
  const [nameRequiredError, setNameRequiredError] = useState(false);
  const [messageRequiredError, setMessageRequiredError] = useState(false);
  const [invalidEmailError, setInvalidEmailError] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  
  const handleNameBlur = () => {
    if (name === "") {
      setNameRequiredError(true);
    } else {
      setNameRequiredError(false);
    }
  }

  const handleEmailBlur = () => {
    if (email === "") {
      setEmailRequiredError(true);
    } else if (!validator.isEmail(email)) {
      setInvalidEmailError(true);
    } else {
      setEmailRequiredError(false);
      setInvalidEmailError(false);
    }
  }

  const handleEmailFocus = () => {
    setEmailRequiredError(false);
    setInvalidEmailError(false);
  }

  const handleMessageBlur = () => {
    if (message === "") {
      setMessageRequiredError(true);
    } else {
      setMessageRequiredError(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmit(true);
  }




  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <section className="ContactSection">
      <form>
        <h2>Contact</h2>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          onFocus={() => setNameRequiredError(false)}
          type="text"
          id="name"
          name="name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          onFocus={handleEmailFocus}
          type="email"
          id="email"
          name="email"
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          value={message}
          onChange={handleMessageChange}
          onBlur={handleMessageBlur}
          onFocus={() => setMessageRequiredError(false)}
          id="message"
          name="message"
          required
        ></textarea>
        {nameRequiredError && <p className="errorMessage">Name is required.</p>}
        {emailRequiredError && (
          <p className="errorMessage">Email is required.</p>
        )}
        {invalidEmailError && <p className="errorMessage">Email is invalid.</p>}
        {messageRequiredError && (
          <p className="errorMessage">Message is required.</p>
        )}
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
        { formSubmit && <p className="errorMessage">Form Submitted!</p>}
      </form>
    </section>
  );
}

export default Contact;