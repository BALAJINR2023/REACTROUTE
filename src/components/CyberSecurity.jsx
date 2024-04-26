import React from 'react'
import Data from '../Data';
import Cards from '../Cards';
const CyberSecurity = () => {
  return (
    <>
    <div>
    {Data
        .filter((data) => data.tag === "CS")
        .map((data) => (
          <Cards key={data.id} {...data} />
        ))}
    </div>
    </>
  )
}

export default CyberSecurity