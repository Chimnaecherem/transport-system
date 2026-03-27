import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Resources from '../pages/Resources'
import Products from '../pages/Products'
function AppRoute() {
  return (
    <div>
        {/* routing */}
<BrowserRouter>
<Routes>

<Route index element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/resources' element={<Resources/>}/>
<Route path='/products' element={<Products/>}/>

</Routes>
</BrowserRouter>



    </div>
  )
}

export default AppRoute