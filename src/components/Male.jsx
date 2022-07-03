import React from 'react'

const Male = ({data}) => {
  return (
    <div>
      <ul>
        {data.map((male,index) => (
          <li key ={index}>{male}</li>
        ))}
      </ul>
    </div>
  )
}

export default Male