import AddPet from "../Components/AddPet";

function AddPetPage({ onAddPet }) {
  return (
    <div>
      <AddPet onAddPet={onAddPet} />
    </div>
  );
}

export default AddPetPage;
