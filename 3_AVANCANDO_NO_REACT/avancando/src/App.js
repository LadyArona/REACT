import { useState } from 'react';
import './App.css';

import City from "./assets/city.jpg";
import CarDetails from './components/CarDetails';
import ChangeMessageState from './components/ChangeMessageState';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragments from './components/Fragments';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Message from './components/Message';
import ShowUserNane from './components/ShowUserNane';

function App() {
  const cars = [
    {id:1, brand: "Ferrari", km: 0, color: "Amarela", newCar: true},
    {id:2, brand: "KIA", km: 63546, color: "Azul", newCar: false},
    {id:3, brand: "Renault", km: 157995, color: "Verde", newCar: false},
  ]

  function showMessage() {
    console.log(`Evento do componente pai!`)
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Seção 3</h1>
      <h2>Avançando em React</h2>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserNane name="Talliny" />
      {/* destructuring */}
      <CarDetails brand="Ford" km={10000} color="Branco" newCar={false}  />
      <CarDetails brand="VW" km={0} color="Vermelho" newCar={true}  />
      <CarDetails brand="Ford" km={4500} color="Azul" newCar={false}  />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          km={car.km} 
          color={car.color} 
          newCar={car.newCar}  
        />
      ))}
      {/* Fragments */}
      <Fragments />
      {/* children */}
      <Container myValue="Testing">
        <p>Este é o filho</p>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State Lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
