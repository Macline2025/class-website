
function Home({ schoolName, className, onNavigate }) {
  return (
    <section>
      <h2>Welcome to Our Class Website</h2>

      <p>Welcome to {schoolName}.</p>
      <p>Class Level and Trade: {className}</p>

      <p>
        We are students studying Software Development.
        This website introduces our class, students, subjects,
        and school contact information.
      </p>

      <h3>Explore Our Website</h3>

      <button onClick={() => onNavigate('About')}>
        Learn About Our Class
      </button>{' '}

      <button onClick={() => onNavigate('Students')}>
        View Students
      </button>{' '}

      <button onClick={() => onNavigate('Contact')}>
        Contact Us
      </button>
    </section>
  );
}

export default Home;
