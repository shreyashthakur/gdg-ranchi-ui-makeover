import React from 'react';
import { Link } from 'react-router-dom';
import { sampleTimeline, samplePartnerCampuses } from '../data/communityData';
import {
  Target,
  Eye,
  Globe,
  Terminal,
  Cpu,
  Smartphone,
  Layers,
  HelpCircle,
  CheckCircle,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Heart,
  ArrowRight,
  Award,
  Users
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-[#FAFAFA] text-slate-800 font-sans pb-20 text-left">
      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#4285F4] text-xs font-semibold">
            <Globe className="w-3.5 h-3.5" />
            <span>Chapter Charter &amp; History</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            About Google Developer Group Ranchi
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Empowering the developer ecosystem in Ranchi, Jharkhand with open access to Google technology, technical workshops, and global developer networks.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
        {/* Section 1: Introduction */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#4285F4] flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
                Who We Are &amp; Our Story
              </h2>
              <span className="text-xs text-slate-500">Established 2018 in Ranchi, Jharkhand</span>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
            <p>
              Google Developer Group Ranchi (GDG Ranchi) was founded in 2018 by local engineers, tech educators, and college students who recognized the need for a collaborative developer platform in Jharkhand.
            </p>
            <p>
              Before the chapter was created, developers in Ranchi often had to travel to Kolkata, Bangalore, or Delhi to attend major developer conferences. GDG Ranchi bridged this gap by bringing official Google-backed events like <strong>DevFest</strong>, <strong>Google I/O Extended</strong>, <strong>Build with AI</strong>, and <strong>Android Study Jams</strong> directly to the heart of Ranchi.
            </p>
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-800 text-sm font-medium italic">
              "Our philosophy is simple: technology education should be accessible, free, and community-driven. No barriers, no elitism."
            </div>
          </div>
        </section>

        {/* Section 2: Mission and Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#4285F4] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 tracking-tight">Our Core Mission</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To build a collaborative, inclusive environment where passionate programmers, developers, and designers can learn and build solutions using Google developer tools, open source technology, and modern software engineering practices.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#34A853] shrink-0" />
                <span>Organize free monthly technical meetups</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#34A853] shrink-0" />
                <span>Provide hands-on cloud labs &amp; mentorship</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#34A853] shrink-0" />
                <span>Connect students with industry professionals</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#34A853] flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 tracking-tight">Our 2026 Vision</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To establish Ranchi as a prominent technology hub in Eastern India, nurturing homegrown tech startups, fostering open-source contributors, and helping developers transition from consumers of technology to creators of global digital solutions.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4285F4] shrink-0" />
                <span>5,000+ active developers upskilled</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4285F4] shrink-0" />
                <span>Support for Women Techmakers (WTM) in STEM</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4285F4] shrink-0" />
                <span>Foster open-source contributions from Jharkhand</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Chapter Timeline / Journey */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
                GDG Ranchi Journey &amp; Milestones
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Key chapter achievements from 2018 to 2026</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
              Chronicle
            </span>
          </div>

          <div className="space-y-4">
            {sampleTimeline.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-colors"
              >
                <div className="w-24 shrink-0 font-bold text-sm bg-white text-[#4285F4] py-1.5 px-3 rounded-xl text-center border border-slate-200 shadow-2xs font-mono">
                  {item.year}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-bold text-sm sm:text-base text-slate-900">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-semibold bg-blue-50 text-[#4285F4] px-2 py-0.5 rounded-full border border-blue-100">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Women Techmakers (WTM) Spotlight */}
        <section className="bg-gradient-to-r from-pink-900 via-rose-950 to-slate-950 text-white rounded-3xl p-6 md:p-10 shadow-lg space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-pink-500/20 text-pink-300 flex items-center justify-center">
              <Heart className="w-5 h-5 fill-pink-400 text-pink-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Women Techmakers (WTM) Ranchi Chapter
              </h2>
              <span className="text-xs text-pink-200">Diversity, Equity &amp; Inclusion in STEM</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl">
            Google’s Women Techmakers program provides visibility, community, and resources for women in technology. WTM Ranchi organizes dedicated mentorship programs, panel talks with female engineering leaders, and the annual International Women's Day (IWD) summit.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-pink-200/90">
              ★ All meetups are inclusive with dedicated speaker tracks for women in tech.
            </span>
            <Link
              to="/team"
              className="inline-flex items-center gap-1.5 bg-[#FBBC05] hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all"
            >
              <span>Meet WTM Ambassadors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Section 5: Partner Campuses */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#34A853] flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
                Partner Campuses Across Ranchi
              </h2>
              <p className="text-xs text-slate-500">Collaborating with universities and technical colleges</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {samplePartnerCampuses.map((campus, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 hover:border-slate-300 transition-colors"
              >
                <div className="text-xs font-semibold text-[#4285F4]">{campus.city}</div>
                <div className="font-bold text-sm text-slate-900">{campus.name}</div>
                <div className="text-xs text-slate-500">{campus.type}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
