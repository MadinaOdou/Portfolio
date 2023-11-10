import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

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
          alert("Votre message a été envoyé !");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });
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
            value={formData.user_name}
            onChange={(e) =>
              setFormData({ ...formData, user_name: e.target.value })
            }
          ></input>
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            value={formData.user_email}
            onChange={(e) =>
              setFormData({ ...formData, user_email: e.target.value })
            }
          ></input>
          <textarea
            name="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
          <button className="contact-form--btn" type="submit" value="Envoyer">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
