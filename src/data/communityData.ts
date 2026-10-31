import { Sponsor, Testimonial, FAQItem, TimelineMilestone, GalleryPhoto } from '../types';

export interface WhatWeDoItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
}

export const sampleWhatWeDo: WhatWeDoItem[] = [
  {
    id: 'wwd-1',
    icon: '🎤',
    title: 'Monthly Tech Meetups',
    subtitle: 'Expert Talks & Keynotes',
    description: 'We organize free monthly in-person tech sessions inviting Google Developer Experts, industry engineering leads, and homegrown tech founders to speak on cutting-edge stacks.',
    bulletPoints: ['20-45 minute technical deep-dives', 'Live code architecture breakdowns', 'Q&A and open networking sessions']
  },
  {
    id: 'wwd-2',
    icon: '💻',
    title: 'Hands-on CodeLabs & Workshops',
    subtitle: 'Learn By Actually Building',
    description: 'We believe slides are not enough. Bring your laptop, clone repo starters, and build functional apps with real-time mentor assistance in the room.',
    bulletPoints: ['Step-by-step guided coding', 'Free Google Cloud Skills Boost credits', 'Zero experience to deployed project']
  },
  {
    id: 'wwd-3',
    icon: '🚀',
    title: 'Hackathons & Flagship DevFest',
    subtitle: 'Annual Celebration of Tech',
    description: 'Our annual DevFest conference brings 450+ developers together for multi-track keynotes, project showcases, community hackathons, and company booths.',
    bulletPoints: ['Multi-track parallel stages', 'Exclusive Google swags & t-shirts', 'Tech career opportunities in Jharkhand']
  },
  {
    id: 'wwd-4',
    icon: '🎓',
    title: 'Campus Outreach & Study Jams',
    subtitle: 'Partnering With Colleges',
    description: 'Partnering with universities across Ranchi (BIT Mesra, Ranchi Univ, NIFFT, St. Xavier’s) to train students in cloud computing, Android, and AI.',
    bulletPoints: ['Google Cloud Study Jams certification', 'Android Study Jams cohort batches', 'Campus ambassador mentorship circles']
  },
  {
    id: 'wwd-5',
    icon: '👩‍💻',
    title: 'Women Techmakers (WTM) Initiative',
    subtitle: 'Diversity & Inclusion in STEM',
    description: 'Empowering women engineers, data scientists, and students with dedicated leadership mentorship, IWD celebrations, and female speaker panels.',
    bulletPoints: ['Dedicated mentorship cohorts', 'Annual International Women’s Day summit', 'Safe, supportive learning space']
  },
  {
    id: 'wwd-6',
    icon: '🤝',
    title: 'Open Source & Career Mentorship',
    subtitle: 'Connecting Ranchi to Global Tech',
    description: 'Helping developers build open source portfolios, prepare for technical interviews, and transition into senior engineering and remote roles.',
    bulletPoints: ['GitHub portfolio reviews', 'Resume & tech interview tips', 'First-time speaker coaching program']
  }
];

export const sampleSponsors: Sponsor[] = [
  {
    id: 'sp-1',
    name: 'Google for Developers',
    category: 'Global',
    logoText: 'Google Developers',
    description: 'Providing platform credits, speaker networks, and developer community resources globally.',
    website: 'https://developers.google.com'
  },
  {
    id: 'sp-2',
    name: 'Jharkhand Innovation Lab',
    category: 'Ecosystem',
    logoText: 'JIL Startup Hub',
    description: 'Supporting regional tech entrepreneurs, incubation centers, and university hackathons.',
    website: 'https://example.com/jil'
  },
  {
    id: 'sp-3',
    name: 'Ranchi CoWork & Tech Park',
    category: 'Venue',
    logoText: 'Ranchi Tech Park',
    description: 'Generously providing auditorium halls, high-speed fiber internet, and meetup space.',
    website: 'https://example.com/techpark'
  },
  {
    id: 'sp-4',
    name: 'CloudLabs Jharkhand',
    category: 'Community',
    logoText: 'CloudLabs India',
    description: 'Sponsoring pizza, refreshments, and cloud lab vouchers for student developers.',
    website: 'https://example.com/cloudlabs'
  }
];

export const sampleTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aditya Raj',
    role: 'Final Year CSE Student',
    companyOrCollege: 'BIT Mesra',
    comment: 'Attending GDG Ranchi Cloud Study Jam helped me earn 4 Google Cloud skill badges and clear my Associate Cloud Engineer exam on the first attempt! The mentors are super approachable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-2',
    name: 'Swati Kumari',
    role: 'Frontend Developer',
    companyOrCollege: 'Local SaaS Startup, Ranchi',
    comment: 'I gave my very first public tech talk on Jetpack Compose at DevFest Ranchi 2024. The organizers guided me through deck preparation and public speaking tips. Highly recommend participating!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-3',
    name: 'Rameshwar Tudu',
    role: 'Android Engineer',
    companyOrCollege: 'Freelance Mobile Dev',
    comment: 'Before GDG Ranchi, developers in Jharkhand felt isolated from tier-1 tech conferences. Now we get world-class GDEs and Google engineers delivering workshops right here in Ranchi!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-4',
    name: 'Kavita Verma',
    role: 'AI Researcher',
    companyOrCollege: 'Ranchi University Tech Cell',
    comment: 'The Build With AI summit in Ranchi was incredible. We were fine-tuning Gemini models on vertex AI within 2 hours of hands-on labs. Kudos to the GDG organizing team!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80'
  }
];

