import { useEffect, useState } from 'react';

const SAMPLE_Y = 42;

export default function useHeaderTheme(initial = 'dark') {
  const [theme, setTheme] = useState(initial);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-tone]'));
    if (!nodes.length || !('IntersectionObserver' in window)) return undefined;

    const live = new Map();
    let observer;

    const connect = () => {
      if (observer) observer.disconnect();
      live.clear();

      const bottom = Math.max(window.innerHeight - SAMPLE_Y - 1, 0);

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) live.set(entry.target, entry.target.dataset.tone);
            else live.delete(entry.target);
          });
          const current = nodes.filter((node) => live.has(node)).pop();
          if (current) setTheme(live.get(current));
        },
        { rootMargin: `-${SAMPLE_Y}px 0px -${bottom}px 0px` },
      );

      nodes.forEach((node) => observer.observe(node));
    };

    connect();
    window.addEventListener('resize', connect);

    return () => {
      window.removeEventListener('resize', connect);
      observer.disconnect();
    };
  }, []);

  return theme;
}
