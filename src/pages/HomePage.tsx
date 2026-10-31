import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sampleEvents } from '../data/events';
import {
  sampleWhatWeDo,
  sampleSponsors,
  sampleTestimonials,
  sampleFAQs,
  sampleGallery
} from '../data/communityData';
import { sampleTeamMembers } from '../data/team';
import { EventItem, GalleryPhoto } from '../types';
import { EventCard } from '../components/EventCard';
import { EventModal } from '../components/EventModal';
import {
  Users,
  Award,
  Code,
  Compass,
  ArrowRight,
  Zap,
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle,
  ExternalLink,
  Flame,
  Radio,
  Camera,
  HeartHandshake,
  Calendar,
  Sparkles,
  X,
  Target,
  Globe,
  Terminal,
  Cpu,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState<GalleryPhoto | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  // Countdown timer state for DevFest / Next Big Summit
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 14,
    minutes: 35,
    seconds: 40
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address!');
      return;
    }
    setNewsletterError('');
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  // Distinct Upcoming and Past events
  const upcomingEvents = sampleEvents.filter((e) => e.status === 'upcoming');
  const pastEvents = sampleEvents.filter((e) => e.status === 'past').slice(0, 3);

  // Key organizers to display on Home
  const featuredOrganizers = sampleTeamMembers.slice(0, 4);

  // Duplicate gallery array for continuous seamless left-to-right scrolling
  const scrollingPhotos = [...sampleGallery, ...sampleGallery];

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="w-full bg-[#FAFAFA] text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/70">
        {/* Soft Background Accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-amber-100/25 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Modern Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 shadow-2xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4285F4] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4285F4]"></span>
                </span>
                <span className="text-xs font-semibold text-slate-700">
                  Google Developer Groups • Ranchi Chapter
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Where Developers in{' '}
                <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] bg-clip-text text-transparent">
                  Jharkhand
                </span>{' '}
                Connect, Learn &amp; Build.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
                Join our inclusive community of programmers, students, university researchers, and industry tech leaders. Attend hands-on workshops, explore Google AI &amp; Cloud technologies, and collaborate on real-world projects — completely free.
              </p>

              {/* Calls to Action */}
              <div className="pt-2 flex flex-wrap gap-3.5 items-center">
                <a
                  href="#upcoming-events"
                  className="inline-flex items-center justify-center gap-2 bg-[#4285F4] hover:bg-blue-600 active:bg-blue-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Explore Upcoming Events</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-5 py-3.5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all duration-200"
                >
                  <span>About Our Mission</span>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-1.5 text-slate-600 hover:text-[#4285F4] font-medium text-sm px-3 py-2 transition-colors"
                >
                  <span>Become a Speaker</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quick trust metrics */}
              <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 border-t border-slate-200/60">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#34A853]"></div>
                  <span>100% Free Access</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#4285F4]"></div>
                  <span>1,450+ Active Members</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#FBBC05]"></div>
                  <span>Jharkhand Region Hub</span>
                </div>
              </div>
            </div>

            {/* Right Hero Column — Event Countdown Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xl space-y-6 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 via-purple-500/5 to-transparent rounded-bl-3xl pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#4285F4] text-xs font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Next Flagship Event</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live RSVP
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    Build with AI: Gemini &amp; Cloud Summit
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Saturday, November 15, 2025 • Ranchi University</span>
                  </p>
                </div>

                {/* Countdown Timer Board */}
                <div className="space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Registration Closes In:
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl py-3 px-1 shadow-2xs">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block font-sans tracking-tight">
                        {timeLeft.days}
                      </span>
                      <span className="text-[10px] font-medium text-slate-500 uppercase">Days</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl py-3 px-1 shadow-2xs">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block font-sans tracking-tight">
                        {timeLeft.hours}
                      </span>
                      <span className="text-[10px] font-medium text-slate-500 uppercase">Hours</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl py-3 px-1 shadow-2xs">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block font-sans tracking-tight">
                        {timeLeft.minutes}
                      </span>
                      <span className="text-[10px] font-medium text-slate-500 uppercase">Mins</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl py-3 px-1 shadow-2xs">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#4285F4] block font-sans tracking-tight">
                        {timeLeft.seconds}
                      </span>
                      <span className="text-[10px] font-medium text-slate-500 uppercase">Secs</span>
                    </div>
                  </div>
                </div>

                {/* Summit Highlights */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1.5">
                  <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FBBC05]" />
                    <span>What to Expect at this Summit:</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Multimodal Gemini 2.0 CodeLabs, Vertex AI agent orchestration, live microservice deployment on Cloud Run, plus Google swags and lunch.
                  </p>
                </div>

                {/* Primary Card Button */}
                <Link
                  to="/events/event-1"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-sm hover:shadow transition-all"
                >
                  <span>Reserve Your Free Seat</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMMUNITY METRICS & IMPACT DASHBOARD */}
      <section className="py-12 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-center hover:border-blue-200 transition-colors">
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-100/80 flex items-center justify-center text-[#4285F4] mb-3">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                1,450+
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Community Members
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-center hover:border-emerald-200 transition-colors">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-100/80 flex items-center justify-center text-[#34A853] mb-3">
                <Code className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                48+
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Meetups &amp; Labs
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-center hover:border-amber-200 transition-colors">
              <div className="w-10 h-10 mx-auto rounded-xl bg-amber-100/80 flex items-center justify-center text-[#FBBC05] mb-3">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                600+
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Cloud Badges Earned
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-center hover:border-red-200 transition-colors">
              <div className="w-10 h-10 mx-auto rounded-xl bg-red-100/80 flex items-center justify-center text-[#EA4335] mb-3">
                <Flame className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                850+
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Pizzas &amp; Coffee Shared
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-center col-span-2 md:col-span-1 hover:border-purple-200 transition-colors">
              <div className="w-10 h-10 mx-auto rounded-xl bg-purple-100/80 flex items-center justify-center text-purple-600 mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                7+ Years
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Active in Ranchi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEDICATED ABOUT SECTION ON HOME */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#4285F4] text-xs font-semibold">
                <span>About GDG Ranchi Chapter</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Bridging Jharkhand Developers with Global Tech Ecosystems
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Google Developer Group Ranchi (GDG Ranchi) is an independent tech community established in 2018 in Ranchi, Jharkhand. We exist to provide aspiring engineers, college students, and professional software developers direct access to Google technologies, mentorship, and industry networks.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                From our very first meetup with 35 students at Aryabhatta Auditorium to hosting over 450 developers at DevFest Ranchi 2024, our community has grown into the leading tech hub of Jharkhand.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 bg-[#4285F4] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs hover:shadow transition-all"
                >
                  <span>Read Full History &amp; Mission</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors"
                >
                  <span>Meet Organizers</span>
                </Link>
              </div>
            </div>

            {/* Core Values Pillars */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#4285F4]" />
                  <span>Our Guiding Principles</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-100 text-[#4285F4] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <strong className="text-slate-900 block">100% Free Knowledge Access</strong>
                      <span>Zero tuition or ticket fees. All developer sessions are open to everyone regardless of background.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 text-[#34A853] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <strong className="text-slate-900 block">Code-First Practical Learning</strong>
                      <span>We favor hands-on interactive labs, CodeLabs, and building working apps over theoretical lecture slides.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-amber-100 text-[#FBBC05] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <strong className="text-slate-900 block">Inclusive &amp; Welcoming Space</strong>
                      <span>Welcoming beginners, university students, women in STEM, and seasoned senior engineers alike.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-center justify-between text-xs text-emerald-900">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
                  <span>Active campus chapters with BIT Mesra, Ranchi Univ, NIFFT &amp; St. Xavier's</span>
                </div>
                <Link to="/about" className="text-emerald-700 font-semibold hover:underline">
                  Campuses &gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "WHAT WE DO" SECTION */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold">
              Community Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              What We Do at GDG Ranchi
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Explore how we empower developers through year-round programming, conferences, hands-on workshops, and collaborative code jams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {sampleWhatWeDo.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
              >
                <div>
                  <div className="text-3xl mb-4 p-3 rounded-2xl bg-slate-50 w-fit group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#4285F4] uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {item.bulletPoints.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "WHAT DEVELOPERS LEARN AT GDG RANCHI" */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#4285F4] text-xs font-semibold">
              Curriculum Tracks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              What Developers Learn With Us
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Interactive workshops and study tracks powered by official Google curriculum and community mentors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-purple-200 transition-colors space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-3">
                🤖
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Artificial Intelligence &amp; Gemini
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Google Gemini 2.0 API, multimodal prompt engineering, function calling, and building autonomous agentic workflows on Vertex AI.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-200 transition-colors space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-3">
                ☁️
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Google Cloud Platform &amp; DevOps
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Google Kubernetes Engine (GKE), serverless Cloud Run microservices, BigQuery analytics, and certification study jams.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-cyan-200 transition-colors space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold mb-3">
                📱
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Flutter &amp; Multiplatform Mobile
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cross-platform apps for Android, iOS, web, and desktop from a single Dart codebase with Riverpod and Firebase auth.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-green-200 transition-colors space-y-2">
              <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center font-bold mb-3">
                ⚡
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Modern Android &amp; Jetpack Compose
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Declarative UI with Compose, Kotlin Coroutines, reactive architecture, and modern Android 15 developer enhancements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-200 transition-colors space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-3">
                🌐
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Web Performance &amp; Modern CSS
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Core Web Vitals, Progressive Web Apps (PWA), React 19, TypeScript architecture, and high-performance layouts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-pink-200 transition-colors space-y-2">
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold mb-3">
                👩‍💻
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Women Techmakers (WTM) Ranchi
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Visibility, community, and mentorship for women in technology through dedicated cohorts, IWD celebrations, and female speaker panels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. UPCOMING EVENTS SECTION */}
      <section id="upcoming-events" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[#34A853] text-xs font-semibold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse"></span>
                <span>Live Registrations Open</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Upcoming Events &amp; Workshops
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                RSVPs are 100% free. Reserve your seat early to secure hands-on workshop access.
              </p>
            </div>

            <Link
              to="/events"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4285F4] hover:text-blue-700 transition-colors shrink-0"
            >
              <span>View All Events Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {upcomingEvents.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-sm text-slate-500">
              No upcoming events right now. Check back soon!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, idx) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={idx}
                  onSelect={(evt) => setSelectedEvent(evt)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 7. PAST EVENTS SECTION */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold mb-2">
                <span>Chapter Archives</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Past Events &amp; Meetup Recaps
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Browse session recordings, keynote decks, and photos from GDG Ranchi history.
              </p>
            </div>

            <Link
              to="/events"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors shrink-0"
            >
              <span>Explore Complete Archive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, idx) => (
              <EventCard
                key={event.id}
                event={event}
                index={idx}
                onSelect={(evt) => setSelectedEvent(evt)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. MOVING PHOTO MEMORIES REEL + GALLERY CTA */}
      <section className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold mb-2">
              <Camera className="w-3.5 h-3.5 text-[#FBBC05]" />
              <span>Community Memories Reel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Glimpses of GDG Ranchi Meetups
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Highlights from recent conferences, hackathons, and gatherings. Hover over any photo to pause.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors shrink-0"
          >
            <span>View Full Photo Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Continuous Left-to-Right Scrolling Container */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="animate-scroll-ltr flex gap-5">
            {scrollingPhotos.map((photo, i) => (
              <div
                key={`${photo.id}-${i}`}
                onClick={() => setSelectedGalleryPhoto(photo)}
                className="cursor-pointer w-72 shrink-0 bg-slate-900/90 rounded-2xl p-2.5 border border-slate-800 hover:border-slate-700 shadow-lg text-white hover:scale-102 transition-all group text-left"
              >
                <div className="h-44 rounded-xl overflow-hidden bg-slate-950 mb-2.5 relative">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-[10px] text-white px-2 py-0.5 rounded-md font-medium">
                    {photo.eventName}
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-200 truncate">
                  {photo.title}
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OUR ORGANIZERS SECTION ON HOME */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#4285F4] text-xs font-semibold mb-2">
                <span>Community Leadership</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Meet Our Organizers &amp; Tech Leads
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                The volunteer team coordinating GDG Ranchi meetups, logistics, and speaker mentorship.
              </p>
            </div>

            <Link
              to="/team"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4285F4] hover:text-blue-700 transition-colors shrink-0"
            >
              <span>View All Organizers &amp; Alumni</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredOrganizers.map((organizer, idx) => (
              <div
                key={organizer.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-center group hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-slate-100 group-hover:ring-[#4285F4]/30 transition-all shadow-xs">
                      <img
                        src={organizer.photo}
                        alt={organizer.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#4285F4] inline-block mb-1.5">
                    {organizer.department} Lead
                  </span>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#4285F4] transition-colors">
                    {organizer.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-0.5 mb-2">
                    {organizer.role}
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {organizer.bio}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    to="/team"
                    className="text-xs font-semibold text-[#4285F4] hover:text-blue-700 transition-colors"
                  >
                    View Bio &amp; Focus &gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SPEAKER CALL FOR PAPERS (CFP) BANNER */}
      <section className="py-12 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-slate-200">
              🎤 Call for Speakers (CFP)
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Have An Exciting Tech Topic To Share?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              We welcome first-time and seasoned developers! Present on Android, Cloud, AI, Open-Source, or Web architecture at our upcoming meetups.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#FBBC05] hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all shrink-0 hover:-translate-y-0.5"
          >
            <span>Submit Talk Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 11. TESTIMONIALS SECTION */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-semibold">
              Community Voices
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              What Jharkhand Developers Say
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Hear from students, software engineers, and first-time speakers who grew through GDG Ranchi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {sampleTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex gap-1 text-[#FBBC05]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100 shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#4285F4] text-xs font-semibold">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Got Questions? We Have Answers.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Everything you need to know about joining, attending, and speaking at GDG Ranchi.
            </p>
          </div>

          <div className="space-y-3 text-left">
            {sampleFAQs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 bg-white"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-semibold text-sm sm:text-base text-slate-900 hover:bg-slate-50/80 transition-colors gap-4"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#4285F4] flex items-center justify-center font-bold text-xs shrink-0">
                        Q
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. SPONSORS & PARTNERS SECTION */}
      <section className="py-14 bg-[#F8FAFC] border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Our Community Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Community Partners &amp; Sponsors
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Generously providing venues, cloud credits, and event support for Jharkhand developers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {sampleSponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {sponsor.category} Partner
                  </span>
                  <div className="mt-3 text-base font-bold text-slate-900">
                    {sponsor.logoText}
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {sponsor.description}
                  </p>
                </div>

                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#4285F4] hover:text-blue-700 transition-colors"
                >
                  <span>Visit Partner</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. NEWSLETTER & CHAPTER DISPATCH SUBSCRIPTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-tr from-slate-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl relative overflow-hidden">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-medium">
              <span>Chapter Newsletter</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Stay in the Loop with GDG Ranchi
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Get early access to DevFest RSVP tickets, Cloud Study Jam coupons, and technical workshop notifications directly in your inbox.
            </p>

            {newsletterSubscribed ? (
              <div className="bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 p-4 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 max-w-md mx-auto">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Subscription Confirmed!</strong> Thank you for joining our community mailing list.
                </span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2 max-w-md mx-auto pt-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email (e.g. dev@example.com)"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="p-3 rounded-xl border border-slate-700 bg-slate-800/80 text-white placeholder-slate-400 text-xs sm:text-sm flex-1 focus:outline-hidden focus:ring-2 focus:ring-[#4285F4]"
                  />
                  <button
                    type="submit"
                    className="bg-[#4285F4] hover:bg-blue-600 active:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all shrink-0"
                  >
                    Subscribe Free
                  </button>
                </div>
                {newsletterError && (
                  <div className="text-red-400 text-xs font-medium text-left">
                    {newsletterError}
                  </div>
                )}
              </form>
            )}

            <div className="text-[11px] text-slate-400 pt-1">
              * Zero spam. Unsubscribe anytime with a single click.
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Quick Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      {/* Lightbox Modal for Photo Clicked from Reel */}
      {selectedGalleryPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedGalleryPhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 text-left space-y-4 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                {selectedGalleryPhoto.eventName} • Community Memory
              </span>
              <button
                onClick={() => setSelectedGalleryPhoto(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-950 shadow-sm">
              <img
                src={selectedGalleryPhoto.imageUrl}
                alt={selectedGalleryPhoto.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>

            <div>
              <h4 className="font-bold text-base text-slate-900">
                {selectedGalleryPhoto.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {selectedGalleryPhoto.caption}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
              <Link
                to="/gallery"
                onClick={() => setSelectedGalleryPhoto(null)}
                className="text-[#4285F4] hover:text-blue-700 font-semibold inline-flex items-center gap-1"
              >
                <span>Browse Full Gallery Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setSelectedGalleryPhoto(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
