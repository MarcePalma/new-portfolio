import { ReactNode } from "react";

export interface IconsGridProps {
  title: string;
  image: string;
  href: string;
}

export interface ParallaxHeaderProps {
  image: string;
  strength: number;
  children: React.ReactNode;
}

export interface ImageData {
  src: string;
  description: string;
}

export interface ProjectShowcaseProps {
  title: string;
  images: { src: string; description: string; }[];
  description: string;
  responsibilites: string;
  technologies: string[];
  duration: string;
}

export interface ParallaxSectionProps {
  image: string;
  strength: number;
  children: ReactNode;
}

export interface Message {
  sender: 'user' | 'bot';
  text: string;
}