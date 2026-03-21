'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function DonateButton() {
  const [showDonate, setShowDonate] = useState(false);
  const [mobileSafeArea, setMobileSafeArea] = useState('0px');
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  useEffect(() => {
    const safeArea = getComputedStyle(document.documentElement)
      .getPropertyValue('--sat') || '0px';
    setMobileSafeArea(`env(safe-area-inset-bottom, 16px)`);
  }, []);

  const mobileDonateButtonBottom = `calc(1rem + ${mobileSafeArea})`;
  const mobileDonateSheetBottom = mobileSafeArea;

  const open = () => {
    setShowDonate(true);
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    setShowDonate(false);
    document.body.style.overflow = '';
  };

  const renderDonateContent = (variant) => {
    const isMobile = variant === 'mobile';
    return (
      <div
        className={`relative ${
          isMobile
            ? 'mx-2 rounded-t-3xl shadow-lg'
            : 'w-[260px] rounded-lg shadow-lg'
        } bg-[#2d3a4a] overflow-hidden animate-slide-up`}
        style={{
          padding: '24px',
          paddingBottom: isMobile
            ? 'calc(24px + env(safe-area-inset-bottom, 16px))'
            : '24px',
        }}
      >
        {isMobile && (
          <button
            type="button"
            className="absolute top-4 right-4 text-white/70 z-10"
            onClick={close}
            aria-label="Close donate panel"
          >
            ✕
          </button>
        )}
        <p className="text-base text-white leading-relaxed" style={{ marginBottom: '14px' }}>
          Buy me coffee, tea, or yummy ingredients.
        </p>
        <p className="text-sm font-medium text-white/60" style={{ marginBottom: '4px' }}>venmo</p>
        <p className="text-lg text-white">@Osha-Foster</p>
          {/* Mobile */}
          <img
            src="/watermarks/Meat_42.svg"
            width={130}
            height={130}
            aria-hidden="true"
            className="md:hidden absolute pointer-events-none"
            style={{ filter: 'brightness(0) invert(1)', opacity: 0.28, transform: 'rotate(65deg)', bottom: '-35px', right: '-20px' }}
          />
          {/* Desktop */}
          <img
            src="/watermarks/Meat_42.svg"
            width={130}
            height={130}
            aria-hidden="true"
            className="hidden md:block absolute bottom-[-30px] right-[-35px] pointer-events-none"
            style={{ filter: 'brightness(0) invert(1)', opacity: 0.28, transform: 'rotate(30deg)' }}
          />
      </div>
    );
  };

  return (
    <>
      {/* Desktop button */}
      <motion.div
        className="hidden md:block fixed bottom-8 right-8 group cursor-pointer z-50"
        onClick={open}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
      >
        <div className="relative w-[140px] h-[60px]">
          {/* Oval label (shows on hover) */}
          <div className={`absolute right-0 top-0 w-full h-full border border-[#2d3a4a] rounded-full flex items-center justify-center transition-all ${
            !showDonate
              ? 'opacity-0 duration-200 delay-0 group-hover:opacity-100 group-hover:duration-500 group-hover:delay-200 pointer-events-none group-hover:pointer-events-auto'
              : 'opacity-0 duration-500 delay-0 pointer-events-none'
          }`} style={{ backgroundColor: "#fdfcfb" }}>
            <span className="font-medium text-lg whitespace-nowrap" style={{ color: "#2d3a4a" }}>donate</span>
          </div>

          {/* Dollar circle */}
          <div className={`absolute right-0 top-0 w-[60px] h-[60px] rounded-full bg-[#2d3a4a] flex items-center justify-center transition-all ${
            showDonate
              ? 'opacity-0 duration-300 pointer-events-none'
              : 'opacity-100 duration-300 group-hover:opacity-0'
          }`}>
            <span className="text-white text-xl leading-none">$</span>
          </div>

          {/* X circle */}
          <div
            className={`absolute right-0 top-0 w-[60px] h-[60px] rounded-full bg-[#2d3a4a] flex items-center justify-center cursor-pointer transition-all ${
              showDonate
                ? 'opacity-100 duration-500 delay-200'
                : 'opacity-0 duration-300 pointer-events-none'
            }`}
            onClick={(e) => { e.stopPropagation(); close(); }}
          >
            <span className="text-white text-xl leading-none">✕</span>
          </div>
        </div>
      </motion.div>

      {/* Mobile button — circle matching desktop, about page only */}
      {isAboutPage && <motion.div
        className={`md:hidden fixed z-50 cursor-pointer`}
        style={{ bottom: mobileDonateButtonBottom, right: '2rem' }}
        onClick={showDonate ? close : open}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
      >
        <div className="w-[60px] h-[60px] rounded-full bg-[#2d3a4a] flex items-center justify-center shadow-lg">
          <span className="text-white text-xl leading-none">{showDonate ? '✕' : '$'}</span>
        </div>
      </motion.div>}

      {/* Popup */}
      {showDonate && (
        <>
          {isAboutPage && <div className="md:hidden fixed inset-x-0 z-50" style={{ bottom: mobileDonateSheetBottom }}>
            {renderDonateContent('mobile')}
          </div>}
          <div className="hidden md:block fixed bottom-28 right-8 z-50">
            {renderDonateContent('desktop')}
          </div>
        </>
      )}
    </>
  );
}
