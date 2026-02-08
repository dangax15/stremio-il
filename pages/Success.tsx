import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PartyPopper, Facebook, Heart, HelpCircle, ArrowLeft, Rocket } from 'lucide-react';
import { Button } from '../components/Button';

export const Success: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in space-y-8 md:space-y-12 max-w-4xl mx-auto px-4 md:px-0 pb-12">
      {/* Celebration Header */}
      <section className="text-center space-y-6 pt-8 relative overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-neon/10 blur-[120px] -z-10 rounded-full"></div>
        
        <div className="inline-block p-5 rounded-full bg-green-500/10 border border-green-500/20 mb-2 animate-bounce">
          <PartyPopper className="w-16 h-16 text-green-400" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          מזל טוב!<br />
          <span className="text-neon">סיימתם את ההתקנה</span>
        </h1>
        
        <p className="text-xl text-gray-300 max-w-xl mx-auto font-light">
          הכל מוגדר ומוכן. עכשיו אפשר להתרווח וליהנות מחוויית צפייה מושלמת.
        </p>

        {/* VIP Call to Action */}
        <div className="pt-6">
          <div className="bg-yellow-500/10 border border-yellow-500/30 p-6 md:p-8 rounded-3xl space-y-4 max-w-2xl mx-auto shadow-2xl shadow-yellow-500/5 relative overflow-hidden">
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-yellow-500/20 blur-3xl rounded-full pointer-events-none"></div>
             
             <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="p-3 bg-yellow-500/20 rounded-full">
                   <Rocket className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-100">רוצים לשדרג ל-VIP?</h3>
                <p className="text-gray-300">
                  צפייה ב-4K ללא תקיעות וללא המתנה. שדרוג קטן שעושה הבדל ענק.
                </p>
                <Button 
                  variant="gold" 
                  onClick={() => navigate('/real-debrid')} 
                  className="w-full sm:w-auto mt-2"
                >
                  המשך למדריך ה-VIP &gt;
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Community Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Facebook */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors flex flex-col items-center text-center gap-3 group">
          <Facebook className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="text-lg font-bold text-white">הקהילה בפייסבוק</h3>
            <p className="text-sm text-gray-400">הצטרפו לקבוצה לעדכונים והמלצות</p>
          </div>
          <Button href="https://www.facebook.com/groups/26703773529210913" target="_blank" className="w-full bg-blue-600/20 hover:bg-blue-600 border border-blue-500/50 text-blue-100 mt-auto text-sm py-3">
            הצטרפות לקבוצה
          </Button>
        </div>

        {/* Support */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-colors flex flex-col items-center text-center gap-3 group">
          <Heart className="w-10 h-10 text-pink-500 group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="text-lg font-bold text-white">תמיכה במפתחים</h3>
            <p className="text-sm text-gray-400">עזרנו לכם? נשמח לקפה ☕</p>
          </div>
          <Button href="https://buymeacoffee.com/danshamirr5" target="_blank" className="w-full bg-pink-600/20 hover:bg-pink-600 border border-pink-500/50 text-pink-100 mt-auto text-sm py-3">
            תמיכה סמלית
          </Button>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 border-t border-white/10">
        <Button variant="outline" onClick={() => navigate('/support')} className="w-full sm:w-auto text-sm">
          <HelpCircle className="w-4 h-4 ml-2" />
          שאלות נפוצות (FAQ)
        </Button>
        <Button variant="secondary" onClick={() => navigate('/')} className="w-full sm:w-auto text-sm opacity-70 hover:opacity-100">
          <ArrowLeft className="w-4 h-4 ml-2" />
          חזרה לראשי
        </Button>
      </div>
    </div>
  );
};