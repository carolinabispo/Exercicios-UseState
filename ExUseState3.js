import React, { useState } from 'react'

const ExUseState3 = () => {
    const [wordList] = useState(['Maçã', 'Carro', 'Lugar', 'Panda' ])
    const containPanda = 'Panda'

    const pandaSearch =[]

    wordList.forEach(word =>{
        if(['Maçã', 'Carro', 'Lugar', 'Panda'].includes(word) && word.includes(containPanda))
        pandaSearch.push(word)
    })



  return (
    <div>
        <h1>ExUseState3</h1>
        {pandaSearch.map((item,index) =>(
            <div key={index}>
                {item}
            </div>
        ))}
    </div>
  )
}

export default ExUseState3