import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, removeDeletedToy}) {
  
  const toys = toyList.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} removeDeletedToy={removeDeletedToy} />
  })

  return (
    <div id="toy-collection">{toys}</div>
  );
}

export default ToyContainer;

