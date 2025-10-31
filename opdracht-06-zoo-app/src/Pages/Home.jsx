import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import animals from '../animals.js';
import Animal from '../components/Animal.jsx';

const Home = () => {
  const navigate = useNavigate();
  const [animalList, setAnimalList] = useState(animals);

  const goToDetail = (animalId) => {
    navigate(`/animals/${animalId}`);
  };

  return (
    <section>
      <h1>Opdracht 6 - Zoo App</h1>
      <h2>Zoo App</h2>
      
      {animalList.map(animal => (
        <Animal
          key={animal.id}
          animal={animal}
          onShowDetail={goToDetail}
        />
      ))}
    </section>
  );
};

export default Home;