import React, { useState } from 'react';
import { Sparkles, X, Copy, Check, Terminal, ChevronDown } from 'lucide-react';

export const ChallengeHelper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const suggestedPrompts = [
    {
      label: 'Hero & Branding Redesign',
      prompt: 'Redesign the Hero section with modern Google Developer Group visual identity, sleek typography, clean spacing, and modern gradient buttons.'
    },
    {
      label: 'Event Cards Modernization',
      prompt: 'Modernize the EventCard component: replace harsh borders with subtle rounded corners (rounded-xl), elegant card shadows, and Google color tag badges.'
    },
    {
      label: 'Navigation Glassmorphism',
      prompt: 'Restyle the Navbar into a modern sticky glassmorphism header with clean pill-style active links and official GDG logo typography.'
    },
    {
      label: 'Stats & Numbers Dashboard',
      prompt: 'Transform the chapter stats into a modern metrics grid with subtle icons, clean counters, and sleek card backgrounds.'
    },
    {
      label: 'Full Dark / Light Mode Palette',
      prompt: 'Harmonize the entire color scheme to replace clashing neon yellows and blues with Google brand colors (#4285F4, #EA4335, #FBBC05, #34A853).'
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 font-sans">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-slate-900/95 hover:bg-slate-900 text-white rounded-full px-4 py-2.5 shadow-xl hover:shadow-2xl border border-slate-700/80 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-xs font-medium focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400"
          title="Open UI Makeover Challenge Prompts"
          aria-label="Open Gemini CLI Challenge Assistant"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-[#4285F4] to-[#34A853]">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold tracking-wide">Gemini CLI Prompts</span>
          <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded-full border border-slate-700 font-mono">
            {suggestedPrompts.length}
          </span>
        </button>
      ) : (
        <div className="w-84 sm:w-96 bg-white rounded-2xl border border-slate-200/90 shadow-2xl p-4 text-left space-y-3.5 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-tr from-[#4285F4] to-[#34A853] text-white shadow-xs">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 leading-tight">
                  Gemini CLI Assistant
                </h3>
                <span className="text-[10px] text-slate-500 font-medium">
                  UI Makeover Challenge Cheat Sheet
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Close panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Copy any of these carefully crafted prompts directly to iterate and polish this UI:
          </p>

          {/* Prompts list */}
          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            {suggestedPrompts.map((item, idx) => (
              <div
                key={idx}
                className="group/item bg-slate-50 hover:bg-blue-50/40 border border-slate-200/80 hover:border-blue-200 rounded-xl p-2.5 transition-all text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-slate-800 text-[11px] truncate">
                    {idx + 1}. {item.label}
                  </span>
                  <button
                    onClick={() => handleCopy(item.prompt, idx)}
                    className="inline-flex items-center gap-1 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md text-[10px] font-medium border border-slate-200 shadow-2xs transition-colors shrink-0"
                    title="Copy prompt text"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3 h-3 text-[#34A853]" />
                        <span className="text-[#34A853] font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-sans line-clamp-2">
                  "{item.prompt}"
                </p>
              </div>
            ))}
          </div>

          {/* Footer controls */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>
              <span>All prompts ready</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#4285F4] hover:text-blue-700 font-medium transition-colors"
            >
              Minimize
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
