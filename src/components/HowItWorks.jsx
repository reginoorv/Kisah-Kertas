import useIntersection from '../hooks/useIntersection';

export default function HowItWorks() {
  const ref = useIntersection();

  const steps = [
    {
      num: "01",
      title: "Pilih Desain",
      desc: "Pilih dari 100+ koleksi desain premium kami atau request custom desain sesuai tema pernikahan kalian."
    },
    {
      num: "02",
      title: "Isi Data & Revisi",
      desc: "Tim kami akan memproses draft dalam 1×24 jam. Nikmati layanan revisi sampai desain benar-benar sempurna."
    },
    {
      num: "03",
      title: "Terima & Bagikan",
      desc: "Undangan fisik dikirim dengan aman ke alamatmu, dan undangan digital langsung aktif untuk dibagikan."
    }
  ];

  return (
    <section id="cara-kerja" className="py-24 px-6 bg-ivory" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="fade-up text-center mb-20">
          <span className="inline-block font-sans text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-copper mb-4">
            Cara Kerja
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light">
            Tiga Langkah <span className="italic text-copper">Mudah</span>
          </h2>
        </div>

        <div className="fade-up relative flex flex-col lg:flex-row justify-between gap-12 lg:gap-6">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[0.5px] bg-copper/30 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center w-full lg:w-1/3 px-4">
              <div className="w-24 h-24 rounded-full bg-ivory border-[0.5px] border-copper flex items-center justify-center mb-8 shadow-[0_0_0_8px_var(--ivory)]">
                <span className="font-serif text-4xl text-copper">{step.num}</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-4">{step.title}</h3>
              <p className="font-sans text-smoke font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
