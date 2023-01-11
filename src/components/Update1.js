import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const Update1 = () => {



  const params1 = useParams();
  const { id } = params1;


  const [name1, setName1] = useState("")
  const [brand1, setBrand1] = useState("")
  const [price1, setPrice1] = useState("")



  console.log("hello from use effect udatefile is runnig ")
  useEffect(() => {
    axios.get(`/api/v1/products/${id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',

      },

      withCredentials: true,
      credentials: 'same-origin',
    })
      .then((res) => {
        console.log(res.data);
        setName1(res.data.name)
        setBrand1(res.data.brand)
        setPrice1(res.data.price)

      })

  },[id] )

  const sub=(e)=>{
    e.preventDefault();
    axios.patch(`/api/v1/products/${id}`,{
      name:name1,
      brand:brand1,
      price:price1
    },
      {headers:{'Content-type':'application/json'}}
    ).then((res)=>{
      console.log(res,"done?")
    })
    window.location.href='/';

  }

  return (
    <>
      <form>
        <label>Name</label><br />
        <input type="text" value={name1} onChange={(e) => setName1(e.target.value)} /><br />
        <label>Brand</label><br />
        <input type="text" value={brand1} onChange={(e) => setBrand1(e.target.value)} /><br />
        <label>Price</label><br />
        <input type="text" value={price1} onChange={(e) => setPrice1(e.target.value)} /><br />
        <button onClick={sub}>Update</button><br />
      </form>
    </>
  )
}

export default Update1