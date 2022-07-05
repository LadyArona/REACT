const UserDetails = ({ id, nome, idade, profissao }) => {
  return (
    <div>
      <h2>Detalhes do usuário:</h2>
      <ul>
        <li key={`nome${id}`}>Nome: {nome}</li>
        <li key={`idade${id}`}>Idade: {idade}</li>
        <li key={`profissao${id}`}>Profissão: {profissao}</li>
      </ul>
      {idade >= 18 && <p><strong>Pode tirar carteira!</strong></p>}
    </div>
  )
}

export default UserDetails