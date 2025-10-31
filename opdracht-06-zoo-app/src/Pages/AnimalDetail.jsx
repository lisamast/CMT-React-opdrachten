import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import animals from '../animals.js';

const AnimalDetail = () => {
  const { animalId } = useParams();
  const navigate = useNavigate();
  const [animalList, setAnimalList] = useState(animals);
  

  const animal = animalList.find(p => p.id === Number(animalId));

  if (!animal) {
    return <div>Dier niet gevonden!</div>;
  }

  return (
    <section>
      <button onClick={() => navigate('/')}>
        ← Terug naar home
      </button>
      
    
      <img src={animal.imageUrl} alt="" />
      <h1>{animal.name}</h1>
      <h2>Leefomgeving: {animal.habitat}</h2>
      <h2>Dieet: {animal.diet}</h2>
      <p>Beschrijving: {animal.description}</p>
    </section>
  );
};

export default AnimalDetail;