import React from 'react'

const Header = ({data}) => {
  return (
    <div>{data}</div>
  )
}

Header.defaultProps = {
    data: 'Hello Dear!'
}

export default Header