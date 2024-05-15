import pets from "../petsData";
import PetItem from "./PetItem";
import { useState } from "react";
function PetsList() {
  const [Searchy, setSearchy] = useState("");
  const [type, setType] = useState("");
  const SearchBar = pets.filter((pet) => {
    if (pet.name.toLowerCase().includes(Searchy.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });
  const FilteringPets = SearchBar.filter((pet) => {
    if (pet.type.includes(type)) {
      return true;
    } else {
      return false;
    }
  });

  const petList = FilteringPets.map((pet) => (
    <PetItem pet={pet} key={pet.id} />
  ));

  const PetSelector = (event) => {
    setType(event.target.value);
  };
  const handleBar = (e) => {
    setSearchy(e.target.value);
  };
  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  onChange={handleBar}
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
              <br />
              Type:
              <select onChange={PetSelector} className="form-select">
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
