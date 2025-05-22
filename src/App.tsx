import React, { useState, useEffect } from 'react';
import { Camera, Palette } from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div 
        className="w-full max-w-md relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-[1.618/1] bg-slate-800 rounded-xl shadow-2xl overflow-hidden relative">
          {/* Interactive paint splashes */}
          <div 
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: `
                radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(255,99,71,0.15),
                  rgba(255,165,0,0.15),
                  rgba(34,197,94,0.15),
                  transparent 40%
                )
              `,
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* Static paint effects */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-orange-500/20 to-transparent transform -rotate-45" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-emerald-500/20 to-transparent transform rotate-45" />
          <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-bl from-red-500/20 to-transparent" />

          {/* Content */}
          <div className="relative h-full p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex space-x-3">
                  <div className="bg-emerald-500/20 p-2 rounded-lg backdrop-blur-sm">
                    <Camera className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div className="bg-orange-500/20 p-2 rounded-lg backdrop-blur-sm">
                    <Palette className="h-5 w-5 text-orange-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-px w-16 bg-gradient-to-r from-emerald-500 to-orange-500" />
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Kačka</h1>
                <p className="text-lg text-slate-300">Photographer & Designer</p>
                <div className="mt-4 space-y-2">
                  <a 
                    href="https://kacka.studio" 
                    className="inline-block text-sm text-slate-400 hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    kacka.studio
                  </a>
                  <p className="text-sm text-slate-400">contact@kacka.studio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-xl transform -translate-x-1 -translate-y-1 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-orange-500/30 rounded-br-xl transform translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
        </div>
      </div>
    </div>
  );
}

export default App;