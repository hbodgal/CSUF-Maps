import React, {useState} from 'react';
import logo from './logo.png';
import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  const initialCoords = { lat: 33.882340144512064, lng: -117.88510707821175 };
  const [selectedCoords, setSelectedCoords] = useState(initialCoords);
  const handleSearch = (lat: any, lng: any) => {
    setSelectedCoords({ lat, lng });
  };
  return (
    <div className="App">
    <Navbar onSearch={handleSearch}/>
    <Map selectedCoords={selectedCoords}/>
    </div>
  );
}

export default App;
