import React from 'react';
import { Accessibility, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const AccessibilityStatement: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-3xl mx-auto py-8 px-2 md:px-0">
      
      <div className="border-b border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Accessibility className="w-8 h-8 text-blue-400" />
          <h1 className="text-3xl font-bold text-white">הצהרת נגישות</h1>
        </div>
        <p className="text-gray-400 text-lg">
          אנו רואים חשיבות רבה במתן שירות שוויוני לכלל הגולשים.
        </p>
      </div>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">כללי</h2>
          <p>
            אתר זה הוקם מתוך מטרה לאפשר לכל אדם גישה נוחה וקלה למידע המפורסם בו. אנו משקיעים מאמצים רבים בהנגשת האתר בהתאם לתקן הישראלי 5568 ברמה AA.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">התאמות הנגישות באתר</h2>
          <ul className="space-y-3">
             <li className="flex gap-3">
               <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
               <span>תפריט נגישות צף המאפשר שליטה על גודל הגופן, ניגודיות, והדגשת קישורים.</span>
             </li>
             <li className="flex gap-3">
               <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
               <span>ניווט מלא באמצעות מקלדת (TAB).</span>
             </li>
             <li className="flex gap-3">
               <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
               <span>התאמה לקוראי מסך פופולריים.</span>
             </li>
             <li className="flex gap-3">
               <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
               <span>שימוש בצבעים ניגודיים וברורים (Dark Mode מותאם).</span>
             </li>
             <li className="flex gap-3">
               <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
               <span>הימנעות משימוש ברכיבים מהבהבים או תזזיתיים.</span>
             </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">תאימות דפדפנים</h2>
          <p>
            האתר נבדק ותומך בדפדפנים המובילים: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">סייגים לנגישות</h2>
          <p>
            למרות מאמצנו להנגיש את כלל הדפים באתר, ייתכן ויתגלו חלקים שטרם הונגשו במלואם. אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו עבור כלל האוכלוסייה, כולל אנשים עם מוגבלויות.
          </p>
        </section>

        <section className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold text-white mb-3">יצירת קשר בנושא נגישות</h2>
          <p className="mb-4">
            במידה ומצאתם באתר בעיה בנושא הנגישות או שהנכם זקוקים עזרה, נשמח לקבל מכן משוב.
          </p>
          <p>
            ניתן לפנות אלינו באמצעות קבוצת הקהילה בפייסבוק או במייל (אם קיים).
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