import { Route, Routes } from 'react-router-dom'
import Counter from './component/Counter'
import Navbar from './component/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Service from './pages/Service'

const App =() => {
 
  return (
    <>
 
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home name="sai"/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
    </>

  )
}
export default App
