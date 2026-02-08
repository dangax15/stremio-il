import React from 'react';
import { CardProps } from '../types';

export const Card: React.FC<CardProps> = ({ title, children, icon, className = '', onClick, variant = 'purple' }) => {
  
  const themeStyles = {
    purple: {
      border: 'hover:border-neon/30',
      glow: 'bg-neon/10',
      iconText: 'text-neon-dark',
      title: 'text-white'
    },
    gold: {
      border: 'hover:border-yellow-500/50 border-yellow-500/20',
      glow: 'bg-yellow-500/10',
      iconText: 'text-yellow-400',
      title: 'text-yellow-100'
    }
  };

  const theme = themeStyles[variant];

  return (
    <div 
      className={`relative p-5 md:p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl overflow-hidden group transition-all duration-300 ${theme.border} ${className}`}
      onClick={onClick}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none ${theme.glow}`}></div>
      
      <div className="flex flex-col h-full relative z-10">
        <div className={`flex items-center mb-4 gap-3 ${theme.iconText}`}>
          {icon && <div className="p-3 rounded-full bg-white/5">{icon}</div>}
          <h3 className={`text-xl md:text-2xl font-bold ${theme.title}`}>{title}</h3>
        </div>
        <div className="text-gray-300 text-lg leading-relaxed flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};