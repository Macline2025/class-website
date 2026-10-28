
function Contact({ schoolName, onHome }) {
  return (
    <section>
      <h2>Contact Us</h2>

      <p>School Name: {schoolName}</p>
      <p>Location: Rwanda</p>
      <p>
        Email:{' '}
        <a href="mailto:kivumu@example.com">
          kivumu@example.com
        </a>
      </p>

      <button onClick={onHome}>
        Return to Home
      </button>
    </section>
  );
}

export default Contact;
