import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Header from './Header'
import Addproduct from './Products/Addproduct'
import ViewProduct from './Products/Viewproduct'
import EditProduct from './EditProduct'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header>
      </Header>
      <div className='app'>
<Routes>
  <Route path='add' element={<Addproduct></Addproduct>}></Route>
    <Route path='view' element={<ViewProduct></ViewProduct>}></Route>
    <Route path='edit/:id' element={<EditProduct></EditProduct>}></Route>

</Routes>
      </div>
      
      </BrowserRouter>
       
    </>
  )
}

export default App
