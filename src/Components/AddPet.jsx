import { useState } from "react";

function AddPet({ onAddPet }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
  e.preventDefault();

  if (name.length < 2) {
    alert("Pet name must be at least 2 characters");
    return;
  }

  if (type !== "Dog" && type !== "Cat") {
    alert("Type must be Dog or Cat");
    return;
  }

  if (age.length < 1) {
    alert("Please enter age");
    return;
  }

  const newPet = {
    id: Date.now(),
    name,
    type,
    age
  };

  onAddPet(newPet);

  setName("");
  setType("");
  setAge("");
}

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add New Pet</h2>

      <input
        type="text"
        placeholder="Pet Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Pet Type (Dog/Cat)"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Pet Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /><br />

      <button type="submit">Add Pet</button>
    </form>
  );
}

export default AddPet;
