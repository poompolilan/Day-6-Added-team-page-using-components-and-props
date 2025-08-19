function App() {
  const teamMembers = [
    {
      id: 1,
      name: "Virat kohli",
      role: "Cricketer",
      photo: "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg",
    },
    {
      id: 2,
      name: "Neeraj Chopra",
      role: "javelin thrower",
      photo: "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/08/Neeraj-Chopra-eyes-Diamond-League-final-javelin-throw-through-Lausanne-No-Arshad-Nadeem-scaled.webp",
    },
    {
      id: 3,
      name: "Messi",
      role: "Football player",
      photo: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt8a7df3ea3cb0fbec/637ca449c36f4b4b469855a3/Lionel_Messi(7).jpg?auto=webp&format=pjpg&width=3840&quality=60",
    },
    {
      id: 4,
      name: "Ronaldo",
      role: "Football player",
      photo: "https://images2.thanhnien.vn/528068263637045248/2023/10/15/cristiano-ronaldo-16973598904331934094389.jpeg",
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
