import './App.css';
import Cars from './components/Cars';

function App() {
  const cars = [
    {id: 1, isNew: true, brand: 'Ford', color: 'Red'},
    {id: 2, isNew: false, brand: 'VW', color: 'Green'},
    {id: 3, isNew: true, brand: 'Fiat', color: 'White'},
    {id: 4, isNew: true, brand: 'Toyota', color: 'Black'},
  ]

  return (
    <div className="App">
      <h1 className="headTitle">Welcome to the Car List</h1>
      {cars.map((car)=>(
        <Cars  
          id={car.id}
          isNew={car.isNew}
          brand={car.brand}
          color={car.color}
        />
      ))}
    </div>
  );
}

export default App;
