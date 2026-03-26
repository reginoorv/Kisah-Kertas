import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-ivory py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-1 text-2xl" onClick={closeMenu}>
          <span className="font-sans font-medium text-charcoal tracking-tight">Kisah</span>
          <span className="font-serif italic text-copper">Kertas</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/katalog" className={`text-sm font-medium transition-colors ${location.pathname === '/katalog' ? 'text-copper' : 'text-charcoal hover:text-copper'}`}>Katalog</Link>
          <Link to="/portfolio" className={`text-sm font-medium transition-colors ${location.pathname === '/portfolio' ? 'text-copper' : 'text-charcoal hover:text-copper'}`}>Portofolio</Link>
          <Link to="/#cara-kerja" className="text-sm font-medium text-charcoal hover:text-copper transition-colors">Cara Kerja</Link>
          <Link to="/tentang-kami" className={`text-sm font-medium transition-colors ${location.pathname === '/tentang-kami' ? 'text-copper' : 'text-charcoal hover:text-copper'}`}>Tentang Kami</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="https://wa.me/6281234567890?text=Halo%20Kisah%20Kertas!%20Saya%20ingin%20konsultasi%20undangan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 border-[0.5px] border-copper text-copper text-sm font-medium uppercase tracking-widest hover:bg-copper hover:text-ivory transition-all duration-300"
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ivory border-t border-sand py-6 px-6 flex flex-col gap-4 shadow-lg">
          <Link to="/katalog" onClick={closeMenu} className={`text-lg font-medium ${location.pathname === '/katalog' ? 'text-copper' : 'text-charcoal'}`}>Katalog</Link>
          <Link to="/portfolio" onClick={closeMenu} className={`text-lg font-medium ${location.pathname === '/portfolio' ? 'text-copper' : 'text-charcoal'}`}>Portofolio</Link>
          <Link to="/#cara-kerja" onClick={closeMenu} className="text-lg font-medium text-charcoal">Cara Kerja</Link>
          <Link to="/tentang-kami" onClick={closeMenu} className={`text-lg font-medium ${location.pathname === '/tentang-kami' ? 'text-copper' : 'text-charcoal'}`}>Tentang Kami</Link>
          <a 
            href="https://wa.me/6281234567890?text=Halo%20Kisah%20Kertas!%20Saya%20ingin%20konsultasi%20undangan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 border-[0.5px] border-copper text-copper text-center text-sm font-medium uppercase tracking-widest hover:bg-copper hover:text-ivory transition-all duration-300"
          >
            Konsultasi Gratis
          </a>
        </div>
      )}
    </nav>
  );
}
