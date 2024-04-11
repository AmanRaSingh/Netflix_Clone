import './App.css';
import Category from './Component/Category/Category';
import { Main } from './Component/Main/Main';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route exact path='/category' element={<Category/>}/>
      </Routes>
    </>
  );
}

export default App;
