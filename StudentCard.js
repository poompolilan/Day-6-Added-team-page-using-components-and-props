function StudentCard({ photo, name, role }) {
  const handleImgError = (e) => {
    e.target.src = "https://via.placeholder.com/112x112.png?text=Photo";
    e.target.onerror = null; // Prevent infinite loop
  };

  return (
    <div className="card" aria-label={`Team member: ${name}, ${role}`}>
      <img 
        src={photo} 
        alt={`${name}'s profile`}
        onError={handleImgError}
        loading="lazy"
        width="112"
        height="112"
      />
      <div className="name">{name}</div>
      <p className="role">{role}</p>
    </div>
  );
}