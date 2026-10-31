import React from 'react';
import { Link } from 'react-router-dom';
import { EventItem } from '../types';
import { Calendar, Clock, MapPin, Users, ArrowRight, Eye } from 'lucide-react';

interface EventCardProps {
  event: EventItem;
  onSelect: (event: EventItem) => void;
  index?: number;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelect }) => {
  // Category badge styling in Google theme
  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'AI / ML':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Cloud':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Flutter':
        return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'Android':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Web':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-left hover:-translate-y-1">
      <div>
        {/* Cover Image Container with Consistent Aspect Ratio */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide border shadow-xs ${
                event.status === 'upcoming'
                  ? 'bg-emerald-500/90 text-white border-emerald-400/80 backdrop-blur-xs'
                  : 'bg-slate-800/90 text-slate-300 border-slate-700 backdrop-blur-xs'
              }`}
            >
              {event.status === 'upcoming' ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  <span>Upcoming</span>
                </>
              ) : (
                <span>Completed</span>
              )}
            </span>

            {event.seatsLeft && event.status === 'upcoming' && (
              <span className="text-[11px] bg-red-500/90 text-white font-semibold px-2 py-0.5 rounded-full border border-red-400 backdrop-blur-xs shadow-xs">
                {event.seatsLeft} seats left
              </span>
            )}
          </div>

          {/* Bottom Overlay Location */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-1.5 text-white/90 text-xs">
            <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span className="truncate text-[11px] font-medium">{event.location}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3">
          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border ${getCategoryBadgeClass(
                event.category
              )}`}
            >
              {event.category}
            </span>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
              {event.mode}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-slate-900 group-hover:text-[#4285F4] transition-colors leading-snug line-clamp-2">
            <Link to={`/events/${event.id}`}>
              {event.title}
            </Link>
          </h3>

          {/* Date, Time & Speakers Meta */}
          <div className="space-y-1.5 text-xs text-slate-600 pt-1 border-t border-slate-100">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#4285F4] shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-[#FBBC05] shrink-0" />
              <span>{event.time}</span>
            </div>
            {event.speakers && event.speakers.length > 0 && (
              <div className="flex items-center gap-2 text-slate-500 text-[11px] truncate pt-0.5">
                <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">Speakers: {event.speakers.join(', ')}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-5 pt-0 flex items-center gap-2">
        <Link
          to={`/events/${event.id}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#4285F4] hover:bg-blue-600 active:bg-blue-700 text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-all shadow-xs hover:shadow"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <button
          type="button"
          onClick={() => onSelect(event)}
          className="inline-flex items-center justify-center gap-1 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium py-2.5 px-3 rounded-xl transition-colors shrink-0"
          title="Quick preview details in popup"
        >
          <Eye className="w-3.5 h-3.5 text-slate-500" />
          <span className="hidden sm:inline">Preview</span>
        </button>
      </div>
    </div>
  );
};
