import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AnimalDetail from './Pages/AnimalDetail';

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals/:animalId" element={<AnimalDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;