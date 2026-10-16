import { useEffect, useRef } from 'react';

export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const items = root.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
