'use client';

import React from 'react';
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react';

export default function DarkGradientHero() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener('keydown', onEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <section
      className="relative flex flex-col items-center justify-center 
                 w-full min-h-screen bg-black text-white 
                 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-3.svg')] 
                 bg-center bg-cover pb-16 pt-8"
    >
      <nav className="flex items-center border mx-auto w-full max-w-7xl px-6 py-4 border-slate-700 rounded-full text-white text-sm justify-between">
        <a href="https://prebuiltui.com" aria-label="PrebuiltUI home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
            <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
          </svg>
        </a>

        <div className="hidden md:flex items-center gap-6 ml-7">
          {['Products', 'Stories', 'Pricing', 'Docs'].map((label) => (
            <a key={label} href="#" className="relative overflow-hidden h-6 group">
              <span className="block group-hover:-translate-y-full transition-transform duration-300">{label}</span>
              <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">{label}</span>
            </a>
          ))}
        </div>

        <div className="hidden ml-14 md:flex items-center gap-4">
          <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Contact
          </button>
          <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Get Started
          </button>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden text-gray-400 hover:text-gray-200"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Menu className="w-6 h-6" />
        </button>

        <div
          role="dialog"
          aria-modal="true"
          className={[
            'fixed top-0 left-0 w-full h-full bg-black/95 text-base md:hidden flex-col items-center justify-center gap-6 z-50',
            mobileOpen ? 'flex' : 'hidden',
          ].join(' ')}
        >
          {['Products', 'Customer Stories', 'Pricing', 'Docs'].map((label) => (
            <a key={label} href="#" className="hover:text-indigo-400 text-lg font-medium" onClick={() => setMobileOpen(false)}>
              {label}
            </a>
          ))}
          <button
            onClick={() => setMobileOpen(false)}
            className="border border-slate-600 hover:bg-slate-800 px-6 py-2.5 rounded-full text-sm font-medium transition w-48"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileOpen(false)}
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300 w-48"
          >
            Get Started
          </button>
          <button
            aria-label="Close menu"
            className="absolute top-5 right-5 p-2 rounded-full border border-white/10 hover:bg-white/10"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-2 text-sm mt-24 mx-auto">
        <p>Explore how we help grow brands.</p>
        <a href="#" className="flex items-center gap-1 font-medium text-indigo-400 hover:text-indigo-300">
          Read more
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <h1 className="text-4xl md:text-6xl text-center font-semibold max-w-3xl mt-5 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text">
        Solutions to Elevate Your Business Growth
      </h1>
      <p className="text-slate-300 md:text-base line-clamp-3 max-md:px-2 text-center max-w-2xl mt-3">
        Unlock potential with tailored strategies designed for success. Simplify challenges, maximize results, and stay ahead in the competitive market.
      </p>

      <div className="grid grid-cols-2 gap-2 mt-8 text-sm">
        <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-full font-medium">Get Started</button>
        <button className="flex items-center gap-2 bg-white/10 border border-white/15 hover:bg-white/20 rounded-full px-6 py-3 font-medium transition">
          <span>Learn More</span>
          <ChevronRight className="w-4 h-4 text-white/50" />
        </button>
      </div>

      <div aria-label="Photos of leaders" className="mt-12 flex max-md:overflow-x-auto gap-6 max-w-4xl w-full pb-6 mx-auto px-4 justify-center">
        <img alt="Leader 1" className="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height={140} src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop" width={120} />
        <img alt="Leader 2" className="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height={140} src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop" width={120} />
        <img alt="Leader 3" className="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height={140} src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop" width={120} />
        <img alt="Leader 4" className="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height={140} src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop" width={120} />
        <img alt="Leader 5" className="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height={140} src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop" width={120} />
      </div>
    </section>
  );
}
