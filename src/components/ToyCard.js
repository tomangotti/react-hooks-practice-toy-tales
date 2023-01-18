import React, { useState } from "react";

function ToyCard({toy, removeDeletedToy}) {

  const [likes, setLikes] = useState(toy.likes)
  function handleDeletedToy(){
    removeDeletedToy(toy.id)
    
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: 'DELETE'
    })
  }
  
  function handleLike(){
    setLikes(count => count + 1)
    let newLikes = likes + 1;
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        likes: newLikes,
      })
    })
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike} >Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeletedToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
