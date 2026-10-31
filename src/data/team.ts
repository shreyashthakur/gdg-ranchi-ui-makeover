import { TeamMember } from '../types';

/**
 * Fictional sample team data for the GDG Ranchi UI Makeover Challenge.
 * These profiles are created strictly for workshop demonstration purposes.
 */
export const sampleTeamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Aarav Sharma',
    role: 'Lead Organizer & Community Manager',
    department: 'Core',
    bio: 'Passionate tech community builder with 6+ years in organizing developer summits, hackathons, and student bootcamps across Jharkhand. Fictional sample profile.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    skills: ['Community Leadership', 'Event Management', 'Public Speaking', 'Mentorship'],
    socialLinks: {
      twitter: 'https://twitter.com/example',
      linkedin: 'https://linkedin.com/in/example',
      github: 'https://github.com/example'
    }
  },
  {
    id: 'member-2',
    name: 'Priyanka Sen',
    role: 'Co-Organizer & WTM Ambassador',
    department: 'Core',
    bio: 'Software engineer passionate about diversity in tech, cloud architecture, and mentoring first-time speakers. Fictional sample profile.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
    skills: ['Women in Tech', 'Cloud Architecture', 'Mentoring', 'Public Speaking'],
    socialLinks: {
      twitter: 'https://twitter.com/example',
      linkedin: 'https://linkedin.com/in/example'
    }
  },
  {
    id: 'member-3',
    name: 'Rohan Verma',
    role: 'Technical Lead (Mobile & Flutter)',
    department: 'Technical',
    bio: 'Mobile application architect specializing in Flutter cross-platform development, Dart internals, and Android Jetpack libraries. Fictional sample profile.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    skills: ['Flutter', 'Dart', 'Kotlin', 'Android Jetpack', 'Firebase'],
    socialLinks: {
      github: 'https://github.com/example',
      linkedin: 'https://linkedin.com/in/example'
    }
  },
  {
    id: 'member-4',
    name: 'Ananya Mukherjee',
    role: 'AI / Machine Learning Specialist',
    department: 'Technical',
    bio: 'Data scientist exploring large language models, generative AI workflows, and computer vision models on Google Vertex AI. Fictional sample profile.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80',
    skills: ['Gemini API', 'PyTorch', 'Vertex AI', 'Python', 'MLOps'],
    socialLinks: {
      twitter: 'https://twitter.com/example',
      github: 'https://github.com/example'
    }
  },
  {
    id: 'member-5',
    name: 'Deepak Kumar',
    role: 'Cloud & Infrastructure Lead',
    department: 'Technical',
    bio: 'DevOps enthusiast who loves containerizing workloads with Docker, orchestrating clusters on GKE, and CI/CD pipelines. Fictional sample profile.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    skills: ['GCP', 'Kubernetes', 'Docker', 'Terraform', 'Linux'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/example',
      github: 'https://github.com/example'
    }
  },
  {
    id: 'member-6',
    name: 'Tanvi Agarwal',
    role: 'Design & Visual Identity Lead',
    department: 'Design',
    bio: 'UI/UX enthusiast creating branding, badges, social creatives, and swag designs for community events and hackathons. Fictional sample profile.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80',
    skills: ['Figma', 'Graphic Design', 'Brand Identity', 'Motion Graphics'],
    socialLinks: {
      twitter: 'https://twitter.com/example',
      linkedin: 'https://linkedin.com/in/example'
    }
  },
  {
    id: 'member-7',
    name: 'Siddharth Roy',
    role: 'Web Technologies Lead',
    department: 'Technical',
    bio: 'Fullstack developer building fast web applications with React, TypeScript, Next.js, and modern CSS. Open-source contributor. Fictional sample profile.',
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=80',
    skills: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Web Vitals'],
    socialLinks: {
      github: 'https://github.com/example',
      linkedin: 'https://linkedin.com/in/example'
    }
  },
  {
    id: 'member-8',
    name: 'Neha Topno',
    role: 'Campus Relations & Logistics Lead',
    department: 'Community',
    bio: 'Connecting student developer clubs from colleges across Ranchi with industry mentors, workshops, and study jam credits. Fictional sample profile.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80',
    skills: ['Student Outreach', 'Logistics', 'Public Relations', 'Coordination'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/example'
    }
  }
];

export const sampleAlumniMembers: TeamMember[] = [
  {
    id: 'alumni-1',
    name: 'Rajesh Srivastav',
    role: 'Founding Organizer (2018-2021)',
    department: 'Core',
    bio: 'Co-founded GDG Ranchi in 2018. Now working as Staff Systems Architect in Bengaluru.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80',
    skills: ['Community Vision', 'Android Architecture'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/example'
    },
    isAlumni: true
  },
  {
    id: 'alumni-2',
    name: 'Meenakshi Rao',
    role: 'Former WTM Lead (2019-2022)',
    department: 'Community',
    bio: 'Spearheaded initial Women Techmakers initiatives in Jharkhand. Now Lead Engineer at CloudTech.',
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop&q=80',
    skills: ['WTM Leadership', 'Cloud Architecture'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/example'
    },
    isAlumni: true
  }
];
