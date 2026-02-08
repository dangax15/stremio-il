import React from 'react';
import { Rocket, CreditCard, Link, Zap, ArrowDown } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const RealDebrid: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in space-y-12 max-w-5xl mx-auto pb-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-6">
        <div className="inline-block p-3 rounded-full bg-yellow-500/10 mb-2 border border-yellow-500/20">
            <Rocket className="w-12 h-12 text-yellow-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          נמאס לכם שהסרט נתקע?<br />
          <span className="text-yellow-400 drop-shadow-lg">הפתרון המהיר (VIP)</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          שדרוג קטן שעושה הבדל ענק. לא חובה, אבל מומלץ מאוד למי שרוצה חוויה מושלמת.
        </p>
      </section>

      {/* Analogy Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-yellow-900/10 to-transparent p-6 md:p-10 rounded-3xl border border-yellow-500/10">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-100">איך זה עובד? (הסבר פשוט)</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              <span className="text-neon font-bold">בלי זה:</span> סטרימיו עובד על "שיתוף" בין אנשים. אתם תלויים בכך שיש מספיק אנשים שמשתפים את הסרט ברגע זה. לפעמים זה איטי ונתקע.
            </p>
            <div className="h-px w-full bg-white/10 my-2"></div>
            <p>
              <span className="text-yellow-400 font-bold">עם Real-Debrid:</span> זהו שירות חיצוני (זול, כ-15 ש"ח בחודש) שנותן לכם <span className="text-white font-bold">"כביש מהיר פרטי"</span>.
            </p>
            <p>
              התוצאה? לוחצים Play והסרט מתחיל מיד, באיכות הכי גבוהה (4K), בלי להיתקע אפילו לשנייה.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button variant="gold" onClick={() => scrollToSection('register')}>
              איך נרשמים? (מדריך קצר)
            </Button>
            <Button variant="gold-outline" onClick={() => scrollToSection('connect')}>
              איך מחברים את זה לסטרימיו?
            </Button>
          </div>
        </div>

        {/* Visual Decoration */}
        <div className="relative hidden md:block h-64">
           <div className="absolute inset-0 bg-yellow-500/5 rounded-2xl flex items-center justify-center border border-yellow-500/20">
              <Zap className="w-32 h-32 text-yellow-500/20" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-pulse"></div>
           </div>
           <div className="absolute -top-4 -right-4 bg-dark-card p-4 rounded-xl border border-yellow-500/30 shadow-xl">
              <span className="block text-3xl font-bold text-yellow-400 text-center">100%</span>
              <span className="text-xs text-gray-400">מהירות צפייה</span>
           </div>
           <div className="absolute -bottom-4 -left-4 bg-dark-card p-4 rounded-xl border border-yellow-500/30 shadow-xl">
              <span className="block text-3xl font-bold text-yellow-400 text-center">4K</span>
              <span className="text-xs text-gray-400">ללא תקיעות</span>
           </div>
        </div>
      </section>

      {/* Steps Section */}
      <div className="space-y-12 pt-8">
        
        {/* Step 1: Registration */}
        <div id="register" className="scroll-mt-24">
          <Card title="שלב 1: הרשמה לשירות" icon={<CreditCard className="w-8 h-8" />} variant="gold">
            <div className="space-y-4">
              <p className="text-gray-300">
                השירות הוא חיצוני ודורש הרשמה ותשלום סמלי (זה לא קשור לסטרימיו עצמה).
              </p>
              <ol className="space-y-4 list-decimal list-inside text-gray-300 marker:text-yellow-500">
                <li>כנסו לאתר <a href="http://real-debrid.com/?id=9548986" target="_blank" rel="noreferrer" className="text-yellow-400 underline hover:text-white">Real-Debrid.com</a>.</li>
                <li>לחצו על <span className="text-white font-bold">Sign Up</span> (הרשמה) ומלאו פרטים.</li>
                <li>לאחר אימות המייל, לחצו על <span className="text-white font-bold">Premium Offers</span> בתפריט העליון.</li>
                <li>בחרו חבילה. החבילה הפופולרית היא של <span className="text-white font-bold">4 יורו (כ-16 ש"ח)</span> ל-30 יום.</li>
                <li>שלמו באמצעות אשראי (מומלץ לבחור באופציה של Amazon Pay אם יש בעיה עם אשראי ישראלי, או פשוט לנסות).</li>
              </ol>
              <div className="mt-4 p-3 bg-yellow-500/10 rounded border border-yellow-500/20 text-sm text-yellow-200">
                טיפ: אחרי התשלום החשבון שלכם הופך ל-Premium ומוכן לשימוש.
              </div>
            </div>
          </Card>
        </div>

        {/* Arrow connector */}
        <div className="flex justify-center text-yellow-500/30">
          <ArrowDown className="w-10 h-10 animate-bounce" />
        </div>

        {/* Step 2: Connection */}
        <div id="connect" className="scroll-mt-24">
          <Card title="שלב 2: חיבור לסטרימיו (דרך Torrentio)" icon={<Link className="w-8 h-8" />} variant="gold">
            <div className="space-y-4">
              <p className="text-gray-300">
                עכשיו כשיש לכם מנוי, צריך "לספר" עליו לתוסף Torrentio כדי שישתמש בו.
              </p>
              
              <div className="space-y-4 bg-black/20 p-6 rounded-xl border border-white/5">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-bold text-white mb-1">העתקת מפתח ה-API</p>
                    <p className="text-sm text-gray-400">
                      כנסו לכתובת <a href="https://real-debrid.com/api" target="_blank" className="text-yellow-400 underline">real-debrid.com/api</a>. 
                      תחת "API Token", העתיקו את רצף האותיות הארוך (אם אין, לחצו Generate).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-bold text-white mb-1">הגדרת Torrentio מחדש</p>
                    <p className="text-sm text-gray-400 mb-2">
                      אנחנו צריכים להתקין את Torrentio מחדש עם ההגדרות החדשות.
                    </p>
                    <Button href="https://torrentio.strem.fun/configure" target="_blank" variant="gold" className="text-sm px-4 py-2 h-auto">
                       מעבר להגדרת Torrentio
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-bold text-white mb-1">הדבקת הקוד</p>
                    <ul className="text-sm text-gray-400 list-disc list-inside">
                       <li>במסך ההגדרות, בחרו ב-Debrid Provider את <b>Real Debrid</b>.</li>
                       <li>בשדה RealDebrid API Key שנפתח, הדביקו את הקוד שהעתקתם.</li>
                       <li>רדו למטה ולחצו <b>Install</b>.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <p className="text-green-400 font-bold text-center pt-2">
                זהו! מעכשיו בתוצאות החיפוש תראו קישורים עם הכיתוב [RD+]. אלו הקישורים המהירים.
              </p>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};