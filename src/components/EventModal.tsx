import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EventItem } from '../types';
import { X, Calendar, Clock, MapPin, Users, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [registered, setRegistered] = useState(false);

  if (!event) return null;

  const handleRegister = () => {
    setRegistered(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col overflow-hidden text-left animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Event Details • {event.category}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Cover Image */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 shadow-sm">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <span
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs text-white ${
                  event.status === 'upcoming' ? 'bg-[#34A853]' : 'bg-slate-700'
                }`}
              >
                {event.status === 'upcoming' ? 'Upcoming Event' : 'Concluded Event'}
              </span>
              <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/90 text-slate-800 backdrop-blur-xs shadow-xs">
                {event.mode}
              </span>
            </div>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {event.title}
            </h2>
          </div>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs">
            <div className="flex items-center gap-2 text-slate-800">
              <Calendar className="w-4 h-4 text-[#4285F4] shrink-0" />
              <span><strong>Date:</strong> {event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800">
              <Clock className="w-4 h-4 text-[#FBBC05] shrink-0" />
              <span><strong>Time:</strong> {event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800 sm:col-span-2">
              <MapPin className="w-4 h-4 text-[#EA4335] shrink-0" />
              <span><strong>Venue:</strong> {event.location}</span>
            </div>
            {event.speakers && (
              <div className="flex items-start gap-2 text-slate-800 sm:col-span-2 pt-2 border-t border-slate-200/80">
                <Users className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span><strong>Speakers:</strong> {event.speakers.join(', ')}</span>
              </div>
            )}
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Session Overview &amp; Key Takeaways
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {event.fullDetails || event.description}
            </p>
          </div>

          {/* Agenda breakdown if present */}
          {event.agenda && event.agenda.length > 0 && (
            <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Detailed Agenda &amp; Schedule
              </h4>
              <div className="space-y-2 pt-1 text-xs">
                {event.agenda.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-baseline pb-1.5 border-b border-slate-200/60 last:border-0 last:pb-0">
                    <span className="font-semibold text-slate-900 w-24 shrink-0 font-mono text-[11px]">
                      {item.time}
                    </span>
                    <span className="text-slate-600">{item.topic}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Registration / RSVP Box */}
          <div className="pt-2">
            {registered ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#34A853] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-bold text-sm text-emerald-900">
                    Registration Demo Confirmed!
                  </div>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Thank you! Your simulated seat reservation is confirmed. For actual community meetups, registrations are synced through GDG Community Platform.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                <div className="text-xs text-slate-600">
                  {event.status === 'upcoming' ? (
                    <span className="font-medium text-slate-800">
                      Free Community Access. Limited seating available for in-person workshops.
                    </span>
                  ) : (
                    <span>This event has concluded. View full event page for summaries and resources.</span>
                  )}
                </div>
                {event.status === 'upcoming' && (
                  <button
                    onClick={handleRegister}
                    className="w-full sm:w-auto bg-[#34A853] hover:bg-emerald-600 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-xs hover:shadow transition-all shrink-0"
                  >
                    Simulate RSVP (Free)
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/events/${event.id}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4285F4] hover:text-blue-700 transition-colors"
          >
            <span>Open Dedicated Event Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={onClose}
            className="text-xs font-medium text-slate-500 hover:text-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
