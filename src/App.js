import './App.css';
import Parent from './components/ShoppingCart';
import { Route, Routes } from 'react-router-dom';
import { ProductSummary } from './components/ProductSummary';
import { HomePage } from './components/HomePage';

function App() {
  return (
<>

<div>
App.js page
<Parent />
<HomePage />

<Routes>
  <Route path='/summary' element={<ProductSummary/>}/>
  <Route path='/test' element={<Parent/>}/>
</Routes>

</div>

</>
  );
}

export default App;
