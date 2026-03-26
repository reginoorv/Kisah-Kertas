import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  const renderMockup = (product) => {
    const mockups = {
      1: { bg: "bg-ivory", border: "border-copper/30", innerBg: "bg-ivory", innerBorder: "border-copper/20", names: "Aisha & Daffa", nameColor: "text-rose", line: "bg-rose/50", date: "12 . 10 . 24", dateColor: "text-charcoal" },
      2: { bg: "bg-[#2D2926]", border: "border-copper/30", innerBg: "bg-[#2D2926]", innerBorder: "border-copper/50", names: "Bima & Clara", nameColor: "text-copper-lt", line: "bg-copper-lt/50", date: "05 . 11 . 24", dateColor: "text-ivory" },
      3: { bg: "bg-ivory", border: "border-rose/30", innerBg: "bg-[#F0E4DC]", innerBorder: "border-rose/30", names: "Diana & Erlangga", nameColor: "text-charcoal", line: "bg-charcoal/30", date: "20 . 12 . 24", dateColor: "text-charcoal" },
      4: { bg: "bg-[#EDE8DF]", border: "border-copper/30", innerBg: "bg-[#EDE8DF]", innerBorder: "border-copper/40", names: "Fira & Galih", nameColor: "text-copper", line: "bg-copper/50", date: "08 . 01 . 25", dateColor: "text-charcoal" },
      5: { bg: "bg-[#C9A99A]", border: "border-ivory/30", innerBg: "bg-gradient-to-b from-[#C9A99A] to-[#B5813A]", innerBorder: "border-ivory/20", names: "Hana & Indra", nameColor: "text-ivory", line: "bg-ivory/50", date: "14 . 02 . 25", dateColor: "text-ivory" },
      6: { bg: "bg-[#D4C5B0]", border: "border-charcoal/20", innerBg: "bg-[#D4C5B0]", innerBorder: "border-charcoal/20", names: "Maya & Naufal", nameColor: "text-charcoal", line: "bg-charcoal/50", date: "22 . 03 . 25", dateColor: "text-charcoal" }
    };

    const m = mockups[product.id] || mockups[1];

    return (
      <div className={`w-full max-w-[140px] h-full relative z-0 shadow-md ${m.bg} border-[0.5px] ${m.border} flex flex-col items-center justify-center p-4`}>
        <div className={`w-full h-full border-[0.5px] ${m.innerBorder} flex flex-col items-center justify-center p-2 ${m.innerBg}`}>
          <span className={`font-script text-2xl ${m.nameColor} mb-2 text-center leading-none`}>{m.names}</span>
          <div className={`w-8 h-[0.5px] ${m.line} mb-2`}></div>
          <span className={`font-serif text-[10px] ${m.dateColor}`}>{m.date}</span>
        </div>
      </div>
    );
  };

  const CardContent = (
    <div className="group flex flex-col bg-ivory border-[0.5px] border-sand hover:border-copper hover:-translate-y-1.5 hover:shadow-[8px_8px_0_rgba(181,129,58,0.1)] transition-all duration-300 ease-in-out cursor-pointer h-full">
      {/* Thumbnail */}
      <div 
        className="relative h-[220px] w-full flex items-center justify-center p-6 overflow-hidden"
        style={{ backgroundColor: product.bgColor }}
      >
        {/* Badge */}
        {product.badge && (
          <div 
            className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-widest font-medium z-10"
            style={{ 
              backgroundColor: product.badgeColor === 'copper' ? 'var(--copper)' : 'var(--rose)',
              color: 'var(--ivory)'
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Mockup SVG or Image */}
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover shadow-md" referrerPolicy="no-referrer" />
        ) : product.type === 'digital' ? (
          <div className="w-full h-full flex flex-col items-center justify-center border-[0.5px] border-charcoal/20 bg-ivory p-4 shadow-md">
            <span className="font-serif text-2xl text-charcoal mb-2 text-center">{product.name}</span>
            <span className="font-sans text-[10px] uppercase tracking-widest text-smoke">Digital Preview</span>
          </div>
        ) : (
          renderMockup(product)
        )}
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="font-sans text-[10px] uppercase tracking-widest text-smoke mb-2">
          {product.type === 'fisik' ? 'Undangan Fisik' : product.type === 'digital' ? 'Undangan Digital' : 'Fisik + Digital'}
        </span>
        <h3 className="font-serif text-xl text-charcoal mb-2">{product.name}</h3>
        <p className="font-sans text-sm text-smoke font-light line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-end justify-between mt-auto pt-4 border-t-[0.5px] border-sand">
          <div>
            <p className="font-sans text-sm font-medium text-charcoal">
              {typeof product.price === 'number' ? `Rp ${product.price.toLocaleString('id-ID')}` : product.price}
            </p>
            <p className="font-sans text-[10px] text-smoke">{product.priceSub || (product.type === 'fisik' ? '/lembar' : '/desain')}</p>
          </div>
          <ArrowRight size={18} className="text-copper transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );

  if (product.demoUrl) {
    return (
      <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
