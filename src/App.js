import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "@fontsource/cabin";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Projects from './pages/Projects'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/education" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
