import { Download } from 'lucide-react';

const skillsTicker = [
  'React',
  'TypeScript',
  'Java',
  'Python',
  'Node.js',
  'NestJS',
  'AWS',
  'Docker',
  'Kubernetes',
  'Terraform',
  'PostgreSQL',
  'MySQL',
  'Redis',
  'Prisma',
  'Linux',
];

const chipsList = [
  'React',
  'AWS',
  'MySQL',
  'React Native',
  'Java',
  'Python',
  'TypeScript',
  'Docker',
];

export function Hero() {
  return (
    <>
      <section id="home" className="relative pt-2 sm:pt-4 lg:pt-6">
        <div className="in">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_330px] xl:grid-cols-[1fr_380px] 2xl:grid-cols-[1fr_420px] lg:gap-10 xl:gap-14 lg:items-start">
            {/* Monumental Heading */}
            <h1
              className="anim-up font-normal uppercase leading-[0.92] tracking-[-0.04em] text-graphite lg:col-start-1 lg:row-start-1"
              style={{
                fontSize: 'clamp(2.75rem, 5.6vw, 110px)',
                animationDelay: '0.2s',
              }}
            >
              Sumanth<i className="block font-normal italic text-vermilion">R K</i>
            </h1>

            {/* Hero Portrait Plate */}
            <div className="w-full max-w-[340px] sm:max-w-[380px] mx-auto lg:max-w-none lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <div className="relative w-full aspect-[3/4] max-h-[520px] sm:max-h-[560px] lg:max-h-[580px] xl:max-h-[620px] overflow-hidden bg-[#16130f] shadow-[-10px_14px_30px_rgba(22,19,15,0.19)]">
                <span className="portrait-par relative block h-[106%] w-full overflow-hidden">
                  <img
                    src="/hero-portrait.jpg?v=2"
                    alt="Sumanth R K"
                    className="h-full w-full object-cover scale-[1.04]"
                  />
                </span>
              </div>
            </div>

            {/* Intro & CTAs */}
            <div
              className="anim-up max-w-[580px] lg:col-start-1 lg:row-start-2"
              style={{ animationDelay: '0.45s' }}
            >
              <div className="mb-3.5 inline-flex items-center gap-[9px]">
                <span className="h-[7px] w-[7px] rounded-full bg-vermilion animate-pulse" />
                <span className="iv-label">Available for new opportunities</span>
              </div>

              <div className="mb-3.5 flex flex-wrap gap-x-[18px] gap-y-2">
                <span className="iv-label iv-signal">Full Stack Software Engineer</span>
                <span className="iv-label iv-muted">Bengaluru, India</span>
                <span className="iv-label iv-muted">12.9716° N / 77.5946° E</span>
              </div>

              <p className="max-w-[540px] text-[16.5px] leading-[1.6] text-bodyink sm:text-[17.5px] lg:text-[18.5px]">
                I am a Full Stack Software Engineer who enjoys building secure, scalable, and
                high-performance software. My work spans modern frontend development, backend
                engineering, cloud infrastructure, and DevOps automation.
              </p>

              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                <a
                  href="/Sumanth_RK_CV.pdf"
                  download="Sumanth_RK_CV.pdf"
                  className="btn-ivory btn-ivory-solid"
                >
                  <Download className="h-[13px] w-[13px]" />
                  Download résumé
                </a>
                <a
                  href="https://github.com/sumanthrk00"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ivory"
                >
                  GitHub
                </a>
                <a
                  href="http://linkedin.com/in/sumanth-r-k"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ivory"
                >
                  LinkedIn
                </a>
                <a href="mailto:sumanthrk512@gmail.com" className="btn-ivory">
                  Email
                </a>
              </div>

              {/* Bottom Chips */}
              <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2">
                {chipsList.map((skill) => (
                  <span key={skill} className="chip-ivory whitespace-nowrap">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Ticker Track */}
      <div className="in w-full">
        <div className="mt-6 lg:mt-8 overflow-hidden whitespace-nowrap border-b border-t border-graphite py-[13px]">
          <div className="ticker-track">
            {[...skillsTicker, ...skillsTicker].map((skill, index) => (
              <span key={`${skill}-${index}`} className="inline-flex items-center gap-[30px]">
                <span className="iv-label iv-muted">{skill}</span>
                <span className="inline-block h-[5px] w-[5px] rounded-full bg-vermilion" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
