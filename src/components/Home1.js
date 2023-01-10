import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const url = 'api/v1/products/';
const Home1 = () => {
    const [api_get, setApi] = useState([]);

    //api
    useEffect(() => {
        console.log("hello from use effect")
        axios.get(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Method': "POST,GET,PUT,DELETE,PATH,OPTIONS,HEAD"
            },

            withCredentials: true,
            credentials: 'same-origin',
        })
            .then((res) => {
                console.log(res);
                setApi(res.data)
            })
    }, [])

    return (
        <>
            <table>
            <thead>
                <tr>
                    <th colSpan={6}><Link to='/create' style={{textDecoration:'none'}} className='color2'>New</Link></th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {api_get?.map((usr1, index) =>
                    <tr key={index}>
                        <td>{usr1.name}</td>
                        <td>{usr1.brand}</td>
                        <td>{usr1.price}</td>
                        <td ><Link to='/update' style={{textDecoration:'none'}} className='color1'>Update</Link></td>
                        <td ><Link to='/destroy' style={{textDecoration:'none'}} className='color2'>Destroy</Link></td>
                        
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
}

export default Home1