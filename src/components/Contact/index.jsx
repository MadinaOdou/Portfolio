import "./index.scss";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact me</h2>
      <div className="contact-form">
        <form className="flex-column">
          <input type="text" id="name" placeholder="Name"></input>
          <input type="email" id="email" placeholder="Email"></input>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <button>Envoyer</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
