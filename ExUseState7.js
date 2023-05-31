import React, { useState } from 'react'

const ExUseState7 = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    
    const hanldeForm =(e) =>{
        e.preventDefault()
        setName('')
        setEmail('')

        if(name === '' || email === ''){
            return alert('Preencha todos os campos')
        }
        else{
            return alert(`Informações enviadas com sucesso ${name} ${email}`)
        } 

    }

  return (
    <div>
        <h1>ExUseState7</h1>
        <div>
            <form action="">
               <label htmlFor="">Nome
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
               </label>

               <label htmlFor="">Email
               <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
               </label>
               
               <button onClick={(hanldeForm)}>Enviar</button>
            </form>
        </div>


    </div>
  )
}

export default ExUseState7