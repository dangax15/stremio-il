import React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  href,
  target
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 rounded-full focus:outline-none transform active:scale-95 shadow-lg";
  
  const variants = {
    primary: "bg-neon-dark hover:bg-neon text-white shadow-neon-dark/50 hover:shadow-neon/50 border border-transparent",
    secondary: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10",
    outline: "bg-transparent border-2 border-neon text-neon hover:bg-neon hover:text-white",
    gold: "bg-yellow-600 hover:bg-yellow-500 text-white shadow-yellow-600/50 hover:shadow-yellow-500/50 border border-transparent",
    "gold-outline": "bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel="noopener noreferrer" className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};