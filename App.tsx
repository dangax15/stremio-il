import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Install } from './pages/Install';
import { Content } from './pages/Content';
import { Subtitles } from './pages/Subtitles';
import { Support } from './pages/Support';
import { RealDebrid } from './pages/RealDebrid';
import { Success } from './pages/Success';
import { Disclaimer } from './pages/Disclaimer';
import { AccessibilityStatement } from './pages/AccessibilityStatement';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { AccessibilityWidget } from './components/AccessibilityWidget';
import { Heart } from 'lucide-react';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-neon/30 selection:text-white flex flex-col relative">
      <AccessibilityWidget />
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {children}
      </main>
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-black/20">
        <div className="flex flex-col items-center gap-3">
          <p>© 2024 Stremio Guide Israel. Community Project.</p>
          <p className="flex items-center gap-1.5 text-xs opacity-70">
            Made with <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" /> for the community
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
            <Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors">
              הצהרת נגישות
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              מדיניות פרטיות
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
              תנאי שימוש והבהרה משפטית
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/install" element={<Install />} />
          <Route path="/content" element={<Content />} />
          <Route path="/subtitles" element={<Subtitles />} />
          <Route path="/real-debrid" element={<RealDebrid />} />
          <Route path="/success" element={<Success />} />
          <Route path="/support" element={<Support />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/accessibility" element={<AccessibilityStatement />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;