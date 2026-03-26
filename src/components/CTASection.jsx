import useIntersection from '../hooks/useIntersection';

export default function CTASection() {
  const ref = useIntersection();

  return (
    <section className="relative py-32 px-6 bg-blush overflow-hidden" ref={ref}>
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-script text-[25vw] text-charcoal opacity-5 select-none whitespace-nowrap">Kisah Kertas</span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center fade-up">
        <h2 className="font-serif text-5xl md:text-6xl text-charcoal font-light mb-6 leading-tight">
          Ceritakan Kisah Kalian <br />
          <span className="italic text-copper">Bersama Kami</span>
        </h2>
        
        <p className="font-sans text-charcoal/70 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed">
          Konsultasi gratis, tanpa tekanan. Kami bantu temukan desain yang paling sesuai dengan impian kalian.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#koleksi"
            className="px-8 py-4 bg-charcoal text-ivory text-sm font-medium uppercase tracking-widest hover:bg-opacity-90 transition-all duration-300"
          >
            Lihat Semua Koleksi
          </a>
          <a 
            href="https://wa.me/6281234567890?text=Halo%20Kisah%20Kertas!%20Saya%20tertarik%20untuk%20konsultasi."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-[0.5px] border-charcoal text-charcoal text-sm font-medium uppercase tracking-widest hover:bg-charcoal hover:text-ivory transition-all duration-300"
          >
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
