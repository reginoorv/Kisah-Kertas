import { useEffect } from 'react';
import useIntersection from '../hooks/useIntersection';
import { Heart, Feather, Sparkles, ArrowRight } from 'lucide-react';

export default function About() {
  const ref = useIntersection();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="bg-ivory min-h-screen pt-24" ref={ref}>
      {/* Hero Section */}
      <section className="py-24 px-6 text-center fade-up relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sand rounded-full opacity-50 blur-3xl -z-10"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block font-sans text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-copper mb-6">
            Tentang Kisah Kertas
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-charcoal font-light mb-8 leading-tight">
            Merangkai Cerita, <br />
            <span className="italic text-copper">Menyatukan Rasa</span>
          </h1>
          <p className="font-sans text-smoke text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Kami percaya bahwa undangan bukan sekadar secarik kertas atau tautan digital. Ia adalah sapaan pertama dari hari bahagia Anda, sebuah cenderamata yang akan disimpan sebagai kenangan.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 bg-sand">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 fade-up flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5] bg-ivory p-4 shadow-2xl">
              <div className="absolute inset-0 border-[0.5px] border-copper/30 m-4 z-10 pointer-events-none"></div>
              <img 
                src="/awal-mula.jpg" 
                alt="Ruang kerja artisan Kisah Kertas" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 fade-up">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8">
              Awal Mula <span className="italic text-copper">Perjalanan</span>
            </h2>
            <div className="space-y-6 font-sans text-smoke text-base md:text-lg font-light leading-relaxed">
              <p>
                Kisah Kertas lahir dari sebuah ruang kerja kecil di sudut kota, berawal dari kecintaan kami pada seni kertas, tipografi, dan cerita-cerita romantis. Kami menyadari bahwa di era yang serba cepat ini, sentuhan personal seringkali terlupakan.
              </p>
              <p>
                Nama "Kisah Kertas" sendiri dipilih karena kami ingin mengembalikan esensi dari sebuah undangan: sebagai surat yang membawa rasa bahagia, harapan, dan doa dari kedua mempelai kepada orang-orang terkasih.
              </p>
              <p>
                Setiap lipatan kertas, setiap guratan tinta emas, dan setiap piksel dalam desain digital kami kerjakan dengan ketelitian tingkat tinggi. Karena bagi kami, karya yang baik adalah karya yang memiliki jiwa.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t-[0.5px] border-copper/30">
              <p className="font-serif italic text-2xl text-charcoal">
                "Karena setiap undangan adalah rasa yang ingin kamu sampaikan."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-32 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block font-sans text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-copper mb-6 fade-up">
            Nilai Kami
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-20 fade-up">
            Filosofi di Balik <span className="italic text-copper">Karya</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
            {/* Value 1 */}
            <div className="flex flex-col items-center text-center fade-up">
              <div className="w-20 h-20 rounded-full bg-blush flex items-center justify-center text-copper mb-8 shadow-[8px_8px_0_rgba(181,129,58,0.08)]">
                <Sparkles size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-4">Estetika Abadi</h3>
              <p className="font-sans text-smoke font-light leading-relaxed">
                Kami menghindari tren sesaat. Desain kami berakar pada prinsip keanggunan klasik yang akan tetap terlihat indah dan relevan meski dilihat puluhan tahun dari sekarang.
              </p>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col items-center text-center fade-up" style={{ transitionDelay: '0.1s' }}>
              <div className="w-20 h-20 rounded-full bg-rose flex items-center justify-center text-ivory mb-8 shadow-[8px_8px_0_rgba(181,129,58,0.08)]">
                <Feather size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-4">Material Premium</h3>
              <p className="font-sans text-smoke font-light leading-relaxed">
                Dari kertas katun bertekstur hingga segel lilin tembaga asli, kami hanya menggunakan material terbaik. Kualitas sentuhan fisik adalah prioritas utama kami.
              </p>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col items-center text-center fade-up" style={{ transitionDelay: '0.2s' }}>
              <div className="w-20 h-20 rounded-full bg-sand flex items-center justify-center text-copper mb-8 shadow-[8px_8px_0_rgba(181,129,58,0.08)]">
                <Heart size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-4">Sentuhan Personal</h3>
              <p className="font-sans text-smoke font-light leading-relaxed">
                Setiap pasangan berbeda. Kami mendengarkan cerita Anda dan menerjemahkannya ke dalam elemen visual yang unik, menjadikan undangan ini benar-benar milik Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Artisan Section */}
      <section className="py-24 px-6 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
          {/* Left: Text */}
          <div className="w-full md:w-1/2 fade-up">
            <span className="inline-block font-sans text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-copper mb-6">
              Di Balik Layar
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              Dedikasi Sang <span className="italic text-copper">Artisan</span>
            </h2>
            <div className="space-y-6 font-sans text-[#B0A9A4] text-base md:text-lg font-light leading-relaxed">
              <p>
                Tim kami terdiri dari desainer grafis, ilustrator, dan pengrajin kertas yang memiliki obsesi yang sama terhadap detail. Kami tidak memproduksi secara massal; setiap pesanan ditangani dengan perhatian penuh.
              </p>
              <p>
                Proses pengerjaan kami melibatkan banyak tahapan manual. Mulai dari pencampuran warna tinta, proses hot foil stamping, hingga pengikatan pita sutra dan pengecapan wax seal. Semuanya dilakukan dengan tangan untuk memastikan kualitas yang sempurna.
              </p>
            </div>
            <a 
              href="/portfolio"
              className="inline-flex items-center gap-3 mt-10 text-copper font-sans text-sm font-medium uppercase tracking-widest hover:text-ivory transition-colors duration-300 group"
            >
              Lihat Hasil Karya Kami 
              <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>

          {/* Right: Artisan Image */}
          <div className="w-full md:w-1/2 fade-up flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square rounded-full overflow-hidden shadow-2xl border-[0.5px] border-copper/30 p-2">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/dedikasi-artisan.jpg" 
                  alt="Proses pembuatan undangan Kisah Kertas" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-blush text-center">
        <div className="max-w-3xl mx-auto fade-up">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8">
            Mari Rangkai <span className="italic text-copper">Ceritamu</span> Bersama Kami
          </h2>
          <p className="font-sans text-smoke text-lg font-light leading-relaxed mb-12">
            Konsultasikan impian pernikahan Anda dengan tim kami. Kami siap membantu mewujudkan undangan yang sempurna untuk hari istimewa Anda.
          </p>
          <a 
            href="https://wa.me/6281234567890?text=Halo%20Kisah%20Kertas!%20Saya%20ingin%20konsultasi%20mengenai%20undangan%20pernikahan%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-charcoal text-ivory text-sm font-medium uppercase tracking-widest hover:bg-copper transition-colors duration-300 shadow-[8px_8px_0_rgba(181,129,58,0.2)] hover:shadow-[4px_4px_0_rgba(181,129,58,0.2)] hover:translate-y-1 hover:translate-x-1"
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>
    </main>
  );
}
