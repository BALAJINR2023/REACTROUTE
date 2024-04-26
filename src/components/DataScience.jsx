import React from 'react'
import Data from '../Data';
import Cards from '../Cards';
const DataScience = () => {
  return (
    <>
    <div>
    {Data
        .filter((data) => data.tag === "DS")
        .map((data) => (
          <Cards key={data.id} {...data} />
        ))}
    </div>
    </>
  )
}

export default DataScience