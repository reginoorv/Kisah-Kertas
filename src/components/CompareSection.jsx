import useIntersection from '../hooks/useIntersection';
import { Mail, Sparkles } from 'lucide-react';

export default function CompareSection() {
  const ref = useIntersection();

  return (
    <section className="py-24 bg-ivory" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center fade-up">
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light">
          Fisik atau Digital? <br className="md:hidden" />
          <span className="italic text-rose">Kenapa Tidak Keduanya?</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row fade-up">
        {/* Fisik */}
        <div className="w-full lg:w-1/2 bg-ivory border-[0.5px] border-sand p-10 md:p-16 flex flex-col items-start text-left">
          <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center mb-6 text-copper">
            <Mail size={28} strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-3xl text-charcoal mb-8">Undangan Fisik</h3>
          <ul className="text-left space-y-4 font-sans text-smoke font-light w-full max-w-sm">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-copper mt-2 shrink-0"></div>
              <span>Kertas premium (Linen, Cotton, Jasmine)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-copper mt-2 shrink-0"></div>
              <span>Finishing mewah (Emboss, Hot Foil, UV)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-copper mt-2 shrink-0"></div>
              <span>Amplop custom dengan wax seal</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-copper mt-2 shrink-0"></div>
              <span>Minimal pemesanan 50 lembar</span>
            </li>
          </ul>
        </div>

        {/* Digital */}
        <div className="w-full lg:w-1/2 bg-charcoal p-10 md:p-16 flex flex-col items-start text-left">
          <div className="w-16 h-16 rounded-full bg-[#3A3531] flex items-center justify-center mb-6 text-rose">
            <Sparkles size={28} strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-3xl text-ivory mb-8">Undangan Digital</h3>
          <ul className="text-left space-y-4 font-sans text-[#B0A9A4] font-light w-full max-w-sm">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-rose mt-2 shrink-0"></div>
              <span>Animasi premium & musik latar</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-rose mt-2 shrink-0"></div>
              <span>RSVP online & buku tamu digital</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-rose mt-2 shrink-0"></div>
              <span>Countdown timer live & integrasi Maps</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-rose mt-2 shrink-0"></div>
              <span>Link unik, sekali bayar sebar sepuasnya</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="max-w-7xl mx-auto mt-8 fade-up px-6 md:px-0">
        <a 
          href="https://wa.me/6281234567890?text=Halo%20Surat%20Rasa!%20Saya%20bingung%20pilih%20fisik%20atau%20digital,%20boleh%20konsultasi?"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blush py-6 px-6 text-center font-sans text-sm md:text-base font-medium uppercase tracking-widest text-charcoal hover:bg-rose hover:text-ivory transition-colors duration-300"
        >
          Bingung pilih yang mana? Konsultasi dulu — GRATIS →
        </a>
      </div>
    </section>
  );
}
