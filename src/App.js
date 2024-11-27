import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BoardGames from './components/BoardGames';
import Home from './components/Home';
import './fadeAnimation.css'; 

function App() {
  return(
  <Router>
  <div className='flex flex-col min-h-screen flex-grow'>
  <Header/> 
  {/* The Header will have navigation, but no Router */}
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/boardgames" element={<BoardGames />} />
    </Routes>
  </div>
  <Footer/>
</Router>
  );
}

export default App;
