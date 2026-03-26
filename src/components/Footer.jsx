import { Instagram, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-8 px-6 border-t-[0.5px] border-copper/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Left Column */}
          <div className="sm:col-span-2 lg:col-span-6">
            <a href="#" className="inline-flex items-baseline gap-1 text-3xl mb-6">
              <span className="font-sans font-medium text-ivory tracking-tight">Kisah</span>
              <span className="font-serif italic text-copper">Kertas</span>
            </a>
            <p className="font-sans text-[#B0A9A4] font-light text-sm max-w-sm mb-8 leading-relaxed">
              "Karena setiap undangan adalah rasa yang ingin kamu sampaikan."
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border-[0.5px] border-copper/30 flex items-center justify-center text-ivory hover:bg-copper hover:border-copper transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-[0.5px] border-copper/30 flex items-center justify-center text-ivory hover:bg-copper hover:border-copper transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-[0.5px] border-copper/30 flex items-center justify-center text-ivory hover:bg-copper hover:border-copper transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Middle Column */}
          <div className="sm:col-span-1 lg:col-span-3">
            <h4 className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-copper mb-6">Produk</h4>
            <ul className="space-y-4">
              <li><a href="#" className="font-sans text-sm text-[#B0A9A4] hover:text-ivory transition-colors">Undangan Fisik</a></li>
              <li><a href="#" className="font-sans text-sm text-[#B0A9A4] hover:text-ivory transition-colors">Undangan Digital</a></li>
              <li><a href="#" className="font-sans text-sm text-[#B0A9A4] hover:text-ivory transition-colors">Paket Bundling</a></li>
              <li><a href="#" className="font-sans text-sm text-[#B0A9A4] hover:text-ivory transition-colors">Custom Design</a></li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="sm:col-span-1 lg:col-span-3">
            <h4 className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-copper mb-6">Info</h4>
            <ul className="space-y-4">
              <li><a href="/katalog" className="font-sans text-sm text-[#B0A9A4] hover:text-ivory transition-colors">Katalog Lengkap</a></li>
              <li><a href="/#cara-kerja" className="font-sans text-sm text-[#B0A9A4] hover:text-ivory transition-colors">Cara Pemesanan</a></li>
              <li><a href="/portfolio" className="font-sans text-sm text-[#B0A9A4] hover:text-ivory transition-colors">Portofolio</a></li>
              <li><a href="/tentang-kami" className="font-sans text-sm text-[#B0A9A4] hover:text-ivory transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="font-sans text-sm text-[#B0A9A4] hover:text-ivory transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-[0.5px] border-[rgba(250,247,242,0.1)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-[#B0A9A4] tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Kisah Kertas. All rights reserved.
          </p>
          <p className="font-sans text-xs text-[#B0A9A4] tracking-widest uppercase flex items-center gap-1">
            Made with <Heart size={12} fill="var(--copper)" color="var(--copper)" /> for every love story
          </p>
        </div>
      </div>
    </footer>
  );
}
