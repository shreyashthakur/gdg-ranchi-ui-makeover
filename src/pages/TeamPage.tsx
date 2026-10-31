import React, { useState } from 'react';
import { sampleTeamMembers, sampleAlumniMembers } from '../data/team';
import { TeamCard } from '../components/TeamCard';
import { Users, Info, Award, HeartHandshake, CheckSquare, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TeamPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = ['All', 'Core', 'Technical', 'Community', 'Design'];

  const filteredMembers =
    selectedDept === 'All'
      ? sampleTeamMembers
      : sampleTeamMembers.filter((m) => m.department === selectedDept);

  return (
    <div className="w-full bg-[#FAFAFA] text-slate-800 font-sans pb-20 text-left">
      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#4285F4] text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>Volunteers &amp; Tech Leads</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Meet the GDG Ranchi Team
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The passionate team of volunteers, software engineers, and educators driving monthly meetups, hackathons, and technical workshops in Jharkhand.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-12">
        {/* Notice Pill */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Notice for UI Makeover Challenge Participants:</strong> All team member profiles, bios, photos, and social links on this page are <strong>demonstration placeholders</strong> created specifically for this makeover starter project.
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <Users className="w-4 h-4 text-[#4285F4]" />
            <span>Filter by Department:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {departments.map((dept) => {
              const count = dept === 'All' ? sampleTeamMembers.length : sampleTeamMembers.filter((m) => m.department === dept).length;
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`text-xs px-3.5 py-1.5 font-semibold rounded-xl transition-all ${
                    selectedDept === dept
                      ? 'bg-[#4285F4] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                  }`}
                >
                  {dept} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Council Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
            <div>
              <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
                Active Organizing Council (2025–2026)
              </h2>
              <span className="text-xs text-slate-500">
                {filteredMembers.length} Leaders Listed
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Community Alumni & Hall of Fame Section */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#FBBC05] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
                Community Alumni &amp; Hall of Fame
              </h2>
              <p className="text-xs text-slate-500">
                Honoring past organizers who founded and nurtured GDG Ranchi during 2018–2023.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sampleAlumniMembers.map((alumni) => (
              <div
                key={alumni.id}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-center gap-4 hover:border-slate-300 transition-colors"
              >
                <img
                  src={alumni.photo}
                  alt={alumni.name}
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-slate-200 shrink-0 shadow-2xs"
                />
                <div className="space-y-1 text-xs min-w-0">
                  <span className="text-[10px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full inline-block">
                    Past Lead
                  </span>
                  <div className="font-bold text-sm text-slate-900">
                    {alumni.name}
                  </div>
                  <div className="text-slate-500 font-medium text-xs">
                    {alumni.role}
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                    {alumni.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Volunteer Section */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#4285F4] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
                How to Volunteer with GDG Ranchi
              </h2>
              <p className="text-xs text-slate-500">
                Join our volunteer core and contribute to technical events in Jharkhand.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#4285F4] flex items-center justify-center font-bold text-xs mb-2">
                1
              </div>
              <h3 className="font-bold text-slate-900">Attend Meetups</h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                Be an active attendee at 2 or more GDG Ranchi meetups and introduce yourself to the organizers in the networking sessions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#34A853] flex items-center justify-center font-bold text-xs mb-2">
                2
              </div>
              <h3 className="font-bold text-slate-900">Volunteer at DevFest</h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                Help during our annual flagship conference with attendee registration, photography, stage coordination, or technical AV streaming.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs mb-2">
                3
              </div>
              <h3 className="font-bold text-slate-900">Lead a Track</h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                Mentor student cohorts in Cloud Study Jams or host a workshop on your domain expertise (Android, Flutter, Cloud, or AI).
              </p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-all"
            >
              <span>Get In Touch to Volunteer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
