import { Code, Cuboid, Link as LinkIcon, ArrowRight, MessageSquare, Globe, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 selection:bg-neon-blue/30">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/70 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-white">
              JVS<span className="text-neon-blue">.</span>
            </span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neon-blue bg-white text-slate-950 hover:bg-slate-200 h-9 px-4 py-2">
              Let's Talk
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 lg:py-48 flex items-center justify-center relative overflow-hidden">
          {/* Neon Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center rounded-full border border-neon-blue/30 bg-neon-blue/10 px-3 py-1 text-sm font-medium text-neon-blue mb-8">
              <span className="flex h-2 w-2 rounded-full bg-neon-blue mr-2 animate-pulse"></span>
              JVS (JVShankar) Agency
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-6 max-w-4xl">
              Bridging the Gap Between <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Web2</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Web3</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl mb-10 leading-relaxed">
              We build premium, futuristic digital experiences. From high-performance custom websites to complex decentralized applications and blockchain integrations.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue bg-neon-blue text-slate-950 hover:bg-neon-blue/90 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] h-12 px-8 py-2">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white h-12 px-8 py-2 bg-transparent text-slate-300">
                View Our Work
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-24 md:py-32 bg-slate-900/50 border-y border-slate-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">Our Expertise</h2>
              <p className="max-w-[700px] text-slate-400 md:text-lg">
                Delivering cutting-edge solutions across the modern technology stack.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Web Development Card */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-8 transition-all hover:border-neon-blue/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neon-blue/10 text-neon-blue transition-transform group-hover:scale-110">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Website Development</h3>
                <p className="text-slate-400 leading-relaxed">
                  High-performance, responsive, and visually stunning web applications built with modern frameworks to elevate your brand presence.
                </p>
              </div>

              {/* DApps Card */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-8 transition-all hover:border-neon-purple/50 hover:shadow-[0_0_30px_rgba(176,38,255,0.1)]">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neon-purple/10 text-neon-purple transition-transform group-hover:scale-110">
                  <Cuboid className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Decentralized Applications</h3>
                <p className="text-slate-400 leading-relaxed">
                  Robust and secure DApps that leverage smart contracts to provide trustless, transparent, and innovative user experiences.
                </p>
              </div>

              {/* Blockchain Card */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-8 transition-all hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition-transform group-hover:scale-110">
                  <LinkIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Web3 & Blockchain</h3>
                <p className="text-slate-400 leading-relaxed">
                  Seamless integration of Web3 technologies, custom smart contract development, and enterprise blockchain solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-800 bg-slate-950 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <span className="text-2xl font-bold tracking-tighter text-white">
                  JVS<span className="text-neon-blue">.</span>
                </span>
              </Link>
              <p className="text-slate-400 max-w-xs mb-6">
                Shaping the future of the web with premium Web2 and Web3 solutions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-neon-blue transition-colors">
                  <MessageSquare className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Globe className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-neon-purple transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>hello@jvshankar.com</li>
                <li>+1 (555) 000-0000</li>
                <li>New York, NY</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500">
            <p>© {new Date().getFullYear()} JVS (JVShankar) Agency. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
