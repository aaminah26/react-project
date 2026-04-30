import StudentCard from './StudentCard'
const students = [
  { id: 1, name: "ram", age: 32, email: "ravi@test.com", city: "Kuppam" },
  { id: 2, name: "sita", age: 28, email: "priya@test.com", city: "Chennai" },
  { id: 3, name: "hayan", age: 19, email: "arjun@test.com", city: "Bangalore" },
  { id: 4, name: "ahana", age: 18, email: "deepa@test.com", city: "Hyderabad" },
];
export default function StudentList() {
  return (
    <section className="sma-section">
      <div className="sma-section-header">
        <h2 className="sma-section-title">All Students</h2>
        <span className="sma-student-count">{students.length} students</span>
      </div>
      <div className="sma-student-grid">
        {students.map(s => (
          <StudentCard
            key={s.id}
            name={s.name}
            age={s.age}
            email={s.email}
            city={s.city}
          />
        ))}
      </div>
    </section>
  );
}