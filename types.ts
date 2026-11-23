import React from 'react';

export enum Page {
  Home = 'Home',
  VoiceAgents = 'AI Voice Agents',
  WebsiteCreation = 'Website & E-Commerce',
  AIAutomation = 'AI Automations & Agents',
  HospitalManagement = 'MediCore HMS',
  MatlabAcademy = 'MATLAB & FDE Academy',
  About = 'About & Leadership',
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
  linkedin?: string;
}
