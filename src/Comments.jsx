import React from 'react'

const Comments = ({data}) => {
  return (
    <div>
      <ol>
        {data.map((comment,index) => (
          <li key={index}>{comment}</li>
        ))}
      </ol>
    </div>
  )
}

export default Comments