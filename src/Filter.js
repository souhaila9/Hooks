import React from 'react'

const Filter = ({searchMov}) => {
  return (
    <div>
      <input  placeholder='search' onChange={(e) => searchMov(e.target.value) } />
    </div>
  )
}

export default Filter
