import React, { useState } from 'react'

const ExUseState5 = () => {
    const [users] = useState([   { nome: "Alice", idade: 25, cidade: "São Paulo" },
    { nome: "Bob", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Carol", idade: 40, cidade: "São Paulo" },
    { nome: "David", idade: 28, cidade: "São Paulo" },
    { nome: "Eve", idade: 32, cidade: "São Paulo" }, ])



    const filterUsers = users.filter((item) =>item.idade > 30 && item.cidade === "São Paulo")


    // const citySearch = []  
    // const nameSeach = []

    // users.forEach(word =>{
    //     if (word.idade > 30 && word.cidade === 'São Paulo') {
    //         citySearch.push(word.nome)
    //         nameSeach.push(word.cidade)
    //     }
    // })

  return (
    <div>
        <h1>ExUseState5</h1>
        {filterUsers.map((item,index)=>(
            <div key={index}>
                <li>Nome: {item.nome}</li>
                <li>Cidade: {item.cidade}</li>
                <li>Idade: {item.idade}</li>
            </div>
        ))}
    </div>
  )
}

export default ExUseState5