
// Animation durations in milliseconds
export const DURATIONS = {
  FAST: 300,
  NORMAL: 500,
  SLOW: 800
};

// Animation easings
export const EASINGS = {
  EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
  EASE_OUT: 'cubic-bezier(0, 0, 0.2, 1)',
  EASE_IN: 'cubic-bezier(0.4, 0, 1, 1)',
  SHARP: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

// Animation variants for framer-motion
export const VARIANTS = {
  FADE_IN: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: EASINGS.EASE_OUT } }
  },
  FADE_UP: {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: EASINGS.EASE_OUT } 
    }
  },
  FADE_DOWN: {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: EASINGS.EASE_OUT } 
    }
  },
  STAGGER_CHILDREN: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }
};

// Check if element is in viewport
export const isInViewport = (element: HTMLElement, offset = 0): boolean => {
  const rect = element.getBoundingClientRect();
  
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= 0
  );
};
