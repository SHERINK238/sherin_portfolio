import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Github, Code2, GitFork, Send, AlertCircle, CheckCircle, Copy, Check } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g., name@example.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
    }
  };

  const handleCopyDraft = () => {
    if (!submittedData) return;
    const text = `Subject: ${submittedData.subject}\nFrom: ${submittedData.name} (${submittedData.email})\n\n${submittedData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 bg-[#111827]/80 border-t border-slate-800/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Contact Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Interested in discussing opportunities, projects, or collaborations? Connect via professional profiles or leave a message below.
          </p>
          <div className="h-1 w-16 bg-blue-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Profile Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-white">
              Direct Contact & Profiles
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Reach out directly via email or connect through my verified professional accounts on LinkedIn, GitHub, and LeetCode.
            </p>

            <div className="space-y-3 pt-2">
              {/* Email Button */}
              <a
                href="mailto:sherinruffia91@gmail.com"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 hover:bg-slate-850 transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/15 text-blue-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      Email Address
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      sherinruffia91@gmail.com
                    </div>
                  </div>
                </div>
                <span className="text-xs text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform">
                  Send Email &rarr;
                </span>
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://linkedin.com/in/sherin-ruffia-k-49a39b287"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-[#0A66C2]/60 hover:bg-slate-850 transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0A66C2]/15 text-[#0A66C2]">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-xs text-slate-400">
                      sherin-ruffia-k-49a39b287
                    </div>
                  </div>
                </div>
                <span className="text-xs text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform">
                  Connect &rarr;
                </span>
              </a>

              {/* GitHub Button */}
              <a
                href="https://github.com/SHERINK238"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-600 hover:bg-slate-850 transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-white">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      GitHub Profile
                    </div>
                    <div className="text-xs text-slate-400">
                      SHERINK238
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-300 font-medium group-hover:translate-x-0.5 transition-transform">
                  View Profile &rarr;
                </span>
              </a>

              {/* LeetCode Button */}
              <a
                href="https://leetcode.com/u/SHERIN_K/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                      LeetCode
                    </div>
                    <div className="text-xs text-slate-400">
                      SHERIN_K
                    </div>
                  </div>
                </div>
                <span className="text-xs text-amber-400 font-medium group-hover:translate-x-0.5 transition-transform">
                  View Stats &rarr;
                </span>
              </a>

              {/* GitHub Repository Link */}
              <a
                href="https://github.com/SHERINK238/sr.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300">
                    <GitFork className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      GitHub Repository
                    </div>
                    <div className="text-xs text-slate-400">
                      SHERINK238/sr
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-medium group-hover:translate-x-0.5 transition-transform">
                  Browse Code &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                All fields are required. Form includes real-time client-side validation.
              </p>

              {submittedData ? (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/40 text-blue-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white text-sm">
                          Validation Successful (Demonstration Mode)
                        </h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          Thank you, <strong className="text-white">{submittedData.name}</strong>! Your message draft has been checked and validated.
                        </p>
                        <div className="mt-3 p-3 rounded-lg bg-slate-900/80 border border-slate-700/60 text-xs text-amber-300/90 leading-relaxed">
                          <strong>Notice:</strong> As this portfolio runs in a frontend demonstration environment without a backend mail relay configured, this message has <span className="underline">not</span> been dispatched over the network. To ensure your inquiry reaches Sherin, please connect directly via LinkedIn or email.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Draft Box */}
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs space-y-2">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Drafted Message:</span>
                      <button
                        type="button"
                        onClick={handleCopyDraft}
                        className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium py-1 px-2 rounded bg-blue-500/10 cursor-pointer"
                      >
                        {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                        <span>{copied ? 'Copied to Clipboard!' : 'Copy Draft'}</span>
                      </button>
                    </div>
                    <div className="text-slate-300 font-mono text-[11px] whitespace-pre-wrap bg-slate-900 p-2.5 rounded border border-slate-800">
                      {`Subject: ${submittedData.subject}\nFrom: ${submittedData.name} <${submittedData.email}>\n\n${submittedData.message}`}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="https://linkedin.com/in/sherin-ruffia-k-49a39b287"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-4 py-2 text-xs font-semibold text-white transition-colors"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      <span>Message on LinkedIn</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-lg bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-medium text-slate-200 transition-colors"
                    >
                      Write Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Jane Doe"
                      className={`w-full rounded-xl bg-slate-800/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 border ${
                        errors.name ? 'border-red-500 focus:ring-red-400' : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500'
                      } focus:outline-none focus:ring-1 transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="name@example.com"
                      className={`w-full rounded-xl bg-slate-800/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 border ${
                        errors.email ? 'border-red-500 focus:ring-red-400' : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500'
                      } focus:outline-none focus:ring-1 transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1">
                      Subject <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="e.g. Data Analytics Opportunity / Portfolio Inquiry"
                      className={`w-full rounded-xl bg-slate-800/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 border ${
                        errors.subject ? 'border-red-500 focus:ring-red-400' : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500'
                      } focus:outline-none focus:ring-1 transition-colors`}
                    />
                    {errors.subject && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Write your message here..."
                      className={`w-full rounded-xl bg-slate-800/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 border ${
                        errors.message ? 'border-red-500 focus:ring-red-400' : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500'
                      } focus:outline-none focus:ring-1 transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 cursor-pointer active:scale-95"
                    >
                      <Send className="h-4 w-4" />
                      <span>Validate & Submit Message</span>
                    </button>
                    <p className="mt-2 text-[11px] text-center text-slate-500">
                      Demonstration form with client validation. Messages are not sent to any unverified third party.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
