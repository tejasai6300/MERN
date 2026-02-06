import { Route, Routes } from 'react-router-dom'
import Counter from './component/Counter'
import Navbar from './component/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Hook from './Hooks/Hook'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import UseEffectApi from './Hooks/useEffectApi'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseRef from './Hooks/useRef'
import Service from './pages/Service'
import UseMemo from './Hooks/UseMemo'
import UseReducer from './Hooks/UseReducer'
import UseCallback from './Hooks/UseCallback'
import Todo from './component/Todo'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home name="sai"/>}/>
        <Route path='/home' element={<Home name="sai"/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/todo' element={<Todo/>}/>

        {/* Hooks */}
        <Route path='/hook' element={<Hook/>}/>
        <Route path='/useEffectApi' element={<UseEffectApi/>}/>
        <Route path='/useState' element={<UseState/>}/>
        <Route path='/useEffect' element={<UseEffect/>}/>
        <Route path='/useRef' element={<UseRef/>}/>
        <Route path='/useMemo' element={<UseMemo/>}/>
        <Route path='/useReducer' element={<UseReducer/>}/>
        <Route path='/useCallback' element={<UseCallback/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </>
  )
}
export default App
