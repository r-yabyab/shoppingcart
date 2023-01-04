import './App.css';
import Parent from './components/ShoppingCart';
import { Route, Routes } from 'react-router-dom';
import { ProductSummary } from './components/ProductSummary';
import { HomePage } from './components/HomePage';
import { TopNav } from './components/TopNav';

function App() {
  return (
<>

<div>
<TopNav />
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
