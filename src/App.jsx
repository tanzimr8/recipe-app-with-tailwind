// Pages
    //**************
    // Home
    // Favorites
    // Details
    // *************
    // Components
    // *************
    // Home
    // Nav
    // Recipes
    // Recipe
    // Contexts
    // Favorites
    // Favorite
    // Details
    // Routes
import './index.css';
import Nav from './components/shared/Nav';
import Search from './components/shared/Search';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import Details from './components/pages/Details';
import {Routes, Route} from 'react-router-dom';
import Documentation from './components/pages/Documentation';
function App() {
  return (
    <>
      <Nav/>
      <Search/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/documentations' element={<Documentation/>} />
      </Routes>
    </>
    
  );
}

export default App;
