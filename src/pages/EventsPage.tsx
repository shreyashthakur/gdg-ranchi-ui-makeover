import React, { useState } from 'react';
import { sampleEvents } from '../data/events';
import { EventItem, EventCategory, EventStatus, EventMode } from '../types';
import { EventCard } from '../components/EventCard';
import { EventModal } from '../components/EventModal';
import {
  Calendar,
  Search,
  Filter,
  MapPin,
  Laptop,
  CheckCircle2,
  Building,
  Navigation,
  X,
  Sparkles
} from 'lucide-react';

export const EventsPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [statusFilter, setStatusFilter] = useState<'all' | EventStatus>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | EventCategory>('all');
  const [modeFilter, setModeFilter] = useState<'all' | EventMode>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ('all' | EventCategory)[] = [
    'all',
    'AI / ML',
    'Cloud',
    'Flutter',
    'Android',
    'Web',
    'General'
  ];

  // Filter events based on status, category, mode, and search query
  const filteredEvents = sampleEvents.filter((event) => {
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    const matchesMode = modeFilter === 'all' || event.mode === modeFilter;
    const matchesSearch =
      searchQuery === '' ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesCategory && matchesMode && matchesSearch;
  });

  const upcomingCount = sampleEvents.filter((e) => e.status === 'upcoming').length;
  const pastCount = sampleEvents.filter((e) => e.status === 'past').length;

  const handleClearFilters = () => {
    setStatusFilter('all');
    setCategoryFilter('all');
    setModeFilter('all');
    setSearchQuery('');
  };

  const isFiltered =
    statusFilter !== 'all' ||
    categoryFilter !== 'all' ||
    modeFilter !== 'all' ||
    searchQuery !== '';

  return (
    <div className="w-full bg-[#FAFAFA] text-slate-800 font-sans pb-20">
      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#4285F4] text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Community Calendar &amp; Sessions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            GDG Ranchi Events &amp; Meetups
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Browse upcoming workshops, DevFest conferences, Google Cloud Study Jams, and past session archives. All events are free to attend.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* Modern Filter Controls Box */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-4 text-left">
          {/* Top row: Status pills & Results counter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            {/* Status Pills */}
            <div className="flex items-center gap-1.5 bg-slate-100/80 p-1 rounded-xl">
              <button
                onClick={() => setStatusFilter('all')}
                className={`text-xs px-3.5 py-1.5 font-semibold rounded-lg transition-all ${
                  statusFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Events ({sampleEvents.length})
              </button>
              <button
                onClick={() => setStatusFilter('upcoming')}
                className={`text-xs px-3.5 py-1.5 font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  statusFilter === 'upcoming'
                    ? 'bg-white text-[#34A853] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>
                Upcoming ({upcomingCount})
              </button>
              <button
                onClick={() => setStatusFilter('past')}
                className={`text-xs px-3.5 py-1.5 font-semibold rounded-lg transition-all ${
                  statusFilter === 'past'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Past Archives ({pastCount})
              </button>
            </div>

            {/* Results Counter & Clear */}
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span>
                Showing <strong>{filteredEvents.length}</strong> of{' '}
                <strong>{sampleEvents.length}</strong> events
              </span>
              {isFiltered && (
                <button
                  onClick={handleClearFilters}
                  className="inline-flex items-center gap-1 text-[#4285F4] hover:text-blue-700 font-semibold"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Bottom row: Search input, Category dropdown, Mode dropdown */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search events by title, topic, or venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs sm:text-sm pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#4285F4] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="sm:col-span-3">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value as 'all' | EventCategory)}
                className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 font-medium focus:outline-hidden focus:ring-2 focus:ring-[#4285F4] focus:bg-white transition-all"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Tech Tracks' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Format Filter */}
            <div className="sm:col-span-3">
              <select
                value={modeFilter}
                onChange={(e) => setModeFilter(e.target.value as 'all' | EventMode)}
                className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 font-medium focus:outline-hidden focus:ring-2 focus:ring-[#4285F4] focus:bg-white transition-all"
              >
                <option value="all">All Formats (In-Person / Online)</option>
                <option value="In-Person">In-Person Only</option>
                <option value="Online">Online / Virtual Only</option>
                <option value="Hybrid">Hybrid Format</option>
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              No matching events found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
              We couldn't find any events matching your selected filters or search keyword.
            </p>
            <button
              onClick={handleClearFilters}
              className="inline-flex items-center gap-1.5 bg-[#4285F4] text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-xs"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, idx) => (
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

      {/* Event Details Quick Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
};
