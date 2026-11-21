import { useState } from 'react';

// Custom SVG Icons crafted to match the beige-and-black luxury aesthetic
const PhoneIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const MapPinIcon = ({ className = "w-5 h-5 flex-shrink-0" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg className="w-4 h-4 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:translate-x-0.5 group-active:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#ECE4D5] flex items-center justify-center p-0 sm:py-6 selection:bg-[#171717] selection:text-[#F3EBDD]">
      {/* Mobile-Only Container: strictly crafted for 360px - 430px */}
      <main className="w-full max-w-[430px] min-h-screen sm:min-h-[880px] bg-[#F3EBDD] sm:rounded-[36px] sm:shadow-2xl sm:shadow-black/20 flex flex-col justify-between overflow-hidden relative border-0 sm:border border-[#E3D7C5]/70">
        
        {/* Subtle decorative heritage top bar */}
        <div className="pt-6 pb-3 px-5 flex flex-col items-center text-center animate-fade-in relative z-10">
          
          {/* Official Hotel Logo */}
          <div className="mb-2.5 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-[#FAF6EE] p-1.5 border border-[#E3D7C5] shadow-sm flex items-center justify-center overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Kashi Anupam Hotel Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Micro-badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EAE0D0] text-[#171717] text-[10.5px] font-medium tracking-widest uppercase mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
            Varanasi • Holy City
          </div>

          {/* Hotel Name */}
          <h1 className="font-serif text-[24px] sm:text-[26px] font-bold text-[#171717] tracking-tight leading-tight">
            Kashi Anupam Hotel
          </h1>

          {/* Classy Welcome Headline & Tagline */}
          <p className="font-cormorant italic text-[#171717]/85 text-[17px] sm:text-[18px] mt-0.5 font-medium tracking-wide">
            Welcome to Divine Hospitality
          </p>
          <p className="font-sans text-[#171717]/75 text-[12.5px] tracking-normal mt-0.5 max-w-[310px] leading-snug">
            Your Comfortable Stay in the Heart of Kashi.
          </p>

          {/* Location on Top */}
          <a
            href="https://maps.app.goo.gl/saCRNu5KNppQkgSA9?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FAF6EE] border border-[#E3D7C5] hover:border-[#C5A059] transition-all text-left shadow-xs max-w-full"
            title="Click to view live location on Google Maps"
          >
            <span className="text-[#C5A059] flex-shrink-0">
              <MapPinIcon className="w-3.5 h-3.5" />
            </span>
            <span className="text-[11px] text-[#171717]/90 font-medium leading-tight">
              NH 29, Tilmapur, Ashapur Rd, opp Orbit City, Varanasi. 221007
            </span>
            <span className="text-[#C5A059] opacity-70 group-hover:opacity-100 flex-shrink-0">
              <ArrowUpRightIcon />
            </span>
          </a>

          <div className="w-10 h-[1px] bg-[#171717]/15 mt-3 mb-0.5" />
        </div>

        {/* Hero Section: Elegant Hotel Image */}
        <div className="px-5 pb-3 animate-fade-in-delay-1 relative z-10">
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#E7DEC8] border border-[#E3D7C5] shadow-luxury group">
            {/* Ambient image - iPhone Pro style enhanced warmth and clarity */}
            <img 
              src="/hotel-hero.jpg"
              alt="Kashi Anupam Hotel - Experience Serene Hospitality"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover object-center brightness-[1.04] contrast-[1.03] saturate-[1.06] transition-transform duration-700 ease-out group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Fallback graceful shimmer while loading */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#EADBCE] text-[#171717]">
                <div className="font-serif text-lg font-semibold tracking-wide">Kashi Anupam Hotel</div>
                <div className="text-xs text-[#171717]/60 mt-1">Loading Ambiance...</div>
              </div>
            )}
          </div>

          {/* Quick Hospitality Highlights */}
          <div className="grid grid-cols-3 gap-2 mt-3 text-center">
            <div className="bg-[#FAF6EE] border border-[#E3D7C5]/70 rounded-xl py-1.5 px-1">
              <span className="block text-[10px] tracking-wider uppercase text-[#171717]/60">Prime</span>
              <span className="font-serif font-bold text-xs text-[#171717]">City Center</span>
            </div>
            <div className="bg-[#FAF6EE] border border-[#E3D7C5]/70 rounded-xl py-1.5 px-1">
              <span className="block text-[10px] tracking-wider uppercase text-[#171717]/60">Stay</span>
              <span className="font-serif font-bold text-xs text-[#171717]">Air-Conditioned</span>
            </div>
            <div className="bg-[#FAF6EE] border border-[#E3D7C5]/70 rounded-xl py-1.5 px-1">
              <span className="block text-[10px] tracking-wider uppercase text-[#171717]/60">Support</span>
              <span className="font-serif font-bold text-xs text-[#171717]">24/7 Front Desk</span>
            </div>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="px-5 py-3 space-y-2.5 animate-fade-in-delay-2 relative z-10">

          {/* VISIT PROPERTY - Google Maps Navigation */}
          <a
            href="https://maps.app.goo.gl/saCRNu5KNppQkgSA9?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between w-full h-[60px] px-5 rounded-2xl bg-[#171717] text-[#F3EBDD] shadow-luxury tap-luxury hover:bg-[#232323] hover:shadow-luxury-lg border border-[#303030]"
            aria-label="Visit Kashi Anupam Hotel Property on Google Maps"
          >
            {/* Subtle golden ambient glow border for prominence */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#C5A059]/40 via-transparent to-[#C5A059]/40 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="flex items-center gap-3.5 z-10">
              <div className="w-10 h-10 rounded-xl bg-[#282828] border border-white/10 flex items-center justify-center text-[#F3EBDD] group-hover:text-[#E8D2A6] transition-colors">
                <MapPinIcon />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-sans font-bold text-[14px] tracking-wider text-[#F3EBDD] uppercase">
                    VISIT PROPERTY
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-[#C5A059] text-[#171717] uppercase tracking-wider">
                    Google Maps
                  </span>
                </div>
                <p className="text-[12px] text-[#F3EBDD]/70 tracking-tight mt-0.5">
                  Get Live Directions & Location
                </p>
              </div>
            </div>

            <div className="z-10 flex items-center">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <ArrowUpRightIcon />
              </div>
            </div>
          </a>

          {/* 1. CALL NOW - Primary Prominent Action */}
          <a
            href="tel:+919580067575"
            className="group relative flex items-center justify-between w-full h-[60px] px-5 rounded-2xl bg-[#171717] text-[#F3EBDD] shadow-luxury tap-luxury hover:bg-[#232323] hover:shadow-luxury-lg border border-[#303030]"
            aria-label="Call Kashi Anupam Hotel directly at +91 9580067575"
          >
            {/* Subtle golden ambient glow border for prominence */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#C5A059]/40 via-transparent to-[#C5A059]/40 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="flex items-center gap-3.5 z-10">
              <div className="w-10 h-10 rounded-xl bg-[#282828] border border-white/10 flex items-center justify-center text-[#F3EBDD] group-hover:text-[#E8D2A6] transition-colors">
                <PhoneIcon />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-sans font-bold text-[14px] tracking-wider text-[#F3EBDD] uppercase">
                    CALL NOW
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-[#C5A059] text-[#171717] uppercase tracking-wider">
                    Direct
                  </span>
                </div>
                <p className="text-[12px] text-[#F3EBDD]/70 font-mono tracking-tight mt-0.5">
                  +91 95800 67575
                </p>
              </div>
            </div>

            <div className="z-10 flex items-center">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <ArrowUpRightIcon />
              </div>
            </div>
          </a>

          {/* 2. WHATSAPP NOW - Primary Prominent Action */}
          <a
            href="https://wa.me/919580067575?text=Hello%20where%20is%20this%20hotel%20located%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between w-full h-[60px] px-5 rounded-2xl bg-[#171717] text-[#F3EBDD] shadow-luxury tap-luxury hover:bg-[#232323] hover:shadow-luxury-lg border border-[#303030]"
            aria-label="Chat with Kashi Anupam Hotel on WhatsApp"
          >
            <div className="flex items-center gap-3.5 z-10">
              <div className="w-10 h-10 rounded-xl bg-[#282828] border border-white/10 flex items-center justify-center text-[#F3EBDD] group-hover:text-[#25D366] transition-colors">
                <WhatsAppIcon />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-sans font-bold text-[14px] tracking-wider text-[#F3EBDD] uppercase">
                    WHATSAPP NOW
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-[#25D366]/20 text-[#68e096] border border-[#25D366]/30 uppercase tracking-wider">
                    Instant
                  </span>
                </div>
                <p className="text-[12px] text-[#F3EBDD]/70 tracking-tight mt-0.5">
                  Location & Immediate Enquiry
                </p>
              </div>
            </div>

            <div className="z-10 flex items-center">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <ArrowUpRightIcon />
              </div>
            </div>
          </a>

          {/* 3. INSTAGRAM */}
          <a
            href="https://www.instagram.com/kashi_anupam_hotel?hvrq=MXc3MDFlNWx0czVxZw=="
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full h-[56px] px-5 rounded-2xl bg-[#171717] text-[#F3EBDD] shadow-luxury tap-luxury hover:bg-[#232323] border border-[#2a2a2a]"
            aria-label="Open Kashi Anupam Hotel Instagram profile"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#252525] border border-white/5 flex items-center justify-center text-[#F3EBDD] group-hover:text-[#E1306C] transition-colors">
                <InstagramIcon />
              </div>
              <div className="text-left">
                <span className="font-sans font-bold text-[13px] tracking-wider text-[#F3EBDD] uppercase block">
                  INSTAGRAM
                </span>
                <p className="text-[11px] text-[#F3EBDD]/65 tracking-tight">
                  @kashi_anupam_hotel
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
                <ArrowUpRightIcon />
              </div>
            </div>
          </a>

          {/* 4. VISIT WEBSITE */}
          <a
            href="https://kashianupamhotel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full h-[56px] px-5 rounded-2xl bg-[#171717] text-[#F3EBDD] shadow-luxury tap-luxury hover:bg-[#232323] border border-[#2a2a2a]"
            aria-label="Visit official website of Kashi Anupam Hotel"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#252525] border border-white/5 flex items-center justify-center text-[#F3EBDD] group-hover:text-[#C5A059] transition-colors">
                <GlobeIcon />
              </div>
              <div className="text-left">
                <span className="font-sans font-bold text-[13px] tracking-wider text-[#F3EBDD] uppercase block">
                  VISIT WEBSITE
                </span>
                <p className="text-[11px] text-[#F3EBDD]/65 tracking-tight">
                  kashianupamhotel.com
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
                <ArrowUpRightIcon />
              </div>
            </div>
          </a>

        </div>

        {/* Minimal, Luxury Footer */}
        <footer className="px-6 pt-3 pb-6 text-center animate-fade-in-delay-3 relative z-10">
          <div className="w-8 h-[1px] bg-[#171717]/15 mx-auto mb-3" />
          <p className="font-serif text-[12px] text-[#171717]/85 tracking-wide font-medium">
            Kashi Anupam Hotel
          </p>
          <a
            href="https://maps.app.goo.gl/saCRNu5KNppQkgSA9?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 text-[11px] text-[#171717]/70 hover:text-[#171717] mt-1 tracking-tight font-sans transition-colors max-w-[320px] mx-auto text-center"
          >
            <span>NH 29, Tilmapur, Ashapur Rd, opp Orbit City, Varanasi. 221007</span>
            <span className="text-[10px] text-[#C5A059] font-medium flex-shrink-0">• View Map</span>
          </a>
          <p className="text-[10px] text-[#171717]/40 mt-1.5 font-sans">
            © {new Date().getFullYear()} Kashi Anupam Hotel. All Rights Reserved.
          </p>
        </footer>

        {/* Subtle decorative fine-line background texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#171717 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
        />
      </main>
    </div>
  );
}
