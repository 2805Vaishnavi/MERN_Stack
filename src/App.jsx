import { useState } from "react";
import "./App.css";
import pets from "./data/pets";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import AdoptPage from "./Pages/AdoptPage";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [page, setPage] = useState("home");
  const [selectedPet, setSelectedPet] = useState(null);

  // 🔐 LOGIN / SIGNUP FIRST
  if (!isAuth) {
    return showSignup ? (
      <SignupPage
        onSignup={() => {
          setShowSignup(false);
          setIsAuth(true);
        }}
        goToLogin={() => setShowSignup(false)}
      />
    ) : (
      <LoginPage
        onLogin={() => setIsAuth(true)}
        goToSignup={() => setShowSignup(true)}
      />
    );
  }

  // 🐾 ADOPT PAGE
  if (page === "adopt" && selectedPet) {
    return (
      <AdoptPage
        pet={selectedPet}
        onBack={() => {
          setPage("home");
          setSelectedPet(null);
        }}
      />
    );
  }

  // 🏠 HOME PAGE
  return (
    <div className="container">
      <h1 className="heading">🐾 Pet Adoption App</h1>
      <p className="sub-heading">Find a loving home for adorable pets </p>

      <div className="pet-grid">
        {pets.map((pet) => (
          <div className="pet-card" key={pet.id}>
            <img
              src={pet.image}
              alt={pet.name}
              className="pet-image"
            />

            <h3 className="pet-name">{pet.name}</h3>

            <p><b>Type:</b> {pet.type}</p>
            <p><b>Breed:</b> {pet.breed}</p>
            <p><b>Age:</b> {pet.age}</p>
            <p><b>Gender:</b> {pet.gender}</p>
            <p><b>Location:</b> {pet.location}</p>

            <p className="pet-desc">{pet.description}</p>

            <button
              className="adopt-btn"
              onClick={() => {
                setSelectedPet(pet);
                setPage("adopt");
              }}
            >
              Adopt Me 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
