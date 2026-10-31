import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Heart, Globe, Sparkles, MapPin, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 font-sans border-t border-slate-800 mt-16">
      {/* Top Value Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border-b border-slate-800/80 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Sparkles className="w-4 h-4 text-[#FBBC05]" />
            <span className="font-medium">
              Join the largest developer community in Jharkhand — Learn, Connect, Grow!
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="h-2 w-2 rounded-full bg-[#34A853]"></span>
              Active Community Chapter
            </span>
            <span className="text-slate-700">|</span>
            <a
              href="https://gdg.community.dev/gdg-ranchi/"
              target="_blank"
              rel="noreferrer"
              className="text-[#4285F4] hover:text-blue-300 transition-colors font-medium inline-flex items-center gap-1"
            >
              <span>Join on Community.dev</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Column 1: About Chapter */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center -space-x-1">
                <span className="w-3 h-3 rounded-full bg-[#4285F4]"></span>
                <span className="w-3 h-3 rounded-full bg-[#EA4335]"></span>
                <span className="w-3 h-3 rounded-full bg-[#FBBC05]"></span>
                <span className="w-3 h-3 rounded-full bg-[#34A853]"></span>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                GDG Ranchi
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Google Developer Group Ranchi is an independent, non-profit technical community of passionate software engineers, students, and educators in Jharkhand.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>Ranchi, Jharkhand, India</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>
              <span>Official Chapter Code: IN-RAN-01</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us &amp; Charter
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition-colors">
                  All Events &amp; Meetups
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Community Photo Memories
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Organizing Council &amp; Leads
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Call for Speakers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: External Developer Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Google Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://gdg.community.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                  <span>GDG Community Platform</span>
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/community/wtm"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                  <span>Women Techmakers</span>
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                  <span>Google Developers Portal</span>
                </a>
              </li>
              <li>
                <a
                  href="https://cloud.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                  <span>Google Cloud Platform</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Chapter Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Community Impact
            </h4>
            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-lg font-bold text-white tracking-tight">1,450+</div>
                <div className="text-[10px] text-slate-400">Members</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-lg font-bold text-white tracking-tight">48+</div>
                <div className="text-[10px] text-slate-400">Meetups</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-lg font-bold text-[#34A853] tracking-tight">100%</div>
                <div className="text-[10px] text-slate-400">Free Access</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-lg font-bold text-[#FBBC05] tracking-tight">7+ Yrs</div>
                <div className="text-[10px] text-slate-400">Serving Ranchi</div>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 pt-1">
              Building next-generation software talents right here in Jharkhand.
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Bottom Line */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 space-y-3 text-xs text-slate-500">
          <p className="text-[11px] text-slate-500 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <strong>Disclaimer:</strong> GDG Ranchi is an independent developer group; activities and opinions expressed on this website and in our meetups should in no way be linked to Google, the corporation. To learn more about the global GDG program, visit{' '}
            <a
              href="https://developers.google.com/community/gdg"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white underline"
            >
              developers.google.com/community/gdg
            </a>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-[11px]">
            <div>
              &copy; 2018–2026 Google Developer Group (GDG) Ranchi. All Rights Reserved.
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-[#EA4335] fill-[#EA4335]" />
              <span>for Jharkhand Developer Community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
