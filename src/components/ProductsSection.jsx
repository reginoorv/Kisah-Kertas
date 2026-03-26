import { useState } from 'react';
import { Link } from 'react-router-dom';
import useIntersection from '../hooks/useIntersection';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductsSection() {
  const ref = useIntersection();
  const [activeTab, setActiveTab] = useState('semua');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 200);
  };

  const filteredProducts = products.filter(p => {
    if (activeTab === 'semua') return true;
    if (activeTab === 'fisik') return p.type.includes('fisik');
    if (activeTab === 'digital') return p.type.includes('digital');
    return true;
  });

  return (
    <section id="koleksi" className="py-24 px-6 bg-ivory" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="fade-up text-center mb-16">
          <span className="inline-block font-sans text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-copper mb-4">
            Koleksi Pilihan
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light">
            Desain yang Bicara <span className="italic text-copper">Sendiri</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="fade-up flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {['semua', 'fisik', 'digital'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`font-sans text-xs md:text-sm uppercase tracking-widest px-6 py-2 transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-copper text-ivory font-medium' 
                  : 'bg-transparent text-smoke hover:text-copper'
              }`}
            >
              {tab === 'semua' ? 'Semua' : `Undangan ${tab}`}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div 
          className={`fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-opacity duration-300 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="fade-up mt-16 text-center">
          <Link 
            to="/katalog"
            className="inline-block mt-12 px-8 py-4 border-[0.5px] border-charcoal text-charcoal text-sm font-medium uppercase tracking-widest hover:bg-charcoal hover:text-ivory transition-all duration-300"
          >
            Lihat Katalog Lengkap
          </Link>
        </div>
      </div>
    </section>
  );
}
