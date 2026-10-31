import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sparkles, ArrowRight, Calendar, Users, Info } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/events', label: 'Events' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all">
      {/* Top Announcement Ribbon - Subtle and elegant */}
      <div className="bg-slate-900 text-slate-200 px-4 py-2 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34A853] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34A853]"></span>
            </span>
            <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider hidden sm:inline">
              GDG Ranchi Chapter
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <Sparkles className="w-3.5 h-3.5 text-[#FBBC05]" />
              <span className="truncate">
                DevFest &amp; Build with AI Registrations Are Now Open!
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/events"
              className="text-[#4285F4] hover:text-blue-300 transition-colors flex items-center gap-1 text-[11px] font-semibold"
            >
              <span>Explore Sessions</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-slate-400 text-[11px] hidden md:inline">
              Est. 2018
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#4285F4] rounded-lg p-1"
          >
            {/* Google Developer Groups Symbol */}
            <div className="flex items-center -space-x-1">
              <span className="inline-block w-3.5 h-3.5 rounded-full bg-[#4285F4]" title="Google Blue"></span>
              <span className="inline-block w-3.5 h-3.5 rounded-full bg-[#EA4335]" title="Google Red"></span>
              <span className="inline-block w-3.5 h-3.5 rounded-full bg-[#FBBC05]" title="Google Yellow"></span>
              <span className="inline-block w-3.5 h-3.5 rounded-full bg-[#34A853]" title="Google Green"></span>
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold text-slate-900 tracking-tight group-hover:text-[#4285F4] transition-colors">
                  GDG Ranchi
                </span>
                <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded-full bg-blue-50 text-[#4285F4] border border-blue-100 hidden sm:inline-block">
                  Jharkhand
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-normal leading-none hidden sm:block">
                Google Developer Groups
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#4285F4] bg-blue-50/80 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="h-4 w-px bg-slate-200 mx-2" aria-hidden="true" />

            {/* Primary Action Button */}
            <Link
              to="/events"
              className="inline-flex items-center justify-center gap-1.5 bg-[#4285F4] hover:bg-blue-600 active:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>RSVP Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/events"
              className="bg-[#4285F4] hover:bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs"
            >
              RSVP Free
            </Link>
            <button
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-1 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
              Navigation
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-[#4285F4] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-40" />
              </NavLink>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/events"
                onClick={closeMobileMenu}
                className="w-full text-center bg-[#4285F4] hover:bg-blue-600 text-white font-semibold text-sm py-2.5 rounded-xl shadow-xs"
              >
                Explore &amp; RSVP Free
              </Link>
              <div className="text-[11px] text-slate-500 text-center pt-1">
                Google Developer Groups • Ranchi Chapter
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
