
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create1 from './components/Create1';
import Home1 from './components/Home1';
import Update1 from './components/Update1';

function App() {
return(
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home1/>}/>
  <Route path='/update/:id' element={<Update1/>}/>
  <Route path='/create' element={<Create1/>}/>
  <Route path="/cola/lol" element={"sxsxn"}/>
 </Routes>
 </BrowserRouter>
)
 

}

export default App;
