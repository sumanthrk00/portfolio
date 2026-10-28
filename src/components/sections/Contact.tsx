import { useState, useEffect, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export function Contact() {
  const [istTime, setIstTime] = useState<string>('--:--:--');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function updateClock() {
      try {
        const timeStr = new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        setIstTime(timeStr);
      } catch {
        setIstTime('15:30:00');
      }
    }
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSupabaseConfigured) {
        const { error } = await supabase.from('contact_messages').insert({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        });
        if (error) throw error;
      } else {
        const mailtoUrl = `mailto:sumanthrk512@gmail.com?subject=${encodeURIComponent(
          subject.trim() || 'Software Engineering Inquiry'
        )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        window.location.href = mailtoUrl;
      }
      setSent(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch {
      const mailtoUrl = `mailto:sumanthrk512@gmail.com?subject=${encodeURIComponent(
        subject.trim() || 'Software Engineering Inquiry'
      )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
      window.location.href = mailtoUrl;
      setSent(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="sec-ivory">
      <div className="in">
        <div className="flex items-center gap-[14px]">
          <span className="iv-label iv-signal">09</span>
          <span className="h-px w-[44px] bg-vermilion" />
          <span className="iv-label iv-muted">Final signal</span>
          <span className="iv-label iv-muted ml-auto hidden sm:block">
            <span>{istTime} IST</span>
          </span>
        </div>

        <h2 className="mt-4 max-w-[760px] text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-graphite sm:text-[2.875rem]">
          Let&#x27;s build something together.
        </h2>
        <p className="mt-4 max-w-[600px] text-[18px] leading-[1.6] text-bodyink">
          Have a role, a project, or an idea? Send a message and let&#x27;s connect. Based in
          Bengaluru, India and open to full-time roles, contract work, and interesting
          collaborations.
        </p>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Left Column */}
          <div className="flex flex-col gap-5">
            <a
              href="mailto:sumanthrk512@gmail.com"
              rel="noreferrer"
              className="lnk flex items-center gap-4 border-b border-ruleline pb-4"
            >
              <Mail className="h-[22px] w-[22px] shrink-0 text-vermilion" strokeWidth={1.5} />
              <div className="min-w-0">
                <span className="iv-label iv-muted block">Email</span>
                <span className="mt-1 block truncate text-[17px] text-graphite">
                  sumanthrk512@gmail.com
                </span>
              </div>
            </a>

            <a
              href="tel:+917975672123"
              rel="noreferrer"
              className="lnk flex items-center gap-4 border-b border-ruleline pb-4"
            >
              <Phone className="h-[22px] w-[22px] shrink-0 text-vermilion" strokeWidth={1.5} />
              <div className="min-w-0">
                <span className="iv-label iv-muted block">Phone</span>
                <span className="mt-1 block truncate text-[17px] text-graphite">
                  +91 7975672123
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 border-b border-ruleline pb-4">
              <MapPin className="h-[22px] w-[22px] shrink-0 text-vermilion" strokeWidth={1.5} />
              <div className="min-w-0">
                <span className="iv-label iv-muted block">Location</span>
                <span className="mt-1 block truncate text-[17px] text-graphite">
                  Bengaluru, India — 12.9716 N / 77.5946 E
                </span>
              </div>
            </div>

            <div className="flex gap-[26px] pt-1">
              <a
                href="https://github.com/sumanthrk00"
                target="_blank"
                rel="noreferrer"
                className="iv-label lnk inline-flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="http://linkedin.com/in/sumanth-r-k"
                target="_blank"
                rel="noreferrer"
                className="iv-label lnk inline-flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="border border-ruleline bg-parchment p-6 shadow-[0_10px_24px_rgba(22,19,15,0.12)] sm:p-8">
            <form onSubmit={handleSubmit}>
              <label className="mb-[18px] block">
                <span className="iv-label iv-muted">Name</span>
                <input
                  id="name"
                  required
                  maxLength={120}
                  className="field-ivory"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label className="mb-[18px] block">
                <span className="iv-label iv-muted">Email</span>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={200}
                  className="field-ivory"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className="mb-[18px] block">
                <span className="iv-label iv-muted">Subject</span>
                <input
                  id="subject"
                  maxLength={200}
                  className="field-ivory"
                  placeholder="Role, project or collaboration"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>

              <label className="mb-[18px] block">
                <span className="iv-label iv-muted">Message</span>
                <textarea
                  id="message"
                  required
                  rows={4}
                  maxLength={4000}
                  className="field-ivory resize-none"
                  placeholder="Tell me what you're building…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="btn-ivory btn-ivory-solid disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-[13px] w-[13px]" />
                {loading ? 'Sending…' : 'Send message'}
              </button>

              {sent && (
                <p className="mt-4 flex items-center gap-2 text-xs font-mono text-emerald-700">
                  <CheckCircle2 size={14} /> Message sent / opened in email client.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
