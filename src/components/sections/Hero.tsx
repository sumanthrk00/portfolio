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
      <section id="home" className="relative">
        <div className="in">
          <div className="relative lg:min-h-[640px]">
            {/* Massive Heading */}
            <h1
              className="anim-up relative z-[2] pt-7 font-normal uppercase leading-none tracking-[-0.04em] text-graphite"
              style={{ fontSize: 'clamp(3.2rem, 13vw, 158px)', animationDelay: '0.2s' }}
            >
              Sumanth<i className="block font-normal italic text-vermilion">R K</i>
            </h1>

            {/* Hero Portrait Plate */}
            <div className="relative z-[1] mt-10 w-full max-w-[430px] overflow-hidden shadow-[-10px_14px_30px_rgba(22,19,15,0.19)] lg:absolute lg:right-[-56px] lg:top-0 lg:mt-0 lg:h-[640px] lg:w-[430px] lg:max-w-none">
              <span className="inline-block relative portrait-par h-full w-full object-cover">
                <img
                  src="/hero-portrait.jpg"
                  alt="Sumanth R K"
                  className="h-full w-full object-cover"
                />
              </span>
            </div>

            {/* Intro & CTAs */}
            <div
              className="anim-up relative z-[2] mt-10 max-w-[600px] lg:mt-[92px]"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="mb-5 inline-flex items-center gap-[9px]">
                <span className="h-[7px] w-[7px] rounded-full bg-vermilion" />
                <span className="iv-label">Available for new opportunities</span>
              </div>

              <div className="mb-[18px] flex flex-wrap gap-x-[18px] gap-y-2">
                <span className="iv-label iv-signal">Full Stack Software Engineer</span>
                <span className="iv-label iv-muted">Bengaluru, India</span>
                <span className="iv-label iv-muted">12.9716 N / 77.5946 E</span>
              </div>

              <p className="max-w-[520px] text-[19px] leading-[1.55] text-bodyink">
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
              className="anim-up relative z-[2] mt-10 flex flex-wrap gap-2 lg:absolute lg:bottom-1.5 lg:left-0 lg:mt-0 lg:w-[700px]"
              style={{ animationDelay: '0.8s' }}
            >
              {['React', 'AWS', 'MySQL', 'React Native', 'Java', 'Python', 'TypeScript', 'Docker'].map(
                (skill) => (
                  <span key={skill} className="chip-ivory">
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Ticker Track */}
      <div className="in">
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
