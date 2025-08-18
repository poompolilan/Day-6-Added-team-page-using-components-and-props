function App() {
  const teamMembers = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Frontend Developer",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "Backend Developer",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Charlie Brown",
      role: "UI/UX Designer",
      photo: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 4,
      name: "Diana Patel",
      role: "QA Engineer",
      photo: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  ];

  return (
    <div className="app">
      <header>
        <h1 className="title">Meet Our Team</h1>
      </header>
      <main>
        <div className="grid">
          {teamMembers.map((member) => (
            <StudentCard 
              key={member.id}
              photo={member.photo}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

// Mount React app
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);