import { useState } from "react";

function AdoptPage({ pet, onBack }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert(
      `Adoption Request Sent!\n\nPet: ${pet.name}\nBuyer: ${name}\nPhone: ${phone}`
    );

    onBack();
  }

  return (
    <div className="auth-container">
      <h2 className="adopt-title">
        Adopt <span className="adopt-pet-name">{pet.name}</span> 🐾
      </h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows="3"
          required
        />

        <button type="submit">Submit Adoption Request</button>
      </form>

      <button className="adopt-back-btn" onClick={onBack}>
        ⬅ Back
      </button>
    </div>
  );
}

export default AdoptPage;
