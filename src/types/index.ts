export type EventMode = 'In-Person' | 'Online' | 'Hybrid';

export type EventCategory = 'Android' | 'Cloud' | 'AI / ML' | 'Flutter' | 'Web' | 'General';

export type EventStatus = 'upcoming' | 'past';

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  mode: EventMode;
  category: EventCategory;
  description: string;
  fullDetails?: string;
  speakers: string[];
  image: string;
  status: EventStatus;
  registrationUrl?: string;
  seatsLeft?: number;
  agenda?: { time: string; topic: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  department: 'Core' | 'Technical' | 'Community' | 'Design';
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  skills: string[];
  isAlumni?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  organization?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrCollege: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface Sponsor {
  id: string;
  name: string;
  category: 'Global' | 'Community' | 'Venue' | 'Ecosystem';
  logoText: string;
  description: string;
  website: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Events' | 'Speaking' | 'Swags';
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  badge: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  eventName: string;
}
