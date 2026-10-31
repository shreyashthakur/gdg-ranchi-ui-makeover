import React, { useState } from 'react';
import { ContactFormData } from '../types';
import {
  Mail,
  MapPin,
  Send,
  AlertCircle,
  CheckCircle,
  Info,
  RefreshCw,
  MessageSquare,
  Mic,
  Share2,
  ExternalLink,
  HelpCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    category: 'General Inquiry',
    organization: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject line is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content cannot be blank.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'General Inquiry',
        organization: '',
        message: ''
      });
      setErrors({});
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: 'General Inquiry',
      organization: '',
      message: ''
    });
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <div className="w-full bg-[#FAFAFA] text-slate-800 font-sans pb-20 text-left">
      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/80 py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#4285F4] text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Communications &amp; Feedback</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Contact GDG Ranchi Organizers
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a question, want to propose a technical talk, sponsor community refreshments, or host an event at your college campus? Send us a message!
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Information, Channels, & FAQ link */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location Hub Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#EA4335]" />
                <span>Community Meetup Hub</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="space-y-1">
                  <div className="font-semibold text-slate-900">GDG Ranchi Chapter</div>
                  <div>Aryabhatta Auditorium / Tech Park</div>
                  <div>Ranchi, Jharkhand – 834001, India</div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1">
                  <div className="font-semibold text-slate-900">Email (Demo):</div>
                  <div className="font-mono text-xs text-[#4285F4] bg-blue-50 px-2 py-1 rounded-md inline-block">
                    contact@gdgranchi.example.com
                  </div>
                </div>
              </div>
            </div>

            {/* Social Communities Channels */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#4285F4]" />
                <span>Connect Online</span>
              </h3>

              <div className="space-y-2 text-xs sm:text-sm">
                <a
                  href="https://gdg.community.dev/gdg-ranchi/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 flex items-center justify-between text-slate-700 hover:text-[#4285F4] transition-colors"
                >
                  <span className="font-medium">Official Chapter Page</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 flex items-center justify-between text-slate-700 hover:text-[#4285F4] transition-colors"
                >
                  <span className="font-medium">Twitter / X Updates</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 flex items-center justify-between text-slate-700 hover:text-[#4285F4] transition-colors"
                >
                  <span className="font-medium">LinkedIn Community</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* FAQs CTA link */}
            <div className="p-5 rounded-3xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-[#4285F4]" />
                <span>Common Questions</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-xs">
                Before sending a message, you might find an instant answer on our frequently asked questions list.
              </p>
              <Link
                to="/#faq-section"
                className="inline-flex items-center gap-1 text-[#4285F4] font-semibold hover:underline text-xs"
              >
                <span>Read Chapter FAQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                  Send a Message to the Organizing Leads
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below and we will get back to you within 48 business hours.
                </p>
              </div>

              {submittedData && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-[#34A853] font-bold text-sm">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent Successfully (Demo Mode)</span>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you, <strong>{submittedData.name}</strong>! Your message regarding{' '}
                    <em>"{submittedData.subject}"</em> ({submittedData.category}) has been logged in demo state.
                  </p>
                  <button
                    onClick={handleReset}
                    className="text-xs font-semibold text-emerald-900 underline hover:no-underline"
                  >
                    Send another message
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priya Kumari"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full p-3 rounded-xl border bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 ${
                        errors.name
                          ? 'border-red-300 focus:ring-red-400'
                          : 'border-slate-200 focus:ring-[#4285F4]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full p-3 rounded-xl border bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 ${
                        errors.email
                          ? 'border-red-300 focus:ring-red-400'
                          : 'border-slate-200 focus:ring-[#4285F4]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 font-medium focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4285F4]"
                    >
                      <option value="General Inquiry">General Community Inquiry</option>
                      <option value="Speaker Proposal">Speaker Talk Proposal (CFP)</option>
                      <option value="Sponsorship & Venue">Event Venue / Refreshment Sponsorship</option>
                      <option value="Campus Partnership">Campus / College Partnership</option>
                      <option value="Volunteer Application">Volunteer Application</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Organization / College (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. BIT Mesra / Startup / Freelance"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#4285F4]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Subject Line *
                  </label>
                  <input
                    type="text"
                    placeholder="Brief summary of your inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full p-3 rounded-xl border bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 ${
                      errors.subject
                        ? 'border-red-300 focus:ring-red-400'
                        : 'border-slate-200 focus:ring-[#4285F4]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about your inquiry, talk abstract, or feedback..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full p-3 rounded-xl border bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 ${
                      errors.message
                        ? 'border-red-300 focus:ring-red-400'
                        : 'border-slate-200 focus:ring-[#4285F4]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    Reset Form
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-blue-600 active:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
