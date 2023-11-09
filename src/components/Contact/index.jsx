import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o5oaf1r",
        "template_e785dem",
        form.current,
        "bIiiFoYgO-25NZ4sb"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="contact">
      <h2>Me contacter</h2>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail} className="flex-column">
          <input
            type="text"
            name="user_name"
            placeholder="Prénom et nom"
            required
          ></input>
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
          ></input>
          <textarea name="message" placeholder="Message" required></textarea>
          <button className="contact-form--btn" type="submit" value="Envoyer">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
