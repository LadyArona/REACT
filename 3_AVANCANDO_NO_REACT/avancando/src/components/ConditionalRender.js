import React, { useState } from 'react'

const ConditionalRender = () => {
  const [x] = useState(false)
  return (
    <div>
      <h1>X será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é false!</p>}
    </div>
  )
}

export default ConditionalRender