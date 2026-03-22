import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Play, Heart, Send, Flower, Flame, Gift } from 'lucide-react';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Simple fade-in effect on load
    setIsLoaded(true);
    
    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 5);
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Arrays to generate the placeholders for the 18s
  const placeholderNames = Array.from({ length: 18 }, (_, i) => `Name Placeholder ${i + 1}`);

  const portraitImages = [
    'clown.jpg',
    'fish.jpg',
    'plane.jpg',
    'stufftoys.jpg',
    'sunflower.jpg'
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-green-900 selection:bg-lime-200 selection:text-green-950">
      {/* Import elegant Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
          
          .font-elegant {
            font-family: 'Playfair Display', serif;
          }
          .font-body {
            font-family: 'Lato', sans-serif;
          }
          
          /* Custom scrollbar for an elegant feel */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #f8fafc;
          }
          ::-webkit-scrollbar-thumb {
            background: #bef264; /* lime-300 */
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #84cc16; /* lime-500 */
          }
        `}
      </style>

      {/* Mobile Container - Centers on desktop, full width on mobile */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden flex flex-col font-body">
        
        {/* --- HERO SECTION --- */}
        {/* BACKGROUND PLACEHOLDER: Replace the background image URL below */}
        <div className="relative h-screen w-full flex flex-col items-center justify-center text-center p-6">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop")',
              backgroundPosition: 'center',
            }}
          >
            {/* Elegant gradient overlay to ensure text is readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white z-10"></div>
          </div>

          <div className={`relative z-20 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lime-700 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              You are invited to
            </p>
            <h1 className="font-elegant text-6xl text-green-900 font-bold mb-2 leading-tight">
              Kryxel's
            </h1>
            <h2 className="font-elegant text-3xl text-green-800 italic mb-2">
              18th Birthday
            </h2>
            <p className="text-green-900/80 tracking-widest text-sm font-light mb-8 uppercase">
              Kryxel Landong Barajas
            </p>
            
            <div className="w-16 h-px bg-lime-500 mx-auto mb-8"></div>
            
            <p className="text-green-800 tracking-widest text-lg font-light">
              7 . 29 . 2026
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 z-20 animate-bounce">
            <div className="w-px h-12 bg-lime-500 mx-auto"></div>
          </div>
        </div>

        {/* --- DEBUTANT PORTRAIT CAROUSEL SECTION --- */}
        <div className="relative bg-white px-6 py-16 overflow-hidden">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12" style={{ opacity: Math.min((scrollY - 400) / 300, 1) }}>
              <p className="font-elegant text-3xl text-green-900 mb-2">Kryxel Landong Barajas</p>
              <p className="text-lime-600 text-sm tracking-widest uppercase font-semibold">Forever Eighteen</p>
            </div>

            {/* Clean Portrait Carousel */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="relative w-80 h-96">
                {portraitImages.map((src, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="w-full h-full overflow-hidden rounded-3xl shadow-xl border-8 border-lime-100">
                      <img
                        src={src}
                        alt={`Kryxel Portrait ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {portraitImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImage ? 'bg-lime-500' : 'bg-lime-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- DETAILS SECTION --- */}
        <div className="px-8 py-16 bg-white relative z-20">
          <div className="text-center mb-12">
            <h3 className="font-elegant text-3xl text-green-900 mb-4">The Celebration</h3>
            <p className="text-green-700/80 font-light leading-relaxed">
              Join us for an evening of elegance, joy, and unforgettable memories as Kryxel Landong Barajas steps into her 18th year.
            </p>
          </div>

          <div className="space-y-8">
            {/* Date & Time */}
            <div className="grid grid-cols-[auto_1fr] gap-4 p-6 rounded-2xl bg-slate-50 border border-lime-100 shadow-sm items-start">
              <div className="bg-lime-100 p-3 rounded-full text-lime-600 self-start">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-elegant text-xl text-green-900 mb-1">When</h4>
                <div className="flex flex-col gap-1">
                  <p className="text-green-800 font-medium">Wednesday, July 29, 2026</p>
                  <div className="flex items-center text-green-700 text-sm gap-2">
                    <Clock className="w-4 h-4 text-lime-500" />
                    <span>6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="grid grid-cols-[auto_1fr] gap-4 p-6 rounded-2xl bg-slate-50 border border-lime-100 shadow-sm items-start">
              <div className="bg-lime-100 p-3 rounded-full text-lime-600 self-start">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-elegant text-xl text-green-900 mb-1">Where</h4>
                <p className="text-green-800 font-medium">San Juan Multipurpose Covered Court</p>
                <p className="text-green-700 text-sm mt-1">88G7+FXC,<br/> Bato, Camarines Sur</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=San+Juan+Multipurpose+Covered+Court,+Bato,+Camarines+Sur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center text-xs uppercase tracking-wider text-lime-600 font-bold hover:text-green-700 transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  View Map →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- VIDEO PLACEHOLDER SECTION --- */}
        <div className="bg-green-900 py-16 px-6 text-center text-white relative">
          {/* Decorative subtle background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#bef264 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="relative z-10">
            <h3 className="font-elegant text-3xl mb-2 text-white">Pre-Debut Teaser</h3>
            <p className="text-lime-200/80 text-sm mb-8 font-light">A glimpse into the magic</p>
            
            {/* VIDEO PLACEHOLDER CONTAINER */}
            <div className="w-full aspect-video bg-green-950 rounded-xl overflow-hidden relative shadow-2xl border border-green-800 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop" 
                alt="Video Thumbnail Placeholder"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-lime-500/90 rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-xs bg-black/50 text-white px-2 py-1 rounded backdrop-blur-md">Place your video URL here</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- THE 18s (ENTOURAGE) SECTION --- */}
        <div className="py-16 px-8 relative z-20 overflow-hidden" style={{ background: 'transparent' }}>
          {/* Parallax Background */}
          <div 
            className="absolute inset-0 z-0 opacity-25"
            style={{
              backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/002/742/175/non_2x/emerald-seamless-background-with-green-flowers-and-leaves-vector.jpg")',
              backgroundSize: '300px 300px',
              backgroundPosition: `center ${-scrollY * 0.25}px`,
              backgroundRepeat: 'repeat',
            }}
          ></div>
          
          {/* Light white overlay for text readability */}
          <div className="absolute inset-0 z-0 bg-white/10"></div>
          
          <div className="relative z-10">
          <div className="text-center mb-12">
            <h3 className="font-elegant text-3xl text-green-900 mb-4">The Entourage</h3>
            <p className="text-green-700/80 font-light leading-relaxed text-sm">
              The special people who have brought light, love, and guidance into Kryxel's life.
            </p>
          </div>

          <div className="space-y-12">
            {/* 18 Roses */}
            <div>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Flower className="w-5 h-5 text-lime-500" />
                <h4 className="font-elegant text-2xl text-green-900">18 Roses</h4>
                <Flower className="w-5 h-5 text-lime-500" />
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-center">
                {placeholderNames.map((name, i) => (
                  <div key={`rose-${i}`} className="text-sm text-green-800 border-b border-slate-100 pb-1">
                    {name}
                  </div>
                ))}
              </div>
            </div>

            {/* 18 Candles */}
            <div>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Flame className="w-5 h-5 text-lime-500" />
                <h4 className="font-elegant text-2xl text-green-900">18 Candles</h4>
                <Flame className="w-5 h-5 text-lime-500" />
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-center">
                {placeholderNames.map((name, i) => (
                  <div key={`candle-${i}`} className="text-sm text-green-800 border-b border-slate-100 pb-1">
                    {name}
                  </div>
                ))}
              </div>
            </div>

            {/* 18 Treasures */}
            <div>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Gift className="w-5 h-5 text-lime-500" />
                <h4 className="font-elegant text-2xl text-green-900">18 Treasures</h4>
                <Gift className="w-5 h-5 text-lime-500" />
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-center">
                {placeholderNames.map((name, i) => (
                  <div key={`treasure-${i}`} className="text-sm text-green-800 border-b border-slate-100 pb-1">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* --- DRESS CODE --- */}
        <div className="py-16 px-8 bg-slate-50 text-center relative">
          <Heart className="w-6 h-6 text-lime-400 mx-auto mb-4" />
          <h3 className="font-elegant text-2xl text-green-900 mb-4">Attire</h3>
          <p className="text-green-800 leading-relaxed max-w-xs mx-auto">
            We kindly request our guests to dress in formal attire. 
            <br/><br/>
            <span className="font-semibold text-green-900">Color Palette:</span>
            <br/>
            Shades of White, Lime, and Forest Green are highly encouraged.
          </p>
          
          {/* Color swatches */}
          <div className="flex justify-center space-x-3 mt-6">
            <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm"></div>
            <div className="w-8 h-8 rounded-full bg-[#bef264] shadow-sm"></div>
            <div className="w-8 h-8 rounded-full bg-[#84cc16] shadow-sm"></div>
            <div className="w-8 h-8 rounded-full bg-[#14532d] shadow-sm"></div>
          </div>
        </div>

        {/* --- RSVP SECTION --- */}
        <div className="pb-24 pt-8 px-8 bg-white text-center">
          <h3 className="font-elegant text-3xl text-green-900 mb-2">RSVP</h3>
          <p className="text-green-700 text-sm mb-8">Please respond by October 1st, 2026</p>
          
          <button className="w-full py-4 bg-lime-500 hover:bg-lime-600 text-green-950 font-bold rounded-xl shadow-lg shadow-lime-500/30 transition-all active:scale-95 flex items-center justify-center space-x-2">
            <span>Confirm Attendance</span>
            <Send className="w-4 h-4" />
          </button>
          
          <p className="mt-6 text-xs text-green-600/60 uppercase tracking-widest">
            Looking forward to celebrating with you
          </p>
        </div>

      </div>
    </div>
  );
}