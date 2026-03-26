import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import useIntersection from '../hooks/useIntersection';
import ProductCard from './ProductCard';

export default function ProductsSection() {
  const ref = useIntersection();
  const [activeTab, setActiveTab] = useState('semua');
  const [isAnimating, setIsAnimating] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'katalog'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(data);
      } catch (error) {
        console.error("Error fetching catalog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 200);
  };

  // Limit to 6 products for the home page
  const filteredProducts = products.filter(p => {
    if (activeTab === 'semua') return true;
    if (activeTab === 'fisik') return p.type.includes('fisik');
    if (activeTab === 'digital') return p.type.includes('digital');
    return true;
  }).slice(0, 6);

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
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-copper border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div 
            className={`fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-opacity duration-300 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-12 text-center">
                <p className="font-sans text-smoke">Belum ada produk di kategori ini.</p>
              </div>
            )}
          </div>
        )}
        
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
