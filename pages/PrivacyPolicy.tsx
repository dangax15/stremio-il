import React from 'react';
import { Lock, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-3xl mx-auto py-8 px-2 md:px-0">
      
      <div className="border-b border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Lock className="w-8 h-8 text-green-400" />
          <h1 className="text-3xl font-bold text-white">מדיניות פרטיות</h1>
        </div>
        <p className="text-gray-400 text-lg">
          הפרטיות שלכם חשובה לנו.
        </p>
      </div>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        
        <section>
          <h2 className="text-xl font-semibold text-white mb-3 border-r-4 border-green-500/50 pr-3">1. כללי</h2>
          <p>
            האתר "המדריך הישראלי לסטרימיו" (להלן: "האתר") מכבד את פרטיות המשתמשים ומחויב להגן עליה. מסמך זה מפרט את מדיניות הפרטיות והאופן בו אנו מתייחסים למידע.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3 border-r-4 border-green-500/50 pr-3">2. איסוף מידע (Data Collection)</h2>
          <p>
            האתר <strong>אינו</strong> אוסף מידע אישי מזהה (כגון שם, מספר טלפון, תעודת זהות) באופן אוטומטי.
          </p>
          <p className="mt-2">
            השימוש באתר הינו אנונימי. אנו לא דורשים הרשמה לאתר עצמו לצורך קריאת המדריכים.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3 border-r-4 border-green-500/50 pr-3">3. קישורים לצד שלישי</h2>
          <p>
            האתר מכיל קישורים לאתרים חיצוניים ושירותים של צדדים שלישיים (כגון: Stremio, Facebook, Real-Debrid, תוספים שונים).
          </p>
          <p className="mt-2">
            לחיצה על קישורים אלו תעביר אתכם לאתרים שאינם בשליטתנו. אנו לא אחראים למדיניות הפרטיות, לתנאי השימוש או לתוכן של אותם אתרים. אנו ממליצים לעיין במדיניות הפרטיות של כל אתר חיצוני אליו אתם מגיעים.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3 border-r-4 border-green-500/50 pr-3">4. עוגיות (Cookies)</h2>
          <p>
            האתר עשוי להשתמש ב"עוגיות" (Cookies) טכניות בסיסיות לצורך תפעול תקין של האתר ולשיפור חווית המשתמש (למשל, שמירת העדפות תצוגה מקומיות). ניתן לשנות את הגדרות הדפדפן כדי לחסום שימוש בעוגיות.
          </p>
        </section>

         <section>
          <h2 className="text-xl font-semibold text-white mb-3 border-r-4 border-green-500/50 pr-3">5. יצירת קשר</h2>
          <p>
            במידה והמשתמש יוצר קשר יזום דרך הדואר האלקטרוני או ערוצי המדיה החברתית, המידע שיימסר על ידו ישמש אך ורק לצורך המענה לפנייה ולא יועבר לצדדים שלישיים ללא אישור.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-8 border-t border-white/10 flex justify-center">
        <Button variant="secondary" onClick={() => window.history.back()} className="text-sm">
          <ArrowLeft className="w-4 h-4 ml-2" />
          חזרה
        </Button>
      </div>
    </div>
  );
};