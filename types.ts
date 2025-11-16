// FIX: Import React to resolve the "Cannot find namespace 'React'" error for React.ReactNode.
import React from 'react';

export enum Page {
  Home = 'Home',
  LinkedInGrowth = 'LinkedIn Growth',
  VIMSCards = 'VIMS Cards',
  JillJillAI = 'JillJill AI Voice Agent',
  DigitalMarketing = 'Digital Marketing',
  AIAutomation = 'AI Automation',
  About = 'About',
  Contact = 'Contact',
}

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    role: string;
}