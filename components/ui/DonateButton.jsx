'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DonateButton() {
  const [showDonate, setShowDonate] = useState(false);
  const [mobileSafeArea, setMobileSafeArea] = useState('0px');

  useEffect(() => {
    const safeArea = getComputedStyle(document.documentElement)
      .getPropertyValue('--sat') || '0px';
    setMobileSafeArea(`env(safe-area-inset-bottom, 16px)`);
  }, []);

  const mobileDonateButtonBottom = `calc(1rem + ${mobileSafeArea})`;
  const mobileDonateSheetBottom = mobileSafeArea;

  const open = () => setShowDonate(true);
  const close = () => setShowDonate(false);

  const renderDonateContent = (variant) => {
    const isMobile = variant === 'mobile';
    return (
      <div
        className={`relative ${
          isMobile
            ? 'mx-4 rounded-t-3xl shadow-lg'
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
          buy me coffee, or tea.
        </p>
        <p className="text-sm font-medium text-white/60" style={{ marginBottom: '4px' }}>venmo</p>
        <p className="text-lg text-white">@Osha-Foster</p>
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

      {/* Mobile button */}
      <motion.button
        type="button"
        className={`md:hidden fixed inset-x-4 z-50 ${showDonate ? 'pointer-events-none' : 'pointer-events-auto'}`}
        style={{ bottom: mobileDonateButtonBottom }}
        onClick={open}
        initial={{ opacity: 0, translateY: 16 }}
        animate={{ opacity: showDonate ? 0 : 1, translateY: showDonate ? 16 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-center gap-2 rounded-full py-3 px-6 shadow-lg bg-[#2d3a4a] text-white border border-[#2d3a4a]">
          <span className="text-base font-medium">donate</span>
          <span className="text-sm font-medium" aria-hidden="true">$</span>
        </div>
      </motion.button>

      {/* Popup */}
      {showDonate && (
        <>
          <div className="md:hidden fixed inset-x-0 z-50" style={{ bottom: mobileDonateSheetBottom }}>
            {renderDonateContent('mobile')}
          </div>
          <div className="hidden md:block fixed bottom-28 right-8 z-50">
            {renderDonateContent('desktop')}
          </div>
        </>
      )}
    </>
  );
}
