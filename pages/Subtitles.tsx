import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, ArrowRight, List, Globe, Star } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Subtitles: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
      <div className="text-center space-y-4">
        <span className="px-3 py-1 bg-neon/20 text-neon rounded-full text-sm font-semibold border border-neon/20">שלב 3 מתוך 3</span>
        <h1 className="text-4xl font-bold text-white">מסדרים את הכתוביות</h1>
        <p className="text-gray-400 text-lg">שני תוספים והגדרה אחת קטנה, והכל עובד בעברית.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Step 1: OpenSubtitles v3 */}
        <Card title="1. הבסיס: OpenSubtitles v3" icon={<Globe className="w-8 h-8 text-blue-400" />} className="h-full">
          <div className="space-y-4">
            <p className="text-gray-300">
              זהו מאגר הכתוביות העולמי הרשמי. הוא בדרך כלל מגיע מותקן אוטומטית עם האפליקציה, אבל שווה לוודא שהוא שם.
            </p>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-sm font-bold text-white mb-2">איך מוודאים?</p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                <li>לחצו על אייקון הפאזל (<span className="text-white">Addons</span>).</li>
                <li>בצד, לחצו על <span className="text-white">Official Addons</span>.</li>
                <li>חפשו את <span className="text-neon font-bold">OpenSubtitles v3</span>.</li>
                <li>אם כתוב <span className="text-green-400">Installed</span> - מצוין. אם לא, לחצו Install.</li>
              </ol>
            </div>
          </div>
        </Card>

        {/* Step 2: Ktuvit.me */}
        <Card title="2. השדרוג הישראלי: Ktuvit.me" icon={<Star className="w-8 h-8 text-yellow-400" />} className="h-full border-neon/30">
          <div className="space-y-4">
            <p className="text-gray-300">
              <span className="font-bold text-white">מומלץ מאוד!</span> התוסף הזה מוסיף עוד המון אפשרויות תרגום איכותיות בעברית שאין במאגר הרגיל. ככה תמיד תהיה לכם אופציה נוספת.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
               <Button href="stremio://ktuvit.strem.fun/manifest.json" target="_blank" className="text-sm px-6 py-3 w-full sm:w-auto justify-center">
                  התקנת Ktuvit.me
               </Button>
            </div>
            <p className="text-xs text-gray-500">
              (התקנה ידנית: חפשו "Ktuvit" בחיפוש התוספים ולחצו Install)
            </p>
          </div>
        </Card>

        {/* Step 3: Default Settings */}
        <Card title="3. הגדרה אוטומטית" icon={<Settings className="w-8 h-8 text-gray-400" />} className="h-full">
          <div className="space-y-4">
            <p className="text-gray-300">
              עכשיו נגדיר לנגן לבחור עברית לבד, כדי שלא תצטרכו לחפש בכל פעם מחדש.
            </p>
            <ul className="space-y-2 text-gray-300 text-sm font-medium">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-neon" />
                לכו להגדרות (<span className="text-white">Settings</span>).
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-neon" />
                בחרו בלשונית <span className="text-white">Player</span>.
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-neon" />
                ב-Default Subtitle Language בחרו <span className="text-neon font-bold">Hebrew</span>.
              </li>
            </ul>
          </div>
        </Card>

        {/* Step 4: Switching Versions */}
        <Card title="4. החלפת גרסאות (טיפ זהב)" icon={<List className="w-8 h-8 text-green-400" />} className="h-full">
          <div className="space-y-4">
            <p className="text-gray-300">
              התחלתם סרט והתרגום לא מסונכרן? או שהוא בג'יבריש? אל דאגה. בגלל שהתקנו שני תוספים, יש לכם מבחר.
            </p>
            <div className="bg-white/5 p-4 rounded-lg border border-white/5">
              <p className="text-sm text-gray-300">
                בזמן הצפייה, לחצו על אייקון הכתוביות. תראו רשימה כמו:
                <br />
                <span className="text-white block mt-1">• Hebrew - OpenSubtitles</span>
                <span className="text-white block">• Hebrew - Ktuvit</span>
                <br />
                פשוט עברו ביניהם עד שתמצאו את זה שעובד מושלם.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex justify-center pt-8">
        <Button onClick={() => navigate('/success')}>
          <span className="flex items-center gap-2">
            סיימתי הכל! מה עכשיו? <ArrowRight className="w-5 h-5" />
          </span>
        </Button>
      </div>
    </div>
  );
};