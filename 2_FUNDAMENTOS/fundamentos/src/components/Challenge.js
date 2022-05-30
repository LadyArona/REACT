const Challenge = () => {
  const a = 5
  const b = 8

  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={() => console.log(a+b)}>Soma inline</button>
    </div>
  )
}

export default Challenge