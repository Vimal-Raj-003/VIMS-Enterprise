import React from 'react';

export enum Page {
  Home = 'Home',
  VoiceAgents = 'Voice AI',
  WebsiteCreation = 'Web Creation',
  AIAutomation = 'AI Automations',
  HospitalManagement = 'HMS',
  MatlabAcademy = 'Academy',
  About = 'About',
  Contact = 'Contact',
  TeamProfile = 'Leadership Profile',
  PrivacyPolicy = 'Privacy Policy',
  TermsOfService = 'Terms of Service',
  DataDeletion = 'Data Deletion',
}

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  imageUrl: string;
  shortBio: string;
  description: string;
  expertise: string[];
  experience: string;
  email: string;
  phone?: string;
  whatsappUrl?: string;
  linkedin?: string;
}

export interface SummitPhoto {
  id: string;
  src: string;
  badge: string;
  title: string;
  caption: string;
}
