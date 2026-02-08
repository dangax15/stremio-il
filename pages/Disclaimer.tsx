import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

export const Disclaimer: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-3xl mx-auto py-8 px-2 md:px-0">
      
      {/* Header */}
      <div className="border-b border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <ShieldAlert className="w-8 h-8 text-gray-400" />
          <h1 className="text-3xl font-bold text-white">כתב ויתור והבהרה משפטית</h1>
        </div>
        <p className="text-gray-400 text-lg">
          נא לקרוא לפני השימוש במדריכים באתר.
        </p>
      </div>

      {/* Content Blocks */}
      <div className="space-y-8 text-gray-300 leading-relaxed">
        
        {/* Affiliation */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3 border-r-4 border-neon/50 pr-3">1. אי-התקשרות (Affiliation)</h2>
          <p className="text-sm md:text-base">
            האתר הינו אתר מידע פרטי וקהילתי ואינו קשור, ממומן או מופעל על ידי מפתחי האפליקציה 'Stremio' או כל שירות צד שלישי אחר המוזכר בו. כל הסימנים המסחריים המוזכרים באתר שייכים לבעליהם החוקיים.
          </p>
        </section>

        {/* Copyright */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3 border-r-4 border-neon/50 pr-3">2. זכויות יוצרים ותוכן (Copyright & Content)</h2>
          <p className="text-sm md:text-base">
            האתר אינו מאחסן, מפיץ או משדר תוכן וידאו כלשהו. כל התכנים המוזכרים (סרטים, סדרות) הינם בבעלות יוצריהם בלבד. המדריכים באתר מסבירים טכנית כיצד להשתמש בתוכנה ובתוספים (Addons) הזמינים ברשת האינטרנט הפתוחה. השימוש בתוספים אלו וצפייה בתכנים המוגנים בזכויות יוצרים הינם באחריות המשתמש בלבד.
          </p>
        </section>

        {/* Educational Purpose */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3 border-r-4 border-neon/50 pr-3">3. מטרת המידע (Educational Purpose)</h2>
          <p className="text-sm md:text-base">
            המידע באתר מוגש למטרות לימודיות ואינפורמטיביות בלבד (Educational Purposes). בעלי האתר לא יישאו באחריות לכל נזק, ישיר או עקיף, שייגרם למכשירכם, לאובדן מידע, או לכל תביעה משפטית שתקום כתוצאה משימוש במידע, בתוכנות או בשירותים המוזכרים באתר זה.
          </p>
        </section>

        {/* Accessibility */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3 border-r-4 border-neon/50 pr-3">4. הצהרת נגישות (Accessibility Statement)</h2>
          <p className="text-sm md:text-base">
            אנו רואים חשיבות רבה במתן שירות שוויוני לכלל הגולשים ובשיפור הנגישות באתר לאנשים עם מוגבלות. האתר נבנה בהתאם לתקני הנגישות המקובלים (WCAG). האתר נבנה בקוד נקי ותומך בשימוש במקלדת וקוראי מסך. במידה ומצאתם בעיה, אנא פנו אלינו לתיקון דרך ערוצי הקהילה.
          </p>
        </section>

      </div>

      {/* Footer / Back Button */}
      <div className="mt-12 pt-8 border-t border-white/10 flex justify-center">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-6 py-3 rounded-full hover:bg-white/5">
          <ArrowLeft className="w-4 h-4" />
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
};