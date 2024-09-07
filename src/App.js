
import './App.css';
import ArrayFunction from './component/ArrayFunction';
import ArrayMethod from './component/ArrayMethod';
import Destructure from './component/Destructure';
import SpreadOperator from './component/SpreadOperator';
import Ternary from './component/Ternary';
import Home from './component/Home';
import Mui from './component/Mui';
import Muitable from './component/Muitable';
import StateHooks from './component/StateHooks';
import Effect from './component/Effect';
import Local from './component/Local';
import Quotes from './component/Quotes';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import axios from 'axios';





function App() {
  return (
    <div class='apps'>
    <div className="App">
      <BrowserRouter>
     <Routes>

      <Route exact path="/"  element={<Home/>}  />
      <Route exact path="/ArrayFunction"  element={<ArrayFunction/>}  />
      <Route exact path="/ArrayMethod"  element={<ArrayMethod/>}  />
      <Route exact path="/Destructure"  element={<Destructure/>}/>
      <Route exact path="/SpreadOperator"  element={<SpreadOperator/>}  />
      <Route exact path="/Ternary"  element={<Ternary/>}  />
      <Route exact path="/Mui"  element={<Mui/>}  />
      <Route exact path="/Muitable"  element={<Muitable/>}  />
      <Route exact path="/StateHooks"  element={<StateHooks/>}  />
      <Route exact path="/Effect"  element={<Effect/>}  />
      <Route exact path="/Local"  element={<Local/>}  />
      <Route exact path="/Quotes"  element={<Quotes/>}  />
     </Routes>
     </BrowserRouter>


    </div>

    
    </div>
  );
}

export default App;