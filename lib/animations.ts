import { type ClassValue } from 'clsx';

export const fadeInUp = (delay: number = 0): ClassValue => {
  return `animate-in fade-in-0 slide-in-from-bottom-4 duration-700 fill-mode-forwards ${
    delay ? `delay-${delay}` : ''
  }`;
};

export const fadeIn = (delay: number = 0): ClassValue => {
  return `animate-in fade-in-0 duration-700 fill-mode-forwards ${
    delay ? `delay-${delay}` : ''
  }`;
};

export const scaleIn = (delay: number = 0): ClassValue => {
  return `animate-in zoom-in-50 duration-700 fill-mode-forwards ${
    delay ? `delay-${delay}` : ''
  }`;
};