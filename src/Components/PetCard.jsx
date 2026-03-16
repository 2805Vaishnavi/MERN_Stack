function PetCard({ name, type, age }) {

  function handleAdopt() {
    alert(`You have applied to adopt ${name} 🐾`);
  }

  return (
    <div className="pet-card">
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>Age: {age}</p>
      <button onClick={handleAdopt}>Adopt</button>
    </div>
  );
}

export default PetCard;
