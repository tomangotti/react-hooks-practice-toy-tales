import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(toys => setToyList(toys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy) {
    const updatedToyList = [...toyList, newToy]
    setToyList(updatedToyList);
  }
  function removeDeletedToy(id) {
    const filteredToys = toyList.filter((toy) => {
      return toy.id !== id;
    })
    setToyList(filteredToys)
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} removeDeletedToy={removeDeletedToy} />
    </>
  );
}

export default App;


