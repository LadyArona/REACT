const TemplateExpressions = () => {
  const name = "Talliny"
  const data = {
    age: 32,
    job: "Software Developer"
  }

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <p>{4 + 4}</p>
      {console.log(`JSX React`)}
    </div>
  )
}

export default TemplateExpressions