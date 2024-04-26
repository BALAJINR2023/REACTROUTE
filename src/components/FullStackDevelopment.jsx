import React from 'react'
import Data from '../Data';
import Cards from '../Cards';
const FullStackDevelopment = () => {
  return (
    <>
    <div>
    {Data
        .filter((data) => data.tag === "FSD")
        .map((data) => (
          <Cards key={data.id} {...data} />
        ))}
    </div>
    </>
  )
}

export default FullStackDevelopment