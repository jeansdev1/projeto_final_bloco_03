import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='bg-gray-200 min-h-[68vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App