
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create1 from './components/Create1';
import Home1 from './components/Home1';
import Update1 from './components/Update_1';
import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'api/v1/products/';

function App() {
  const [api_get, setApi] = useState([]);
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

 
return(
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home1/>}/>
  <Route path='/update' element={<Update1 pro1={api_get}/>}/>
  <Route path='/create' element={<Create1/>}/>
 </Routes>
 </BrowserRouter>
)
 

}

export default App;
