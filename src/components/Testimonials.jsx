import useIntersection from '../hooks/useIntersection';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const ref = useIntersection();

  const testimonials = [
    {
      quote: "Undangannya melebihi ekspektasi kami. Kertasnya mewah, semua tamu memuji. Tim Surat Rasa sangat sabar dalam proses revisi.",
      name: "Aisha & Daffa",
      location: "Bandung, Oktober 2024",
      initials: "AD"
    },
    {
      quote: "Undangan digitalnya keren! Ada musik, animasi halus, dan RSVP memudahkan kami mendata tamu. Harganya sangat worth it.",
      name: "Risa & Nando",
      location: "Jakarta, Januari 2025",
      initials: "RN"
    }
  ];

  return (
    <section className="py-24 px-6 bg-charcoal" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="fade-up text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light">
            500+ Pasangan <br className="md:hidden" />
            <span className="italic text-copper">Sudah Merasakan</span>
          </h2>
        </div>

        <div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="bg-[#35302D] p-10 border-[0.5px] border-[rgba(181,129,58,0.2)] flex flex-col h-full">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--copper)" color="var(--copper)" />
                ))}
              </div>
              
              <p className="font-serif text-xl md:text-2xl text-ivory font-light leading-relaxed mb-10 flex-grow">
                "{testi.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full border-[0.5px] border-copper flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg text-copper">{testi.initials}</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-ivory tracking-wide uppercase">{testi.name}</p>
                  <p className="font-sans text-xs text-[#B0A9A4] tracking-widest uppercase mt-1">{testi.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
