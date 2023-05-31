import React, { useState } from 'react'

const ExUseState6 = () => {
    const [pairNumbers] =useState([2,4,6,8,10,13,21,35,41])

    const filterPair = pairNumbers.filter((item) => item % 2 === 0)
    // const includesPair = pairNumbers.includes((item) => item % 2 === 0)

    

  return (
    <div>
        <h1>ExUseState6</h1>
        {/* {filterPair.map((item, index) =>(
            <div key={index}>
                {item}
            </div>
        ))} */}

         {pairNumbers ? pairNumbers.map((item)=>(
          <div>{item}</div>
         )): filterPair.map((item)=>(
          <div>{item}</div>
         ))}
     </div>
  )
}

export default ExUseState6

