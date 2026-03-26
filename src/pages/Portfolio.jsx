import { useEffect, useState } from 'react';
import useIntersection from '../hooks/useIntersection';
import { ArrowRight, X } from 'lucide-react';

export default function Portfolio() {
  const ref = useIntersection();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  const portfolioItems = [
    {
      id: 1,
      title: "The Royal Botanical",
      client: "Aisha & Daffa",
      type: "Undangan Fisik",
      desc: "Hard cover dengan finishing hot foil copper dan kertas linen premium.",
      bg: "bg-charcoal",
      mockup: (
        <svg viewBox="0 0 300 400" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="260" height="360" fill="#2D2926" stroke="#B5813A" strokeWidth="2" />
          <rect x="30" y="30" width="240" height="340" fill="none" stroke="#B5813A" strokeWidth="0.5" opacity="0.5" />
          <path d="M150 60 Q180 90 150 120 Q120 90 150 60 Z" fill="none" stroke="#B5813A" strokeWidth="0.5" opacity="0.7" />
          <text x="150" y="180" fontFamily="Great Vibes, cursive" fontSize="36" fill="#D4A558" textAnchor="middle">Aisha & Daffa</text>
          <text x="150" y="220" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#8A8480" textAnchor="middle" letterSpacing="0.2em">THE WEDDING</text>
          <path d="M110 240 L190 240" stroke="#B5813A" strokeWidth="0.5" />
          <text x="150" y="280" fontFamily="Cormorant Garamond, serif" fontSize="18" fill="#FAF7F2" textAnchor="middle">12 . 10 . 2024</text>
        </svg>
      )
    },
    {
      id: 2,
      title: "Monochrome Elegance",
      client: "Bima & Clara",
      type: "Undangan Digital",
      desc: "Desain minimalis dengan animasi transisi halus dan latar musik klasik.",
      bg: "bg-sand",
      mockup: (
        <svg viewBox="0 0 300 400" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="10" width="220" height="380" rx="16" fill="#FAF7F2" stroke="#2D2926" strokeWidth="4" />
          <rect x="50" y="20" width="200" height="360" rx="12" fill="#FAF7F2" />
          <circle cx="150" cy="100" r="40" fill="#EDE8DF" />
          <text x="150" y="110" fontFamily="Cormorant Garamond, serif" fontSize="24" fill="#2D2926" textAnchor="middle" fontStyle="italic">B & C</text>
          <text x="150" y="180" fontFamily="DM Sans, sans-serif" fontSize="12" fill="#2D2926" textAnchor="middle" letterSpacing="0.1em">WE ARE GETTING MARRIED</text>
          <text x="150" y="220" fontFamily="Cormorant Garamond, serif" fontSize="28" fill="#2D2926" textAnchor="middle">Bima & Clara</text>
          <rect x="100" y="260" width="100" height="30" rx="15" fill="#2D2926" />
          <text x="150" y="279" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#FAF7F2" textAnchor="middle" letterSpacing="0.1em">OPEN INVITATION</text>
        </svg>
      ),
      interactivePreview: (
        <div className="w-full bg-ivory text-charcoal flex flex-col items-center pb-12">
          <div className="min-h-[500px] w-full flex flex-col items-center justify-center p-8 text-center relative">
            <div className="w-20 h-20 rounded-full bg-sand flex items-center justify-center mb-6">
              <span className="font-serif italic text-2xl">B & C</span>
            </div>
            <p className="font-sans text-[10px] tracking-[0.2em] mb-4">WE ARE GETTING MARRIED</p>
            <h2 className="font-serif text-4xl mb-4">Bima & Clara</h2>
            <p className="font-sans text-xs tracking-widest">05 . 11 . 2024</p>
            <div className="absolute bottom-10 animate-bounce">
              <div className="w-[1px] h-12 bg-charcoal/30"></div>
            </div>
          </div>
          <div className="min-h-[300px] w-full bg-sand flex items-center justify-center p-8 text-center">
            <p className="font-serif italic text-lg leading-relaxed text-charcoal/80">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri..."
            </p>
          </div>
          <div className="min-h-[400px] w-full flex flex-col items-center justify-center p-8 text-center">
            <h3 className="font-serif text-2xl mb-8">Acara Pernikahan</h3>
            <div className="w-full border-[0.5px] border-charcoal/20 p-6 mb-4">
              <h4 className="font-sans text-[10px] tracking-[0.2em] mb-2">AKAD NIKAH</h4>
              <p className="font-serif text-lg mb-1">08:00 - 10:00 WIB</p>
              <p className="font-sans text-xs text-smoke">Masjid Raya Pondok Indah</p>
            </div>
            <div className="w-full border-[0.5px] border-charcoal/20 p-6">
              <h4 className="font-sans text-[10px] tracking-[0.2em] mb-2">RESEPSI</h4>
              <p className="font-serif text-lg mb-1">11:00 - 13:00 WIB</p>
              <p className="font-sans text-xs text-smoke">Grand Ballroom Hotel Indonesia</p>
            </div>
          </div>
          <div className="w-full bg-charcoal text-ivory flex flex-col items-center justify-center p-10 text-center mt-8">
            <h3 className="font-serif text-2xl mb-4">RSVP</h3>
            <p className="font-sans text-xs text-ivory/70 mb-6 leading-relaxed">Kehadiran Anda adalah hadiah terindah bagi kami.</p>
            <button className="px-6 py-3 border-[0.5px] border-ivory text-[10px] tracking-widest uppercase hover:bg-ivory hover:text-charcoal transition-colors">Konfirmasi</button>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Terracotta Warmth",
      client: "Diana & Erlangga",
      type: "Undangan Fisik",
      desc: "Kertas jasmine dengan sentuhan warna blush dan rose yang hangat.",
      bg: "bg-blush",
      mockup: (
        <svg viewBox="0 0 300 400" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="40" width="260" height="320" fill="#F0E4DC" stroke="#C9A99A" strokeWidth="1" />
          <rect x="10" y="30" width="260" height="320" fill="#C9A99A" opacity="0.2" />
          <rect x="30" y="50" width="240" height="300" fill="none" stroke="#C9A99A" strokeWidth="1" />
          <text x="150" y="120" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#8A8480" textAnchor="middle" letterSpacing="0.3em">JOIN US TO CELEBRATE</text>
          <text x="150" y="180" fontFamily="Great Vibes, cursive" fontSize="42" fill="#2D2926" textAnchor="middle">Diana</text>
          <text x="150" y="210" fontFamily="Cormorant Garamond, serif" fontSize="16" fill="#B5813A" textAnchor="middle" fontStyle="italic">&</text>
          <text x="150" y="250" fontFamily="Great Vibes, cursive" fontSize="42" fill="#2D2926" textAnchor="middle">Erlangga</text>
          <path d="M130 290 L170 290" stroke="#C9A99A" strokeWidth="1" />
          <text x="150" y="320" fontFamily="DM Sans, sans-serif" fontSize="12" fill="#2D2926" textAnchor="middle" letterSpacing="0.1em">20 . 12 . 2024</text>
        </svg>
      )
    },
    {
      id: 4,
      title: "Classic Ivory & Gold",
      client: "Fira & Galih",
      type: "Undangan Fisik",
      desc: "Desain abadi dengan wax seal tembaga asli dan amplop vellum transparan.",
      bg: "bg-ivory",
      mockup: (
        <svg viewBox="0 0 300 400" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Envelope Back */}
          <path d="M10 50 L290 50 L290 350 L10 350 Z" fill="#EDE8DF" />
          {/* Card */}
          <rect x="30" y="20" width="240" height="310" fill="#FAF7F2" stroke="#B5813A" strokeWidth="0.5" />
          <text x="150" y="100" fontFamily="Cormorant Garamond, serif" fontSize="22" fill="#2D2926" textAnchor="middle">FIRA & GALIH</text>
          <text x="150" y="140" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#8A8480" textAnchor="middle" letterSpacing="0.1em">ARE TYING THE KNOT</text>
          <circle cx="150" cy="220" r="30" fill="none" stroke="#B5813A" strokeWidth="0.5" />
          <text x="150" y="225" fontFamily="Cormorant Garamond, serif" fontSize="16" fill="#B5813A" textAnchor="middle">08.01</text>
          {/* Envelope Flaps */}
          <path d="M10 350 L150 220 L290 350 Z" fill="#F5EFE8" />
          <path d="M10 50 L150 220 L10 350 Z" fill="#F0E4DC" />
          <path d="M290 50 L150 220 L290 350 Z" fill="#F0E4DC" />
          {/* Wax Seal */}
          <circle cx="150" cy="220" r="22" fill="#B5813A" />
          <circle cx="150" cy="220" r="18" fill="none" stroke="#FAF7F2" strokeWidth="0.5" opacity="0.5" />
          <text x="150" y="226" fontFamily="Great Vibes, cursive" fontSize="16" fill="#FAF7F2" textAnchor="middle">FG</text>
        </svg>
      )
    },
    {
      id: 5,
      title: "Rustic Sand",
      client: "Hana & Indra",
      type: "Undangan Digital",
      desc: "Tema rustic dengan warna bumi, cocok untuk pernikahan outdoor.",
      bg: "bg-rose",
      mockup: (
        <svg viewBox="0 0 300 400" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="10" width="220" height="380" rx="16" fill="#2D2926" stroke="#EDE8DF" strokeWidth="4" />
          <rect x="50" y="20" width="200" height="360" rx="12" fill="#FAF7F2" />
          <path d="M50 20 L250 20 L250 150 L50 150 Z" fill="#EDE8DF" />
          <circle cx="150" cy="150" r="35" fill="#FAF7F2" />
          <text x="150" y="160" fontFamily="Great Vibes, cursive" fontSize="28" fill="#B5813A" textAnchor="middle">H & I</text>
          <text x="150" y="220" fontFamily="Cormorant Garamond, serif" fontSize="20" fill="#2D2926" textAnchor="middle">Hana & Indra</text>
          <text x="150" y="250" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#8A8480" textAnchor="middle" letterSpacing="0.1em">14 FEBRUARI 2025</text>
          <rect x="90" y="290" width="120" height="30" fill="none" stroke="#B5813A" strokeWidth="1" />
          <text x="150" y="309" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#B5813A" textAnchor="middle" letterSpacing="0.1em">RSVP NOW</text>
        </svg>
      ),
      interactivePreview: (
        <div className="w-full bg-ivory text-charcoal flex flex-col items-center">
          <div className="min-h-[500px] w-full flex flex-col items-center justify-center p-8 text-center relative bg-rose text-charcoal overflow-hidden">
            <div className="absolute inset-4 border-[1px] border-ivory/30 rounded-t-full pointer-events-none"></div>
            <div className="z-10 flex flex-col items-center">
              <span className="font-script text-6xl text-ivory mb-6 drop-shadow-sm">H & I</span>
              <p className="font-sans text-[10px] tracking-[0.2em] mb-2 text-ivory/90">THE WEDDING OF</p>
              <h2 className="font-serif text-4xl mb-6 text-ivory">Hana & Indra</h2>
              <div className="w-12 h-[1px] bg-ivory/50 mb-6"></div>
              <p className="font-sans text-xs tracking-widest text-ivory">14 . 02 . 2025</p>
            </div>
          </div>
          <div className="min-h-[400px] w-full bg-ivory flex flex-col items-center justify-center p-8 text-center mt-8">
            <h3 className="font-serif text-2xl mb-8 text-copper">Save The Date</h3>
            <div className="w-full bg-sand p-6 mb-2 rounded-t-full pt-16">
              <h4 className="font-sans text-[10px] tracking-[0.2em] mb-2 text-charcoal">HOLY MATRIMONY</h4>
              <p className="font-serif text-lg mb-1">10:00 AM</p>
              <p className="font-sans text-xs text-smoke">Pine Hill, Bandung</p>
            </div>
            <div className="w-full bg-sand p-6 pb-16 rounded-b-full">
              <h4 className="font-sans text-[10px] tracking-[0.2em] mb-2 text-charcoal">WEDDING RECEPTION</h4>
              <p className="font-serif text-lg mb-1">04:00 PM</p>
              <p className="font-sans text-xs text-smoke">Pine Hill, Bandung</p>
            </div>
          </div>
          <div className="w-full p-8 text-center mb-8">
            <button className="px-8 py-3 bg-copper text-ivory text-[10px] tracking-widest uppercase hover:bg-charcoal transition-colors w-full rounded-full">RSVP Now</button>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Velvet Smoke",
      client: "Maya & Naufal",
      type: "Undangan Fisik",
      desc: "Kesan misterius dan elegan dengan perpaduan warna charcoal dan rose gold.",
      bg: "bg-charcoal",
      mockup: (
        <svg viewBox="0 0 300 400" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="30" width="240" height="340" fill="#2D2926" />
          <rect x="40" y="40" width="220" height="320" fill="none" stroke="#C9A99A" strokeWidth="1" />
          <rect x="45" y="45" width="210" height="310" fill="none" stroke="#C9A99A" strokeWidth="0.5" opacity="0.5" />
          <text x="150" y="120" fontFamily="DM Sans, sans-serif" fontSize="12" fill="#C9A99A" textAnchor="middle" letterSpacing="0.2em">THE WEDDING OF</text>
          <text x="150" y="180" fontFamily="Cormorant Garamond, serif" fontSize="32" fill="#FAF7F2" textAnchor="middle">MAYA</text>
          <text x="150" y="220" fontFamily="Great Vibes, cursive" fontSize="24" fill="#C9A99A" textAnchor="middle">and</text>
          <text x="150" y="260" fontFamily="Cormorant Garamond, serif" fontSize="32" fill="#FAF7F2" textAnchor="middle">NAUFAL</text>
          <text x="150" y="320" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#8A8480" textAnchor="middle" letterSpacing="0.2em">22 . 03 . 2025</text>
        </svg>
      )
    }
  ];

  return (
    <main className="bg-ivory min-h-screen pt-24" ref={ref}>
      {/* Hero Section */}
      <section className="py-20 px-6 text-center fade-up">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block font-sans text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-copper mb-6">
            Portofolio Kami
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal font-light mb-8 leading-tight">
            Karya & <span className="italic text-copper">Cerita</span>
          </h1>
          <p className="font-sans text-smoke text-lg font-light leading-relaxed">
            Jelajahi berbagai desain undangan yang telah menjadi bagian dari momen istimewa klien kami. Setiap detail dikerjakan dengan penuh cinta.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group flex flex-col cursor-pointer fade-up" 
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedItem(item)}
              >
                {/* Mockup Container */}
                <div className={`relative h-[400px] w-full flex items-center justify-center p-8 overflow-hidden mb-6 ${item.bg} transition-transform duration-500 group-hover:-translate-y-2`}>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300 z-10"></div>
                  
                  {/* SVG Mockup */}
                  <div className="relative z-0 w-full max-w-[220px] h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    {item.mockup}
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-copper">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-1 group-hover:text-copper transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm font-medium text-charcoal mb-3">
                    {item.client}
                  </p>
                  <p className="font-sans text-sm text-smoke font-light leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-copper font-sans text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0">
                    Lihat Detail <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Bottom */}
          <div className="mt-24 text-center fade-up">
            <h3 className="font-serif text-3xl text-charcoal mb-6">Tertarik dengan desain kami?</h3>
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Surat%20Rasa!%20Saya%20tertarik%20dengan%20portofolio%20kalian%20dan%20ingin%20konsultasi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-charcoal text-ivory text-sm font-medium uppercase tracking-widest hover:bg-copper transition-colors duration-300"
            >
              Mulai Konsultasi
            </a>
          </div>
        </div>
      </section>

      {/* Modal / Popup Detail */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-charcoal/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-ivory w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col lg:flex-row relative shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 text-charcoal hover:text-copper transition-colors bg-ivory/80 backdrop-blur-sm rounded-none border-[0.5px] border-transparent hover:border-copper"
              aria-label="Close modal"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            {/* Left: Mockup */}
            <div className={`w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] ${selectedItem.bg}`}>
              {selectedItem.type === "Undangan Digital" ? (
                <div className="relative w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] bg-[#1A1A1A] rounded-[2.5rem] p-2 shadow-2xl ring-1 ring-white/10 flex-shrink-0 transform transition-transform duration-700 hover:scale-[1.02]">
                  {/* Phone Notch */}
                  <div className="absolute top-4 inset-x-0 h-6 flex justify-center z-20 pointer-events-none">
                    <div className="w-24 h-6 bg-[#000000] rounded-full"></div>
                  </div>
                  {/* Screen */}
                  <div className="w-full h-full bg-ivory rounded-[2rem] overflow-y-auto no-scrollbar relative">
                    {selectedItem.interactivePreview}
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-[260px] sm:max-w-[300px] transform transition-transform duration-700 hover:scale-105">
                  {selectedItem.mockup}
                </div>
              )}
            </div>

            {/* Right: Details */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-copper mb-4">
                {selectedItem.type}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-2 leading-tight">
                {selectedItem.title}
              </h2>
              <p className="font-sans text-lg font-medium text-charcoal mb-8">
                {selectedItem.client}
              </p>
              
              <div className="w-12 h-[1px] bg-copper mb-8"></div>
              
              <p className="font-sans text-smoke text-base font-light leading-relaxed mb-6">
                {selectedItem.desc}
              </p>
              <p className="font-sans text-smoke text-base font-light leading-relaxed mb-12">
                Setiap detail dirancang khusus untuk mencerminkan kepribadian dan kisah cinta klien kami. Dari pemilihan material hingga sentuhan akhir, semuanya dikerjakan dengan presisi dan dedikasi tinggi untuk menghasilkan karya yang tak lekang oleh waktu.
              </p>

              <a 
                href={`https://wa.me/6281234567890?text=Halo%20Surat%20Rasa!%20Saya%20tertarik%20dengan%20desain%20${encodeURIComponent(selectedItem.title)}%20(${encodeURIComponent(selectedItem.type)}).%20Boleh%20minta%20info%20lebih%20lanjut?`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-8 py-4 border-[0.5px] border-charcoal bg-charcoal text-ivory text-sm font-medium uppercase tracking-widest hover:bg-transparent hover:text-charcoal transition-all duration-300"
              >
                Pesan Desain Ini
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
