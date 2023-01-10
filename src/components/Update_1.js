import React from 'react'

const Update1 = (props) => {
  return (
    <div>{
      props.pro1.map((user1,index)=>(
        <div key={index}>
        <li>{user1.name}</li>
        <li>{user1.brand}</li>
        <li>{user1.price}</li>
        </div>
      ))
      }</div>
  )
}

export default Update1