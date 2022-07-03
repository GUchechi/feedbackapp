import React from 'react'

const Female = ({data}) => {
  return (
    <div>
        <ul>
            {data.map((female, index) => (
              <li key={index}>{female}</li>
            ))}
        </ul>
    </div>
  )
}

export default Female