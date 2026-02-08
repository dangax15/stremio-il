import React, { useState, useEffect } from 'react';
import { Accessibility, Type, Eye, Link as LinkIcon, Pause, X, Minus, Plus, AlignLeft } from 'lucide-react';

export const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [stopAnimations, setStopAnimations] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  // Apply styles based on state
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Font Size
    root.style.fontSize = `${fontSize}%`;

    // High Contrast
    if (isHighContrast) {
      body.classList.add('a11y-high-contrast');
    } else {
      body.classList.remove('a11y-high-contrast');
    }

    // Highlight Links
    if (highlightLinks) {
      body.classList.add('a11y-links');
    } else {
      body.classList.remove('a11y-links');
    }

    // Stop Animations
    if (stopAnimations) {
      body.classList.add('a11y-stop-anim');
    } else {
      body.classList.remove('a11y-stop-anim');
    }

    // Readable Font
    if (readableFont) {
      body.classList.add('a11y-readable-font');
    } else {
      body.classList.remove('a11y-readable-font');
    }

  }, [fontSize, isHighContrast, highlightLinks, stopAnimations, readableFont]);

  // Inject Accessibility CSS
  useEffect(() => {
    const styleId = 'a11y-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .a11y-high-contrast {
          background-color: #000000 !important;
          color: #ffff00 !important;
        }
        .a11y-high-contrast * {
          background-color: #000000 !important;
          color: #ffff00 !important;
          border-color: #ffff00 !important;
          box-shadow: none !important;
          text-shadow: none !important;
          background-image: none !important;
        }
        .a11y-high-contrast img, .a11y-high-contrast video {
          filter: grayscale(100%) contrast(120%);
        }
        
        .a11y-links a {
          text-decoration: underline !important;
          text-decoration-thickness: 2px !important;
          color: #ffff00 !important;
          background-color: #000000 !important;
          outline: 2px solid #ffff00 !important;
        }

        .a11y-stop-anim * {
          animation: none !important;
          transition: none !important;
        }

        .a11y-readable-font, .a11y-readable-font * {
          font-family: Arial, Helvetica, sans-serif !important;
          letter-spacing: 0.5px !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const resetAll = () => {
    setFontSize(100);
    setIsHighContrast(false);
    setHighlightLinks(false);
    setStopAnimations(false);
    setReadableFont(false);
  };

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] font-sans">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="פתח תפריט נגישות"
        title="תפריט נגישות"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Menu */}
      {isOpen && (
        <div className="absolute left-full top-0 ml-2 w-72 bg-white text-gray-900 rounded-xl shadow-2xl border border-gray-200 p-4 -translate-y-1/2 overflow-y-auto max-h-[80vh]">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Accessibility className="w-5 h-5 text-blue-600" />
              כלי נגישות
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            {/* Font Size */}
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2 text-sm font-semibold">
                <Type className="w-4 h-4" />
                גודל טקסט
              </div>
              <div className="flex justify-between gap-2">
                <button 
                  onClick={() => setFontSize(Math.max(80, fontSize - 10))}
                  className="flex-1 bg-white border hover:bg-gray-50 py-1 rounded flex justify-center items-center"
                  aria-label="הקטן טקסט"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-mono py-1">{fontSize}%</span>
                <button 
                  onClick={() => setFontSize(Math.min(150, fontSize + 10))}
                  className="flex-1 bg-white border hover:bg-gray-50 py-1 rounded flex justify-center items-center"
                  aria-label="הגדל טקסט"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* High Contrast */}
            <button
              onClick={() => setIsHighContrast(!isHighContrast)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${isHighContrast ? 'bg-black text-yellow-400 border border-yellow-400' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <Eye className="w-4 h-4" />
                ניגודיות גבוהה
              </span>
              <div className={`w-3 h-3 rounded-full ${isHighContrast ? 'bg-yellow-400' : 'bg-gray-400'}`}></div>
            </button>

            {/* Highlight Links */}
            <button
              onClick={() => setHighlightLinks(!highlightLinks)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${highlightLinks ? 'bg-blue-100 text-blue-800 ring-1 ring-blue-500' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <LinkIcon className="w-4 h-4" />
                הדגשת קישורים
              </span>
              <div className={`w-3 h-3 rounded-full ${highlightLinks ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
            </button>

            {/* Readable Font */}
            <button
              onClick={() => setReadableFont(!readableFont)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${readableFont ? 'bg-blue-100 text-blue-800 ring-1 ring-blue-500' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <AlignLeft className="w-4 h-4" />
                גופן קריא
              </span>
              <div className={`w-3 h-3 rounded-full ${readableFont ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
            </button>

            {/* Stop Animations */}
            <button
              onClick={() => setStopAnimations(!stopAnimations)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${stopAnimations ? 'bg-blue-100 text-blue-800 ring-1 ring-blue-500' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <Pause className="w-4 h-4" />
                עצור אנימציות
              </span>
              <div className={`w-3 h-3 rounded-full ${stopAnimations ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
            </button>

            {/* Reset */}
            <button
              onClick={resetAll}
              className="w-full mt-2 py-2 text-sm text-red-600 hover:bg-red-50 rounded border border-red-200 transition-colors"
            >
              אפס הגדרות
            </button>
          </div>
        </div>
      )}
    </div>
  );
};