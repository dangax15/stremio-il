import { ReactNode } from 'react';

export interface RouteItem {
  path: string;
  label: string;
  component: ReactNode;
}

export interface CardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'purple' | 'gold';
}

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'gold-outline';
  className?: string;
  href?: string;
  target?: string;
}

export interface AccordionItemProps {
  question: string;
  answer: string;
}