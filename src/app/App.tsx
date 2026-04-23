import { useRef } from 'react';
import { AccordionItem } from './components/AccordionItem';

export default function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-8">
            <button onClick={() => scrollToSection(homeRef)} className="text-sky-400 hover:text-sky-300 transition-colors">
              home
            </button>
            <button onClick={() => scrollToSection(projectsRef)} className="text-sky-400 hover:text-sky-300 transition-colors">
              projects
            </button>
            <button onClick={() => scrollToSection(interestsRef)} className="text-sky-400 hover:text-sky-300 transition-colors">
              interests
            </button>
            <button onClick={() => scrollToSection(resumeRef)} className="text-sky-400 hover:text-sky-300 transition-colors">
              resume
            </button>
          </div>
        </div>
      </nav>

      {/* Main Terminal Window */}
      <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-8">
        <div className="w-full max-w-6xl">
          {/* Mac-style Header */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-t-lg px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-neutral-400 text-sm">
              guest@lucy-yang:~
            </div>
          </div>

          {/* Terminal Content */}
          <div className="relative bg-neutral-900/95 border-x border-b border-neutral-800 rounded-b-lg h-[80vh] overflow-y-auto terminal-scrollbar">
            {/* Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none z-10 scanline"></div>

            <div className="p-8 space-y-16 relative z-0">
              {/* Hero Section */}
              <div ref={homeRef} className="space-y-6">
                <div className="flex items-center gap-2">
                  <h1 className="text-6xl font-bold tracking-tight text-white">LUCY YANG</h1>
                  <div className="w-4 h-12 bg-sky-400 animate-pulse"></div>
                </div>
                <div className="text-sky-400 text-lg">
                  <a href="mailto:lucy.yang1112@gmail.com" className="hover:text-sky-300 transition-colors">
                    lucy.yang1112@gmail.com
                  </a>
                </div>
                <div className="flex gap-6 text-sky-400">
                  <a href="https://github.com/latechee1112" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300 transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    github
                  </a>
                  <a href="https://www.linkedin.com/in/lucyy-yang/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300 transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    linkedin
                  </a>
                </div>
                <div className="text-neutral-400 max-w-2xl">
                  <p className="mb-2">$ whoami</p>
                  <p>
                    IBDP Student @ St Robert CHS
                    Passionate about web development. Projects loading... learn more below.</p>
                </div>
              </div>

              {/* Projects Grid */}
              <div ref={projectsRef} className="space-y-6">
                <h2 className="text-2xl text-sky-400">// projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Project 1 */}
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg overflow-hidden hover:border-sky-900 transition-colors">
                    <div className="aspect-video bg-gradient-to-br from-blue-900 to-neutral-900 flex items-center justify-center">
                      <svg className="w-16 h-16 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="text-xs text-sky-400 tracking-wider">WEBSITE</div>
                      <h3 className="text-lg font-semibold">Portfolio Website</h3>
                      <p className="text-sm text-neutral-400">
                        Built a minimalistic, dark-mode interface with fixed-viewport design and responsive project grid.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2 py-1 bg-sky-900/30 text-sky-300 text-xs rounded border border-sky-800">HTML5</span>
                        <span className="px-2 py-1 bg-sky-900/30 text-sky-300 text-xs rounded border border-sky-800">Tailwind</span>
                        <span className="px-2 py-1 bg-sky-900/30 text-sky-300 text-xs rounded border border-sky-800">JavaScript</span>
                      </div>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg overflow-hidden hover:border-sky-900 transition-colors">
                    <div className="aspect-video bg-gradient-to-br from-purple-900 to-neutral-900 flex items-center justify-center">
                      <svg className="w-16 h-16 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="text-xs text-sky-400 tracking-wider">SOFTWARE</div>
                      <h3 className="text-lg font-semibold">POPEYE: Maritime Anomaly Detection Engine</h3>
                      <p className="text-sm text-neutral-400">
                        Intelligence dashboard for tracking shadow fleet vessels. Integrates a trajectory-based Variational Autoencoder (VAE) for movement anomaly detection with a FastAPI backend and Gemini 3.1 Flash for risk-factor analysis. 
                        Features an agentic AI layer via IBM Watson to generate human-readable intelligence reports from raw AIS data.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2 py-1 bg-sky-900/30 text-sky-300 text-xs rounded border border-sky-800">FastAPI</span>
                        <span className="px-2 py-1 bg-sky-900/30 text-sky-300 text-xs rounded border border-sky-800">React</span>
                        <span className="px-2 py-1 bg-sky-900/30 text-sky-300 text-xs rounded border border-sky-800">Python</span>
                      </div>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg overflow-hidden hover:border-sky-900 transition-colors">
                    <div className="aspect-video bg-gradient-to-br from-green-900 to-neutral-900 flex items-center justify-center">
                      <svg className="w-16 h-16 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="text-xs text-sky-400 tracking-wider">SOFTWARE</div>
                      <h3 className="text-lg font-semibold">ASL Detector</h3>
                      <p className="text-sm text-neutral-400">
                        Built a computer vision pipeline for ASL gesture recognition. 
                        Features a Random Forest Classifier trained on 2,600+ landmark samples. 
                        Extracts and normalizes coordinate data via MediaPipe Hands SDK and OpenCV, processed through a FastAPI backend for real-time inference and mapping.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2 py-1 bg-sky-900/30 text-sky-300 text-xs rounded border border-sky-800">Scikit-Learn</span>
                        <span className="px-2 py-1 bg-sky-900/30 text-sky-300 text-xs rounded border border-sky-800">React</span>
                        <span className="px-2 py-1 bg-sky-900/30 text-sky-300 text-xs rounded border border-sky-800">MediaPipe</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interests Section */}
              <div ref={interestsRef} className="space-y-4">
                <h2 className="text-2xl text-sky-400">// interests</h2>
                <div className="text-neutral-300 space-y-4 max-w-3xl">
                  <AccordionItem
                    title="Math_Contests"
                    content="I regularly compete in math contests using logical problem-solving under time pressure, with consistent honour roll and distinction results."
                  />
                  <AccordionItem
                    title="Chess_Organizer_Player"
                    content="Outside of programming, I find joy in playing competitive chess and organizing tournaments. I've represented Team Canada in multiple international tournaments, and receieved 3rd in a national tournament."
                  />
                  <AccordionItem
                    title="Exploring_Algorithms"
                    content="I'm drawn to understanding computer science algorithms, including graph theory and more."
                  />
                </div>
              </div>

              {/* Resume Section */}
              <div ref={resumeRef} className="space-y-4">
                <h2 className="text-2xl text-sky-400">// resume</h2>
                <div className="text-neutral-300 space-y-2">
                  <div>$ cat resume.txt</div>
                  <div className="pl-4 space-y-2 text-sm">
                    <div className="text-sky-300">Available upon request</div>
                    <div className="text-neutral-400">
                      Feel free to reach out at{' '}
                      <a href="mailto:lucy.yang1112@gmail.com" className="text-sky-400 hover:text-sky-300">
                        lucy.yang1112@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Status Bar */}
              <div className="border-t border-neutral-800 pt-6 mt-12">
                <div className="flex justify-between text-xs text-neutral-500">
                  <div>© 2026 Lucy Yang</div>
                  <div className="flex gap-6">
                    <span>SYS_TIME: {new Date().toLocaleTimeString()}</span>
                    <span className="text-green-500">NET_LATENCY: 12ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .terminal-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .terminal-scrollbar::-webkit-scrollbar-track {
          background: rgb(23, 23, 23);
        }

        .terminal-scrollbar::-webkit-scrollbar-thumb {
          background: rgb(12, 74, 110);
          border-radius: 4px;
        }

        .terminal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgb(14, 116, 144);
        }

        .scanline {
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 50%,
            rgba(0, 0, 0, 0.05) 50%
          );
          background-size: 100% 4px;
          animation: scanline 8s linear infinite;
        }

        @keyframes scanline {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100%;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
