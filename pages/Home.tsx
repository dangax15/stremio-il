import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Disc, Film, MessageCircle, Tv, Smartphone, Wifi, CheckCircle2, Facebook, Heart, XCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in space-y-12 md:space-y-20 pb-8">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col justify-center items-center text-center px-4 py-12 shadow-2xl shadow-neon/10 border border-white/10 group">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://image2url.com/r2/default/images/1770509865328-bf501cde-d5a7-44d6-b1eb-9d3c86df83e0.png" 
            alt="Stremio Guide Hero" 
            className="w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Gradient Overlays for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/40 via-transparent to-dark-bg/80"></div>
          <div className="absolute inset-0 bg-neon/5 mix-blend-overlay"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-5 bg-white/10 backdrop-blur-md rounded-full ring-1 ring-white/20 shadow-lg shadow-neon/30 mb-2 hover:scale-110 transition-transform cursor-pointer" onClick={() => navigate('/install')}>
            <Play className="w-10 h-10 md:w-12 md:h-12 text-neon fill-current" />
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
            המדריך הישראלי<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-dark via-neon to-purple-400 drop-shadow-lg">לסטרימיו</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg px-4">
            איך לראות הכל בחינם, עם תרגום, בלי להסתבך.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate('/install')} className="w-full sm:w-auto text-lg px-10 py-4 shadow-neon/30 hover:shadow-neon/50">
              בואו נתחיל! &gt;
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto text-lg px-10 py-4 backdrop-blur-md bg-black/30 hover:bg-black/50 border-white/20">
              איך זה עובד?
            </Button>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-2 md:px-4 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-white">איך זה עובד? (הסבר פשוט)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Card title="הנגן" icon={<Disc className="w-8 h-8" />}>
             דמיינו שסטרימיו הוא כמו נגן DVD ריק. קודם כל מתקינים את המכשיר עצמו כדי שיהיה לנו בסיס לצפייה.
          </Card>

          <Card title="הקלטות" icon={<Film className="w-8 h-8" />}>
            הנגן מגיע ריק. אנחנו צריכים להכניס לו "קלטות" (הרחבות תוכן) כדי שהוא יוכל למצוא סרטים וסדרות ברשת.
          </Card>

          <Card title="השפה" icon={<MessageCircle className="w-8 h-8" />}>
            אחרי שיש תוכן, נלמד את הנגן לדבר עברית כדי שנוכל לראות כתוביות בכל סרט שנבחר באופן אוטומטי.
          </Card>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="max-w-6xl mx-auto px-2 md:px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-white">למה לעבור לסטרימיו?</h2>
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[700px] bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-6 md:p-8 shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-6 text-lg md:text-xl font-bold border-b border-white/10 pb-4">
              <div className="text-gray-400">פיצ'ר</div>
              <div className="text-gray-300">נטפליקס / דיסני+</div>
              <div className="text-gray-300">טלגרם / אתרים</div>
              <div className="text-neon">סטרימיו (Stremio)</div>
            </div>

            {/* Price Row */}
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors rounded-lg px-2">
              <div className="font-bold text-gray-200">מחיר</div>
              <div className="text-red-400 font-medium">50-80 ₪ בחודש</div>
              <div className="text-green-400 font-medium">חינם</div>
              <div className="text-neon font-bold text-lg">חינם (0 ₪)</div>
            </div>

            {/* Convenience Row */}
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors rounded-lg px-2">
              <div className="font-bold text-gray-200">נוחות</div>
              <div className="text-green-400 font-medium flex items-center gap-2">
                 <CheckCircle2 className="w-5 h-5" /> גבוהה מאוד
              </div>
              <div className="text-red-400 font-medium flex items-center gap-2">
                 <XCircle className="w-5 h-5" /> נמוכה (חיפוש והורדה)
              </div>
              <div className="text-neon font-bold flex items-center gap-2">
                 <CheckCircle2 className="w-6 h-6" /> גבוהה (ממשק נטפליקס)
              </div>
            </div>

            {/* Quality Row */}
            <div className="grid grid-cols-4 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors rounded-lg px-2">
              <div className="font-bold text-gray-200">איכות</div>
              <div className="text-green-400 font-medium">4K HDR</div>
              <div className="text-yellow-500 font-medium flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> משתנה (לרוב נמוכה)
              </div>
              <div className="text-neon font-bold text-lg">4K HDR / Dolby Vision</div>
            </div>

            {/* Catalog Row */}
            <div className="grid grid-cols-4 gap-4 py-6 items-center hover:bg-white/5 transition-colors rounded-lg px-2">
              <div className="font-bold text-gray-200">קטלוג</div>
              <div className="text-red-400 font-medium">מוגבל לתוכן שלהם</div>
              <div className="text-yellow-500 font-medium">הכל (אבל קשה למצוא)</div>
              <div className="text-neon font-bold text-lg">כל התוכן שבעולם במקום אחד</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-2 md:px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-white">למה כולם עוברים לסטרימיו?</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center gap-3 hover:bg-white/10 transition-colors hover:border-neon/30">
            <div className="p-3 bg-green-500/20 rounded-full text-green-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white">חינם לגמרי</h3>
            <p className="text-gray-400 text-sm">כל הסרטים והסדרות ללא דמי מנוי חודשיים וללא התחייבות.</p>
          </div>

          <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center gap-3 hover:bg-white/10 transition-colors hover:border-blue-500/30">
            <div className="p-3 bg-blue-500/20 rounded-full text-blue-400">
              <Tv className="w-8 h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white">ממשק מדהים</h3>
            <p className="text-gray-400 text-sm">נראה ומרגיש בדיוק כמו נטפליקס, רק עם כל התוכן שבעולם.</p>
          </div>

          <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center gap-3 hover:bg-white/10 transition-colors hover:border-purple-500/30">
            <div className="p-3 bg-purple-500/20 rounded-full text-purple-400">
              <Smartphone className="w-8 h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white">בכל המכשירים</h3>
            <p className="text-gray-400 text-sm">טלוויזיה, מחשב, טלפון או טאבלט - הכל מסונכרן בחשבון אחד.</p>
          </div>

           <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center gap-3 hover:bg-white/10 transition-colors hover:border-yellow-500/30">
            <div className="p-3 bg-yellow-500/20 rounded-full text-yellow-400">
              <Wifi className="w-8 h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white">צפייה מיידית</h3>
            <p className="text-gray-400 text-sm">לא צריך להוריד קבצים למחשב. לוחצים Play וצופים מיד באיכות שיא.</p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="max-w-4xl mx-auto px-2 md:px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-white">הקהילה שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Facebook */}
          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 flex flex-col items-center text-center gap-4 group hover:border-blue-500/40 transition-all">
            <Facebook className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-2xl font-bold text-white">הקהילה בפייסבוק</h3>
              <p className="text-gray-400 mt-2 text-sm md:text-base">יש לכם שאלה? צריכים המלצה? הצטרפו לקבוצה הגדולה בישראל.</p>
            </div>
            <Button href="https://www.facebook.com/groups/26703773529210913" target="_blank" className="w-full bg-blue-600 hover:bg-blue-500 border-none mt-auto">
              הצטרפות לקבוצה
            </Button>
          </div>

          {/* Support */}
          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-pink-900/20 to-black border border-pink-500/20 flex flex-col items-center text-center gap-4 group hover:border-pink-500/40 transition-all">
            <Heart className="w-12 h-12 text-pink-500 group-hover:scale-110 transition-transform animate-pulse" />
            <div>
              <h3 className="text-2xl font-bold text-white">תמיכה במפתחים</h3>
              <p className="text-gray-400 mt-2 text-sm md:text-base">המדריך נבנה באהבה ובחינם. עזרנו לכם? נשמח לקפה קטן לדרך.</p>
            </div>
            <Button href="https://buymeacoffee.com/danshamirr5" target="_blank" className="w-full bg-pink-600 hover:bg-pink-500 border-none mt-auto">
              תמיכה סמלית ❤️
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};