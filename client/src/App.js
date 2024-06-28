import { Routes, Route } from 'react-router-dom';
import FileUpload from './Components/FileUp/FileUpload';
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<FileUpload />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
