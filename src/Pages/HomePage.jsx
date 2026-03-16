import Home from "../Components/Home";
import PetCard from "../Components/PetCard";

function HomePage({ pets }) {
  return (
    <div>
      <Home />
      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          name={pet.name}
          type={pet.type}
          age={pet.age}
        />
      ))}
    </div>
  );
}

export default HomePage;
