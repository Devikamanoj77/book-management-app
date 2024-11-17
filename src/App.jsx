

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import View from './pages/View';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/view/:id" element={<View/>} /> {/* Dynamic route for book details */}
      </Routes>
      
    </>
  );
}

export default App;

// import {Route, Routes } from 'react-router-dom'
// import './App.css'
// import Landing from './pages/Landing'
// import Home from './pages/Home'
// import View from './pages/View'
// import Header from './components/Header'
// import Footer from './components/Footer'

// function App() {
  

//   return (
//     <>
//      {/* Path for Landing,Home,View */}
//      <Header/>
//      <Routes>
//         <Route path='/' element={<Landing/>}/>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/view' element={<View/>}/>
//      </Routes>
//      <Footer/>
//     </>
//   )
// }

// export default App
