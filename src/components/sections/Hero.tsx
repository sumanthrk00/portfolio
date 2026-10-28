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

export function Hero() {
  return (
    <>
      <section id="home" className="relative pt-2 lg:pt-4">
        <div className="in">
          <div className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[640px]">
            {/* Monumental Heading */}
            <h1
              className="anim-up relative z-[2] pt-4 sm:pt-6 font-normal uppercase leading-[0.94] tracking-[-0.04em] text-graphite lg:pt-8"
              style={{ fontSize: 'clamp(3rem, 10.5vw, 150px)', animationDelay: '0.2s' }}
            >
              Sumanth<i className="block font-normal italic text-vermilion">R K</i>
            </h1>

            {/* Hero Portrait Plate */}
            <div className="relative z-[1] mt-8 w-full max-w-[400px] overflow-hidden bg-[#16130f] shadow-[-10px_14px_30px_rgba(22,19,15,0.19)] lg:absolute lg:right-0 xl:right-[-20px] 2xl:right-[-36px] lg:top-0 lg:mt-0 lg:h-[620px] xl:h-[640px] lg:w-[380px] xl:w-[430px] lg:max-w-none">
              <span className="portrait-par relative block h-[106%] w-full overflow-hidden">
                <img
                  src="/hero-portrait.jpg"
                  alt="Sumanth R K"
                  className="h-full w-full object-cover scale-[1.04]"
                />
              </span>
            </div>

            {/* Intro & CTAs */}
            <div
              className="anim-up relative z-[2] mt-8 max-w-[580px] lg:mt-[68px] xl:mt-[84px]"
              style={{ animationDelay: '0.45s' }}
            >
              <div className="mb-4 inline-flex items-center gap-[9px]">
                <span className="h-[7px] w-[7px] rounded-full bg-vermilion animate-pulse" />
                <span className="iv-label">Available for new opportunities</span>
              </div>

              <div className="mb-4 flex flex-wrap gap-x-[18px] gap-y-2">
                <span className="iv-label iv-signal">Full Stack Software Engineer</span>
                <span className="iv-label iv-muted">Bengaluru, India</span>
                <span className="iv-label iv-muted">12.9716° N / 77.5946° E</span>
              </div>

              <p className="max-w-[520px] text-[17.5px] leading-[1.6] text-bodyink lg:text-[19px]">
                I am a Full Stack Software Engineer who enjoys building secure, scalable, and
                high-performance software. My work spans modern frontend development, backend
                engineering, cloud infrastructure, and DevOps automation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
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
            </div>

            {/* Bottom Chips */}
            <div
              className="anim-up relative z-[2] mt-8 flex flex-wrap items-center gap-2 lg:absolute lg:bottom-1.5 lg:left-0 lg:mt-0 lg:w-[720px] xl:w-[760px]"
              style={{ animationDelay: '0.7s' }}
            >
              {['React', 'AWS', 'MySQL', 'React Native', 'Java', 'Python', 'TypeScript', 'Docker'].map(
                (skill) => (
                  <span key={skill} className="chip-ivory whitespace-nowrap">
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Ticker Track */}
      <div className="in w-full">
        <div className="mt-[34px] overflow-hidden whitespace-nowrap border-b border-t border-graphite py-[13px]">
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
