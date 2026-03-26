import { useState, useEffect } from 'react';
import useIntersection from '../hooks/useIntersection';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const ref = useIntersection();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      quote: "Undangannya melebihi ekspektasi kami. Kertasnya mewah, semua tamu memuji. Tim Kisah Kertas sangat sabar dalam proses revisi.",
      name: "Aisha & Daffa",
      location: "Bandung",
      initials: "AD"
    },
    {
      quote: "Undangan digitalnya keren! Ada musik, animasi halus, dan RSVP memudahkan kami mendata tamu. Harganya sangat worth it.",
      name: "Risa & Nando",
      location: "Jakarta",
      initials: "RN"
    },
    {
      quote: "Pelayanan sangat ramah dan responsif. Desain undangan fisiknya benar-benar elegan dan sesuai dengan tema pernikahan kami.",
      name: "Bima & Sarah",
      location: "Surabaya",
      initials: "BS"
    },
    {
      quote: "Sangat puas dengan hasilnya! Detail emboss-nya rapi banget. Banyak teman yang tanya bikin undangan di mana.",
      name: "Kevin & Tasya",
      location: "Bali",
      initials: "KT"
    },
    {
      quote: "Proses pembuatannya cepat dan hasilnya memuaskan. Undangan digitalnya sangat interaktif dan mudah digunakan oleh tamu.",
      name: "Reza & Dina",
      location: "Yogyakarta",
      initials: "RD"
    }
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 400); // Wait for fade out
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 400); // Wait for fade out
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isAnimating]);

  return (
    <section className="py-24 px-6 bg-charcoal" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="fade-up text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light">
            Klien Kami <br className="md:hidden" />
            <span className="italic text-copper">Berbagi Cerita</span>
          </h2>
        </div>

        <div className="fade-up relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div 
            className={`bg-[#35302D] p-10 md:p-16 border-[0.5px] border-[rgba(181,129,58,0.2)] flex flex-col items-center text-center transition-opacity duration-400 ease-in-out ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="var(--copper)" color="var(--copper)" />
              ))}
            </div>
            
            <p className="font-serif text-2xl md:text-3xl text-ivory font-light leading-relaxed mb-12 italic">
              "{testimonials[currentIndex].quote}"
            </p>
            
            <div className="flex flex-col items-center gap-4 mt-auto">
              <div className="w-14 h-14 rounded-full border-[0.5px] border-copper flex items-center justify-center shrink-0 mb-2">
                <span className="font-serif text-xl text-copper">{testimonials[currentIndex].initials}</span>
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-ivory tracking-wide uppercase">{testimonials[currentIndex].name}</p>
                <p className="font-sans text-xs text-[#B0A9A4] tracking-widest uppercase mt-2">{testimonials[currentIndex].location}</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border-[0.5px] border-smoke flex items-center justify-center text-smoke hover:border-copper hover:text-copper transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (isAnimating || currentIndex === idx) return;
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(idx);
                      setIsAnimating(false);
                    }, 400);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'bg-copper w-6' : 'bg-smoke/30 hover:bg-smoke/60'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border-[0.5px] border-smoke flex items-center justify-center text-smoke hover:border-copper hover:text-copper transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
