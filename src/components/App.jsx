import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';

import Home from '../pages/home/Home.jsx'
import Catalog from '../pages/Catalog/Catalog.jsx';
import Favorites from '../pages/Favorites/Favorites.jsx';



export const App = () => {
 
  
  return (
    <>
    <Router>
    <Routes>
     
      <Route path='/' element={<Home/>}  />
   
      <Route path='/catalog' element={<Catalog/>}  /> 
      <Route path='*' element={<Home/>} />
      <Route path='/favorites' element ={<Favorites/>}/>
    </Routes>
    </Router>
    </>
  );
};

