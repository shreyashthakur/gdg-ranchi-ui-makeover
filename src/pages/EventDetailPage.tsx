import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sampleEvents } from '../data/events';
import { EventCard } from '../components/EventCard';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  ArrowLeft,
  Share2,
  ChevronRight,
  ShieldCheck,
  Send,
  Sparkles,
  Ticket,
  ArrowRight
} from 'lucide-react';

export const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = sampleEvents.find((e) => e.id === id);

  // Simulated RSVP registration state
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpCollege, setRsvpCollege] = useState('');
  const [rsvpLevel, setRsvpLevel] = useState('Beginner');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [rsvpError, setRsvpError] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!event) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-100">
          <span>Event Not Located</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          The requested event could not be found
        </h1>
        <p className="text-sm text-slate-500">
          The event with identifier "{id}" does not exist in our community calendar.
        </p>
        <div className="pt-4">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Events Directory</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim() || !rsvpEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rsvpEmail)) {
      setRsvpError('Please provide your full name and a valid email address!');
      return;
    }
    setRsvpError('');
    setRsvpSubmitted(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Other related events
  const otherEvents = sampleEvents.filter((e) => e.id !== event.id).slice(0, 2);

  return (
    <div className="w-full bg-[#FAFAFA] text-slate-800 font-sans pb-20 text-left">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200/80 px-4 py-3 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to="/events" className="hover:text-slate-900 transition-colors">
            Events Directory
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-semibold truncate">{event.title}</span>
        </div>
      </div>

      {/* Hero Event Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#4285F4] border border-blue-100">
              {event.category}
            </span>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                event.status === 'upcoming'
                  ? 'bg-emerald-50 text-[#34A853] border border-emerald-100'
                  : 'bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {event.status === 'upcoming' ? '⚡ Upcoming Session' : 'Completed Session'}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
              {event.mode}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight max-w-4xl">
            {event.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            {event.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-3 items-center">
            {event.status === 'upcoming' && (
              <a
                href="#rsvp-section"
                className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all"
              >
                <Ticket className="w-4 h-4" />
                <span>Register For Free Pass</span>
              </a>
            )}

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 shadow-2xs transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-500" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Event'}</span>
            </button>

            <Link
              to="/events"
              className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors ml-1"
            >
              &larr; Back to all events
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Event Media, Overview, Agenda, Speakers */}
          <div className="lg:col-span-8 space-y-8">
            {/* Cover Image */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-sm border border-slate-200/80">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Quick Meta Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#4285F4] flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase">Date</div>
                  <div className="font-semibold text-slate-900">{event.date}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#FBBC05] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase">Time</div>
                  <div className="font-semibold text-slate-900">{event.time}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:col-span-2 pt-2 border-t border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#EA4335] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase">Location</div>
                  <div className="font-semibold text-slate-900">{event.location}</div>
                </div>
              </div>

              {event.speakers && event.speakers.length > 0 && (
                <div className="flex items-center gap-3 sm:col-span-2 pt-2 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase">Featured Speakers</div>
                    <div className="font-semibold text-slate-900">{event.speakers.join(', ')}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Full Details & Overview */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 md:p-8 space-y-4 shadow-2xs">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                About this Session
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {event.fullDetails || event.description}
              </p>
            </div>

            {/* Agenda Timeline */}
            {event.agenda && event.agenda.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 md:p-8 space-y-4 shadow-2xs">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  Detailed Event Agenda
                </h2>
                <div className="space-y-4 pt-2">
                  {event.agenda.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                      <div className="w-24 shrink-0 font-mono font-semibold text-xs text-[#4285F4] bg-blue-50 px-2 py-1 rounded-md text-center">
                        {item.time}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-800">
                        {item.topic}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky RSVP Registration Card */}
          <div className="lg:col-span-4 space-y-6">
            <div
              id="rsvp-section"
              className="sticky top-24 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Registration
                </span>
                {event.seatsLeft && event.status === 'upcoming' && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100">
                    Only {event.seatsLeft} seats left!
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {event.status === 'upcoming' ? 'Reserve Free Seat' : 'Event Concluded'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {event.status === 'upcoming'
                    ? 'No entry charges. Open for students, developers, and researchers.'
                    : 'This session has ended. Slides and recordings are archived below.'}
                </p>
              </div>

              {event.status === 'upcoming' && (
                <>
                  {rsvpSubmitted ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-2">
                      <div className="flex items-center gap-2 text-[#34A853] font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Pass Confirmed (Demo)!</span>
                      </div>
                      <p className="text-xs text-emerald-800 leading-relaxed">
                        A confirmation ticket has been prepared for <strong>{rsvpName}</strong> ({rsvpEmail}). See you at GDG Ranchi!
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleRsvpSubmit} className="space-y-3 text-xs">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Your Name (e.g. Rahul Sharma)"
                          value={rsvpName}
                          onChange={(e) => setRsvpName(e.target.value)}
                          className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4285F4]"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="you@domain.com"
                          value={rsvpEmail}
                          onChange={(e) => setRsvpEmail(e.target.value)}
                          className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4285F4]"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          College / Company (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="BIT Mesra / TechLabs / Freelance"
                          value={rsvpCollege}
                          onChange={(e) => setRsvpCollege(e.target.value)}
                          className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4285F4]"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Technical Experience Level
                        </label>
                        <select
                          value={rsvpLevel}
                          onChange={(e) => setRsvpLevel(e.target.value)}
                          className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4285F4]"
                        >
                          <option value="Beginner">Beginner / Student</option>
                          <option value="Intermediate">Intermediate Developer</option>
                          <option value="Advanced">Advanced / Senior Engineer</option>
                        </select>
                      </div>

                      {rsvpError && (
                        <div className="text-red-500 text-[11px] font-medium">
                          {rsvpError}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="w-full bg-[#4285F4] hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-xs transition-all text-xs sm:text-sm mt-2"
                      >
                        Confirm Free Reservation
                      </button>
                    </form>
                  )}
                </>
              )}

              <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#34A853]" />
                  <span>Free community event. No ticket charges.</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FBBC05]" />
                  <span>Verified Google Developer Group Event</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Upcoming Sessions */}
        {otherEvents.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200/80">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Explore Other Sessions
              </h3>
              <Link
                to="/events"
                className="text-xs sm:text-sm font-semibold text-[#4285F4] hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>All Events Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherEvents.map((evt, idx) => (
                <EventCard
                  key={evt.id}
                  event={evt}
                  index={idx}
                  onSelect={() => {}}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
