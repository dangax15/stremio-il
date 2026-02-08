import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Puzzle, ArrowRight } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Content: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in space-y-10 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <span className="px-3 py-1 bg-neon/20 text-neon rounded-full text-sm font-semibold border border-neon/20">שלב 2 מתוך 3</span>
        <h1 className="text-4xl font-bold text-white">הוספת התוכן (החלק החשוב!)</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          כרגע הנגן שלכם ריק. אנחנו צריכים להתקין לו "מנוע" שימצא סרטים בצורה אוטומטית.
        </p>
      </div>

      <Card title="התקנת המנוע הראשי (Torrentio)" icon={<Zap className="w-10 h-10 text-yellow-400" />} className="border-neon/30 bg-neon/5">
        <div className="space-y-6 text-center">
          <p className="text-lg">
            לחצו על הכפתור הסגול למטה. ייפתח חלון - לחצו בו על <span className="font-bold bg-white/10 px-2 py-1 rounded">Install</span>.
            <br />
            זה הכל, המנוע יותקן אוטומטית.
          </p>
          
          <div className="py-2">
            <Button href="stremio://torrentio.strem.fun/manifest.json" target="_blank">
              לחץ כאן להתקנת התוסף
            </Button>
            <p className="text-sm text-gray-500 mt-2">(אם זה לא פותח את האפליקציה, נסו את השיטה הידנית למטה)</p>
          </div>
        </div>
      </Card>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <Puzzle className="w-8 h-8 text-gray-400 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-gray-200 mb-2">לא עבד אוטומטית? (שיטה ידנית)</h3>
            <p className="text-gray-400">
              1. כנסו בתוך אפליקציית Stremio לאייקון הפאזל (<span className="text-white font-medium">Addons</span>).
              <br />
              2. בשורת החיפוש הקלידו <span className="text-white font-medium">Torrentio</span>.
              <br />
              3. לחצו על כפתור <span className="text-white font-medium">Install</span> הירוק.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <Button onClick={() => navigate('/subtitles')} variant="secondary">
          <span className="flex items-center gap-2">
            התקנתי, בוא נסדר עברית <ArrowRight className="w-5 h-5" />
          </span>
        </Button>
      </div>
    </div>
  );
};