import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, AlertCircle, Github, Linkedin } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormState = { name: '', email: '', subject: '', message: '' };

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      if (!isSupabaseConfigured) {
        // Fallback simulation when Supabase environment variables are not configured
        await new Promise((resolve) => setTimeout(resolve, 600));
        setStatus('success');
        setForm(initial);
        return;
      }
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });
      if (error) throw error;
      setStatus('success');
      setForm(initial);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="section-pad relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
      </div>
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a role, a project, or an idea? Send a message and I'll get back to you within 48 hours."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="card p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
                Based in {profile.location}. Open to full-time roles, contract work, and interesting collaborations.
              </p>
              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`, '_blank');
                  }}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:text-brand-300">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-ink-400 dark:text-ink-500">Email</p>
                    <p className="text-sm font-medium">{profile.email}</p>
                  </div>
                </a>
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="group flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:text-brand-300">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-ink-400 dark:text-ink-500">Phone</p>
                    <p className="text-sm font-medium">{profile.phone}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-300">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-ink-400 dark:text-ink-500">Location</p>
                    <p className="text-sm font-medium">{profile.location}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:bg-white dark:border-white/10 dark:text-ink-200 dark:hover:bg-white/10"
                >
                  <Github size={17} />
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:bg-white dark:border-white/10 dark:text-ink-200 dark:hover:bg-white/10"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </div>

            <div className="card p-6 sm:p-8">
              <p className="text-sm font-semibold">Response time</p>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                Usually within 48 hours, often sooner.
              </p>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Jane Doe"
                    className="input"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="jane@company.com"
                    className="input"
                  />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Subject" htmlFor="subject">
                  <input
                    id="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => update('subject', e.target.value)}
                    placeholder="Let's work together"
                    className="input"
                  />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell me about your project or role…"
                    className="input resize-none"
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-primary mt-6 w-full"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending…
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={16} /> Message sent
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send message
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-xl bg-accent-500/10 px-4 py-3 text-sm font-medium text-accent-700 dark:text-accent-300"
                >
                  <CheckCircle2 size={16} /> Thanks! Your message has been received — I'll be in touch shortly.
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-700 dark:text-red-300"
                >
                  <AlertCircle size={16} /> {errorMsg}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
        {label}
      </label>
      {children}
    </div>
  );
}
