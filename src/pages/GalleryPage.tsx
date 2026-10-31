import React, { useState } from 'react';
import { sampleGallery } from '../data/communityData';
import { GalleryPhoto } from '../types';
import { Camera, Filter, X, ZoomIn, Heart, Share2, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GalleryPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [filterEvent, setFilterEvent] = useState<string>('All');

  const eventCategories = [
    'All',
    'DevFest Ranchi',
    'Cloud Study Jam',
    'WTM Ranchi',
    'Build with AI',
    'Flutter Forward',
    'Google I/O Extended'
  ];

  const filteredPhotos =
    filterEvent === 'All'
      ? sampleGallery
      : sampleGallery.filter((p) => p.eventName === filterEvent);

  return (
    <div className="w-full bg-[#FAFAFA] text-slate-800 font-sans pb-20 text-left">
      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#4285F4] text-xs font-semibold">
            <Camera className="w-3.5 h-3.5" />
            <span>Official Photo Archive &amp; Memories</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            GDG Ranchi Meetup Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Glimpses of code, connection, keynotes, swag distributions, and hackathons from our developer community gatherings in Ranchi, Jharkhand.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* Filter Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <Filter className="w-4 h-4 text-[#4285F4]" />
            <span>Filter by Session:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {eventCategories.map((evt) => (
              <button
                key={evt}
                onClick={() => setFilterEvent(evt)}
                className={`text-xs px-3.5 py-1.5 font-semibold rounded-xl transition-all ${
                  filterEvent === evt
                    ? 'bg-[#4285F4] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {evt}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200/90 p-3 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-900 mb-3 shadow-2xs">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="bg-white/90 backdrop-blur-xs text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5 text-[#4285F4]" />
                      <span>Preview</span>
                    </span>
                  </div>
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
                    {photo.eventName}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#4285F4] transition-colors leading-snug line-clamp-1">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {photo.caption}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Moment #{idx + 1}</span>
                <span className="text-[#4285F4] font-medium group-hover:underline">Click to view</span>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Contribution Card */}
        <div className="bg-gradient-to-tr from-slate-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-white/10 mx-auto flex items-center justify-center text-[#FBBC05]">
            <Camera className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold tracking-tight">
            Have Photos or Vlogs from GDG Ranchi Meetups?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            We love featuring attendee community perspectives on our official archive. Share your high-res photos or cloud drive links with us!
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all"
            >
              <span>Submit Photo Drive Link</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 text-left space-y-4 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {selectedPhoto.eventName} • Photo Viewer
              </span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[60vh] rounded-xl overflow-hidden bg-slate-950 shadow-sm flex items-center justify-center">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-h-[60vh] w-auto object-contain mx-auto"
              />
            </div>

            <div>
              <h4 className="font-bold text-base text-slate-900">
                {selectedPhoto.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs px-4 py-2 rounded-xl font-medium transition-colors"
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
