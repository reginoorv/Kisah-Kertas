import useIntersection from '../hooks/useIntersection';

export default function TrustBar() {
  const ref = useIntersection();

  return (
    <section className="bg-charcoal py-10 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="fade-up flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12 lg:justify-between">
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs md:text-sm font-medium uppercase tracking-[0.15em] text-ivory text-center">
              Pengiriman Seluruh Indonesia
            </span>
          </div>
          
          <div className="hidden lg:block w-1 h-1 rounded-full bg-copper"></div>
          
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs md:text-sm font-medium uppercase tracking-[0.15em] text-ivory text-center">
              Revisi Sampai Puas
            </span>
          </div>
          
          <div className="hidden lg:block w-1 h-1 rounded-full bg-copper"></div>
          
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs md:text-sm font-medium uppercase tracking-[0.15em] text-ivory text-center">
              Kertas Premium
            </span>
          </div>
          
          <div className="hidden lg:block w-1 h-1 rounded-full bg-copper"></div>
          
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs md:text-sm font-medium uppercase tracking-[0.15em] text-ivory text-center">
              Respon 1×24 Jam
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
