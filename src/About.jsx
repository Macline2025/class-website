
function About({ schoolName }) {
  return (
    <section>
      <h2>About Our Class</h2>

      <p>
        This website was created to share information about
        our class, students, and the subjects we study.
      </p>

      <p>
        Our school is {schoolName}, and our trade is
        Software Development.
      </p>

      <h3>About Software Development</h3>

      <p>
        Software Development involves designing, building,
        testing, and maintaining computer applications
        and websites.
      </p>

      <h3>Subjects and Skills We Learn</h3>

      <ul>
        <li>Front-End Development with ReactJS</li>
        <li>HTML and JavaScript Programming</li>
        <li>Database Management</li>
        <li>Back-End Development</li>
        <li>Git and GitHub</li>
      </ul>
    </section>
  );
}

export default About;
