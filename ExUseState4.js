import React, { useState } from "react";

const ExUseState4 = () => {
  const [users] = useState([
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 17 },
    { nome: "Carol", idade: 32 },
    { nome: "David", idade: 14 },
    { nome: "Eve", idade: 19 },
  ]);

  const filterUser = users.filter((item) => item.idade > 18)


  return( 
    <div>
        <h1>ExUseState4</h1>
        {filterUser.map((item,index)=>(
            <div key={index}>
                Usuários menores com menos de 18 anos: {item.nome} {item.idade}
            </div>
        ))}
    
    </div>
  )
};

export default ExUseState4;
