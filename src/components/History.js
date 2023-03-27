import React from 'react'

function History({handlRestart}) {
  return (
    <ul className='history' > 
        <h4>History</h4>
        <button onClick={handlRestart} >Go to game start</button>   
    </ul>
  )
}

export default History