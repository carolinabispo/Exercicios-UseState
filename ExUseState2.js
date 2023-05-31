import { useState } from "react"

const ExUseState2 = () => {
    const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    
    const filterNumbers = numbers.filter((item) => item > 5 )

  return (
    <div>
        <h1>ExUseState2</h1>
        {filterNumbers.map((item, index)=>(
            <div key={index}>
                <li>{item}</li>
            </div>
        ))}
    </div>
  )
}

export default ExUseState2