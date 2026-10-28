
import { useState } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Students from './Students.jsx';
import Contact from './Contact.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [count, setCount] = useState(0);

  const schoolName = 'EAV KIVUMU TSS';
  const className = 'TVET Certificate IV - Software Development';

  function showPage(page) {
    setCurrentPage(page);
  }

  function renderPage() {
    switch (currentPage) {
      case 'About':
        return <About schoolName={schoolName} />;
      case 'Students':
        return <Students className={className} />;
      case 'Contact':
        return (
          <Contact
            schoolName={schoolName}
            onHome={() => showPage('Home')}
          />
        );
      default:
        return (
          <Home
            schoolName={schoolName}
            className={className}
            onNavigate={showPage}
          />
        );
    }
  }

  return (
    <main>
      <header>
        <h1>{schoolName}</h1>
        <p>{className}</p>
        <hr />

        <nav>
          <button onClick={() => showPage('Home')}>Home</button>{' '}
          <button onClick={() => showPage('About')}>About</button>{' '}
          <button onClick={() => showPage('Students')}>Students</button>{' '}
          <button onClick={() => showPage('Contact')}>Contact</button>
        </nav>
      </header>

      <hr />

      {renderPage()}

      <hr />

      <section>
        <h2>Click Counter</h2>
        <p>You have clicked the button {count} times.</p>
        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </section>

      <footer>
        <p>Class Website - Software Development</p>
      </footer>
    </main>
  );
}

export default App;
