import React from 'react';
import { TeamMember } from '../types';
import { ExternalLink } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center hover:-translate-y-1">
      <div>
        {/* Top Department Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
            {member.department} Team
          </span>
          <span className="w-2 h-2 rounded-full bg-[#34A853]" title="Active Member"></span>
        </div>

        {/* Member Photo */}
        <div className="relative mx-auto mb-4 w-24 h-24">
          <div className="w-full h-full rounded-2xl overflow-hidden ring-3 ring-slate-100 group-hover:ring-[#4285F4]/30 transition-all duration-300 shadow-xs">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>

        {/* Name and Role */}
        <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#4285F4] transition-colors">
          {member.name}
        </h3>
        <p className="text-xs font-medium text-[#4285F4] mt-0.5 mb-2.5">
          {member.role}
        </p>

        {/* Bio */}
        <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
          {member.bio}
        </p>

        {/* Skills Tag Cloud */}
        {member.skills && member.skills.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {member.skills.map((skill, i) => (
              <span
                key={i}
                className="text-[10px] font-medium bg-slate-50 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200/70"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Social Links */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-4 text-xs">
        {member.socialLinks.linkedin && (
          <a
            href={member.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-[#4285F4] font-medium transition-colors flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
        {member.socialLinks.github && (
          <a
            href={member.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-slate-900 font-medium transition-colors flex items-center gap-1"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
        {member.socialLinks.twitter && (
          <a
            href={member.socialLinks.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-[#4285F4] font-medium transition-colors flex items-center gap-1"
          >
            <span>Twitter</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};
