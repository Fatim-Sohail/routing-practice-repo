import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import {Route, Routes} from 'react-router-dom';

function App() {
  // console.log(window.location)
  // let Component
  // switch (window.location.pathname) {
  //   case "/title":
  //     Component = Home
  //   case "/about":
  //     Component = About
  //   case "/pricing":
  //     Component = Pricing

  return (
    <div className="App">
      <>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pricing' element={<Pricing/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </div>
        {/* <Component/> */}
      </>
    </div>
  );
}

export default App;
