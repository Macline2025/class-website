
const students = [
  {
    id: 'SD001',
    name: 'AGATESI deborah',
    trade: 'Software Development'
  },
  {
    id: 'SD002',
    name: 'TUYIZERE Emmanuel',
    trade: 'Networking and Cybersecurity'
  },
  {
    id: 'SD003',
    name: 'Ganza lippa muhire',
    trade: 'computer science'
  },
  {
    id: 'SD004',
    name: 'nshuti tresor',
    trade: 'Software Development'
  },
  {
    id: 'SD005',
    name: 'AGATEESI Deborah',
    trade: 'Software Development'
  }
];

function Students({ className }) {
  return (
    <section>
      <h2>Our Students</h2>
      <p>Class: {className}</p>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Trade: {student.trade}</p>
            <hr />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Students;
