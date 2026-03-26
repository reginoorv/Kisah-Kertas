import useIntersection from '../hooks/useIntersection';

export default function HeroSection() {
  const ref = useIntersection();

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden" ref={ref}>
      {/* Left Column */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-32 pb-16 lg:pt-40 lg:pb-20 z-10">
        <h1 className="fade-up text-charcoal leading-[1.1] mb-8">
          <span className="block font-script text-5xl md:text-6xl lg:text-7xl mb-2 text-charcoal opacity-90">Ceritakan</span>
          <span className="block font-serif font-light text-[clamp(2.5rem,5vw,4rem)]">Kisah Cinta Kalian</span>
          <span className="block font-serif font-light text-[clamp(2.5rem,5vw,4rem)]">Dengan Cara</span>
          <span className="block font-serif italic text-copper text-[clamp(2.5rem,5vw,4rem)]">Terbaik</span>
        </h1>
        
        <p className="fade-up font-sans font-light text-smoke text-base md:text-lg max-w-md mb-10 leading-relaxed">
          Undangan fisik berkualitas cetak premium dan undangan digital interaktif — dibuat dengan cinta, dikirim penuh makna.
        </p>
        
        <div className="fade-up flex flex-col sm:flex-row gap-4 mb-16">
          <a 
            href="#koleksi" 
            className="px-8 py-4 bg-charcoal text-ivory text-sm font-medium uppercase tracking-widest text-center hover:bg-opacity-90 transition-all duration-300"
          >
            Lihat Koleksi
          </a>
          <a 
            href="https://wa.me/6281234567890?text=Halo%20Kisah%20Kertas!%20Saya%20ingin%20konsultasi%20undangan." 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-[0.5px] border-charcoal text-charcoal text-sm font-medium uppercase tracking-widest text-center hover:bg-charcoal hover:text-ivory transition-all duration-300"
          >
            Konsultasi Gratis
          </a>
        </div>
        
        <div className="fade-up flex items-center gap-4 md:gap-6 text-xs md:text-sm font-medium uppercase tracking-widest text-charcoal">
          <span>Desain Eksklusif</span>
          <div className="w-[1px] h-4 bg-copper opacity-50"></div>
          <span>Kualitas Premium</span>
          <div className="w-[1px] h-4 bg-copper opacity-50"></div>
          <span>Pelayanan Personal</span>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 bg-sand relative min-h-[500px] lg:min-h-screen flex items-center justify-center p-8">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="font-script text-[30vw] md:text-[20vw] text-copper opacity-5 select-none">kertas</span>
        </div>

        {/* Floating Envelope SVG */}
        <div className="relative z-10 animate-float w-full max-w-md">
          <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
            {/* Back of envelope */}
            <path d="M40 150 L360 150 L360 400 L40 400 Z" fill="#E8DCCB" />
            
            {/* Invitation Card sticking out */}
            <g transform="translate(60, 80)">
              <rect width="280" height="300" fill="#FAF7F2" stroke="#B5813A" strokeWidth="0.5" />
              <rect x="10" y="10" width="260" height="280" fill="none" stroke="#B5813A" strokeWidth="0.5" opacity="0.5" />
              <text x="140" y="80" fontFamily="Great Vibes, cursive" fontSize="32" fill="#2D2926" textAnchor="middle">Romeo & Juliet</text>
              <text x="140" y="120" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#8A8480" textAnchor="middle" letterSpacing="0.2em">THE WEDDING CELEBRATION</text>
              <path d="M100 140 L180 140" stroke="#B5813A" strokeWidth="0.5" />
              <text x="140" y="180" fontFamily="Cormorant Garamond, serif" fontSize="18" fill="#2D2926" textAnchor="middle">24 . 08 . 2025</text>
            </g>

            {/* Front flaps of envelope */}
            <path d="M40 400 L200 280 L360 400 Z" fill="#F5EFE8" />
            <path d="M40 150 L200 280 L40 400 Z" fill="#F0E4DC" />
            <path d="M360 150 L200 280 L360 400 Z" fill="#F0E4DC" />
            
            {/* Wax seal */}
            <circle cx="200" cy="280" r="25" fill="#B5813A" />
            <circle cx="200" cy="280" r="20" fill="none" stroke="#FAF7F2" strokeWidth="0.5" opacity="0.5" />
            <text x="200" y="286" fontFamily="Great Vibes, cursive" fontSize="18" fill="#FAF7F2" textAnchor="middle">KK</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
