// Intercept anchor clicks and use slowScrollTo
import { slowScrollTo } from './slowScroll';

export function initSlowScroll() {
  document.addEventListener('click', function (e) {
    const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
    if (anchor) {
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        const el = document.getElementById(href.slice(1));
        if (el) {
          e.preventDefault();
          const rect = el.getBoundingClientRect();
          const targetY = rect.top + window.scrollY;
          slowScrollTo(targetY, 60000); // 60000ms for 1 minute scroll
        }
      }
    }
  });
}