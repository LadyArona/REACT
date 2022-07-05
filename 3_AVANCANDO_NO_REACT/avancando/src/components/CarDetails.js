import React from 'react'

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li key={`marca${brand}`}>Marca: {brand}</li>
        <li key={`km${km}`}>KM: {km}</li>
        <li key={`cor${color}`}>Cor: {color}</li>
      </ul>
      {newCar && <p><strong>Este carro é novo!</strong></p>}
    </div>
  )
}

export default CarDetails