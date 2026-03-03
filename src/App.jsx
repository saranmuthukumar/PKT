import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import Materials from './pages/Materials'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import './App.css'

function App() {
    return (
        <div className="app">
            <Navbar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/vehicles" element={<Vehicles />} />
                    <Route path="/materials" element={<Materials />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
            <FloatingButtons />
        </div>
    )
}

export default App
