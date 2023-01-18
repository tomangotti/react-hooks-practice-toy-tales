import React from "react";

function ToyForm({handleNewToy}) {

  function handleSubmit(e){
    e.preventDefault();
    console.log(e.target.name.value)
    console.log(e.target.image.value)

    const newToy = {
      name: e.target.name.value,
      image: e.target.image.value,
      likes: 0
    }
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(toy => handleNewToy(toy))

    e.target.reset();
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit} >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
