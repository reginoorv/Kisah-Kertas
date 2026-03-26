import { useEffect, useRef } from 'react';

/**
 * Custom hook to apply Intersection Observer for scroll animations
 * @param {Object} options - Intersection Observer options
 * @returns {Object} React ref to attach to the container
 */
export default function useIntersection(options = { threshold: 0.15 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.fade-up');
    
    if (!elements || elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing once visible
          // observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [options]);

  return containerRef;
}
