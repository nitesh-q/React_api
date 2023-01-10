import axios from 'axios'
import React, { useState } from 'react'

const Create1 = () => {
  const [name,setName]=useState("")
  const [brand,setBrand]=useState("")
  const [price,setPrice]=useState("")

  // post request
  const post1=(e)=>{
    e.preventDefault();
    const url1 = 'api/v1/products/';
    axios.post(url1,{
      name:name,
      brand:brand,
      price:price
    }).then((res)=> {console.log(res)})
  }
  console.log(name)
  return (
    <>
    <form>
      <label>Name</label><br/>
      <input type="text" value={name}  onChange={(e)=>setName(e.target.value)}/><br/>
      <label>Brand</label><br/>
      <input type="text" value={brand}  onChange={(e)=>setBrand(e.target.value)}/><br/>
      <label>Price</label><br/>
      <input type="text" value={price}  onChange={(e)=>setPrice(e.target.value)}/><br/>
      <button onClick={post1}>Create new</button><br/>
    </form>
    </>
  )
}

export default Create1