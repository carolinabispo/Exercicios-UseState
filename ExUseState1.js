import { useState } from "react"

const ExUseState1 = () => {
    const [list] = useState(["Alice", "Bob", "Carol", "David", "Abimael", "Antonia", ]) 

    const filterList = list.filter((item)=>item.includes('A'))
    console.log(filterList);


  return (
    <div>
        <h1>Ex. 1 useState</h1>
        {filterList.map((nomes, index)=>(
            <div key={index}>
                <li>{nomes}</li>
            </div>
        ))}
        
    </div>
  )
}

export default ExUseState1