import emailjs from "@emailjs/browser";

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3pu54vk",
        "template_fn9jdn6",
        e.target,
        "bsM4u74Gj9OMMRn_j",
      )
      .then(
        () => alert("Message sent!"),
        (error) => alert("Failed: " + error.text),
      );

    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <p>Име*</p>
      <input name="name" required />
      <p>Имейл*</p>
      <input name="email" required />
      <p>Относно*</p>
      <input name="subject" required />
      <p>Съобщение*</p>
      <textarea name="message" required />
      <button type="submit">Send</button>
    </form>
  );
}
export default ContactForm;
