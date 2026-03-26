/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Admin from './pages/Admin';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/ruang-karya');

  return (
    <div className="min-h-screen bg-ivory selection:bg-copper selection:text-ivory">
      {!isAdminRoute && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/tentang-kami" element={<About />} />
        <Route path="/katalog" element={<Catalog />} />
        <Route path="/ruang-karya" element={<Admin />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
