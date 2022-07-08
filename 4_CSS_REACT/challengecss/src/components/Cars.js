import styles from './Cars.module.css'

const Cars = ({id, isNew, brand, color}) => {
  return (
    <div className={isNew ? styles.carNew : styles.carUsed }>
      <h2>Car Details:</h2>
      <ol>
        <li key={`brand${id}`}>Brand: {brand}</li>
        <li key={`cor${id}`}>Cor: {color}</li>
      </ol>
      <p><strong>Este carro é {isNew ? 'novo' : 'usado' }!</strong></p>
    </div>
  )
}

export default Cars