export const sampleFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are GDG Ranchi events and workshops free to attend?',
    answer: 'Yes! 100% of our meetups, workshops, study jams, and DevFest sessions are completely free. We are a volunteer community supported by Google for Developers and local sponsors.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'Do I need to be a college student or computer science major to join?',
    answer: 'Not at all! Our community welcomes students, working software engineers, freelance developers, designers, product managers, and beginners taking their first steps in programming.',
    category: 'General'
  },
  {
    id: 'faq-3',
    question: 'How do I register for upcoming meetups and get a seat?',
    answer: 'Visit our Events page or the official GDG community platform page. We open RSVPs 2-3 weeks prior to each event. Due to venue capacity, seats are allotted on a first-come, first-served basis.',
    category: 'Events'
  },
  {
    id: 'faq-4',
    question: 'How can I submit a talk proposal or become a speaker?',
    answer: 'We encourage first-time and seasoned speakers alike! Submit your talk topic via our Contact / CFP form. Our technical team will review the proposal and connect with you.',
    category: 'Speaking'
  },
  {
    id: 'faq-5',
    question: 'Are there free Google swags and certificates provided?',
    answer: 'Yes! We distribute Google Developer t-shirts, laptop stickers, and badges at DevFest and flagship events, as well as digital completion certificates for multi-week study jams.',
    category: 'Swags'
  },
  {
    id: 'faq-6',
    question: 'Can our college or campus host a GDG Ranchi workshop?',
    answer: 'Absolutely! We frequently collaborate with colleges across Ranchi (BIT Mesra, Ranchi University, NIFFT, etc.). Reach out through our contact page to discuss hosting an Android, Cloud, or AI study jam at your campus.',
    category: 'Events'
  }
];

export const sampleTimeline: TimelineMilestone[] = [
  {
    year: '2018',
    title: 'Chapter Inception',
    description: 'GDG Ranchi officially founded by 4 passionate developers to bring Google developer knowledge to Jharkhand.',
    badge: 'ESTD 2018'
  },
  {
    year: '2019',
    title: 'First In-Person DevFest',
    description: 'Hosted the historic inaugural DevFest Ranchi with 180+ attendees and 6 technical sessions at Aryabhatta Auditorium.',
    badge: 'MILESTONE'
  },
  {
    year: '2020-2021',
    title: 'Virtual Tech Jams & Cloud Jams',
    description: 'Conducted 25+ online webinars and cloud hands-on quests during the pandemic, engaging over 1,200 remote learners.',
    badge: 'PANDEMIC PIVOT'
  },
  {
    year: '2022-2023',
    title: 'Post-Pandemic Resurgence & WTM',
    description: 'Relaunched in-person meetups, launched Women Techmakers Ranchi chapter, and expanded campus ambassador circles.',
    badge: 'GROWTH'
  },
  {
    year: '2024',
    title: 'Record DevFest 2024',
    description: 'Over 450+ developers gathered at St. Xavier’s College Auditorium with 8 keynote speakers and partner tech booths.',
    badge: 'FLAGSHIP'
  },
  {
    year: '2025-2026',
    title: 'AI Era & UI Makeover Initiative',
    description: 'Leading the Build with AI summit series, Gemini multimodal hackathons, and community engineering challenges.',
    badge: 'PRESENT'
  }
];

export const sampleGallery: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'DevFest Ranchi Keynote Crowd',
    caption: '400+ developers packed inside the auditorium during the DevFest opening session.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
    eventName: 'DevFest Ranchi'
  },
  {
    id: 'gal-2',
    title: 'Hands-on Cloud Lab Session',
    caption: 'Participants working on Google Kubernetes Engine labs with laptops and mentors.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
    eventName: 'Cloud Study Jam'
  },
  {
    id: 'gal-3',
    title: 'Women Techmakers Networking Circle',
    caption: 'Inspiring breakout discussions during International Women’s Day celebration.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    eventName: 'WTM Ranchi'
  },
  {
    id: 'gal-4',
    title: 'Swags, Stickers & Closing Group Photo',
    caption: 'Attendees proudly holding Google Developer stickers, bags, and speaker awards.',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80',
    eventName: 'Google I/O Extended'
  },
  {
    id: 'gal-5',
    title: 'Flutter Mobile App Code-Along',
    caption: 'Developers coding real-time Riverpod state management together in the computer lab.',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
    eventName: 'Flutter Forward'
  },
  {
    id: 'gal-6',
    title: 'Speaker Presentation on Google Gemini',
    caption: 'Invited Google Developer Expert explaining Multimodal Gemini API live on stage.',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80',
    eventName: 'Build with AI'
  },
  {
    id: 'gal-7',
    title: 'High-Energy Lunch & Hallway Track',
    caption: 'Students networking with senior engineers over hot pizza and refreshments.',
    imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=80',
    eventName: 'DevFest Ranchi'
  },
  {
    id: 'gal-8',
    title: 'Android Compose Architecture Jam',
    caption: 'Deep-dive session rebuilding an e-commerce app with modern declarative Jetpack Compose.',
    imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&auto=format&fit=crop&q=80',
    eventName: 'Android Study Jam'
  }
];

export const samplePartnerCampuses = [
  { name: 'Birla Institute of Technology (BIT) Mesra', city: 'Ranchi', type: 'Premier Institute' },
  { name: 'Ranchi University Campus', city: 'Ranchi', type: 'State University' },
  { name: 'National Institute of Advanced Manufacturing Tech (NIFFT)', city: 'Hatia, Ranchi', type: 'Central Institute' },
  { name: 'St. Xavier’s College Ranchi', city: 'Dr. Camil Bulcke Path', type: 'Autonomous College' },
  { name: 'Indian Institute of Information Technology (IIIT) Ranchi', city: 'Ranchi', type: 'Institute of National Importance' }
];
