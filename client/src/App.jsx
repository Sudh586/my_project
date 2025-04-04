  import React from 'react'
  import Header from './component/Header'

  import '@fontsource/poppins'; // Defaults to 400 weight

  import Fotter from './component/Fotter';
  import Home from './component/Home';
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import Cetapage from './component/Cetapage';
import Search from './component/Search';
import Productdetails from './component/Productdetails';
import Searchmenu from './component/Searchmenu';


  const App = () => {
    return (
      <div>
        
        
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/:id/:name/:tagline'element={<Cetapage/>}/>
          <Route path='/search'element={<Search/>}/>
          <Route path='/productdetail/:id'element={<Productdetails/>}/>
          <Route path='/searchdishes/:id'element={<Searchmenu/>}/>
        </Routes>
        
    
        
      
      </div>
    )
  }

  export default App
