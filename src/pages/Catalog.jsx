import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import useIntersection from '../hooks/useIntersection';
import ProductCard from '../components/ProductCard';

export default function Catalog() {
  const ref = useIntersection();
  const [activeTab, setActiveTab] = useState('semua');
  const [isAnimating, setIsAnimating] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
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
    }, 300);
  };

  const filteredProducts = products.filter(p => {
    if (activeTab === 'semua') return true;
    if (activeTab === 'fisik') return p.type.includes('fisik');
    if (activeTab === 'digital') return p.type.includes('digital');
    return true;
  });

  return (
    <main className="bg-ivory min-h-screen pt-24" ref={ref}>
      {/* Hero Section */}
      <section className="py-20 px-6 text-center fade-up">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block font-sans text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-copper mb-6">
            Katalog Lengkap
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal font-light mb-8 leading-tight">
            Temukan <span className="italic text-copper">Kisahmu</span>
          </h1>
          <p className="font-sans text-smoke text-lg font-light leading-relaxed">
            Eksplorasi seluruh koleksi desain undangan kami. Dari sentuhan fisik yang klasik hingga pengalaman digital yang interaktif.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="fade-up flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            {['semua', 'fisik', 'digital'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`font-sans text-xs md:text-sm uppercase tracking-widest px-6 py-3 md:px-8 transition-all duration-300 border-[0.5px] ${
                  activeTab === tab 
                    ? 'bg-charcoal text-ivory border-charcoal' 
                    : 'bg-transparent text-charcoal border-charcoal/20 hover:border-copper hover:text-copper'
                }`}
              >
                {tab === 'semua' ? 'Semua Koleksi' : `Undangan ${tab}`}
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
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 transition-opacity duration-300 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="fade-up" style={{ transitionDelay: `${(index % 6) * 0.1}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
              {filteredProducts.length === 0 && (
                <div className="col-span-full py-12 text-center">
                  <p className="font-sans text-smoke">Belum ada produk di kategori ini.</p>
                </div>
              )}
            </div>
          )}

          {/* Custom Design CTA */}
          <div className="mt-20 md:mt-32 p-8 md:p-20 bg-sand text-center fade-up relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border-[0.5px] border-copper/20 m-4 pointer-events-none"></div>
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 relative z-10">
              Menginginkan Desain <span className="italic text-copper">Eksklusif?</span>
            </h3>
            <p className="font-sans text-smoke text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10 relative z-10">
              Tim artisan kami siap mendengarkan cerita Anda dan merancang undangan yang benar-benar unik, khusus untuk hari bahagia Anda.
            </p>
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Surat%20Rasa!%20Saya%20tertarik%20untuk%20membuat%20custom%20design%20undangan."
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-block px-10 py-4 bg-charcoal text-ivory text-sm font-medium uppercase tracking-widest hover:bg-copper transition-colors duration-300 shadow-[8px_8px_0_rgba(181,129,58,0.2)] hover:shadow-[4px_4px_0_rgba(181,129,58,0.2)] hover:translate-y-1 hover:translate-x-1"
            >
              Konsultasi Custom Design
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
