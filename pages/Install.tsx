import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tv, Laptop, ArrowRight } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Install: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
      <div className="text-center space-y-4">
        <span className="px-3 py-1 bg-neon/20 text-neon rounded-full text-sm font-semibold border border-neon/20">שלב 1 מתוך 3</span>
        <h1 className="text-4xl font-bold text-white">התקנת הנגן</h1>
        <p className="text-gray-400 text-lg">בחרו את המכשיר שבו תרצו לצפות</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* TV Card */}
        <Card title="טלוויזיה (Android TV)" icon={<Tv className="w-10 h-10" />}>
          <ul className="space-y-4 list-none text-gray-300">
            <li className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon/20 text-neon flex items-center justify-center text-sm font-bold mt-1">1</span>
              <span>כנסו לחנות האפליקציות (Google Play) בטלוויזיה.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon/20 text-neon flex items-center justify-center text-sm font-bold mt-1">2</span>
              <span>חפשו באנגלית: <span className="font-bold text-white">Stremio</span>.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon/20 text-neon flex items-center justify-center text-sm font-bold mt-1">3</span>
              <span>התקינו את האפליקציה הסגולה.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon/20 text-neon flex items-center justify-center text-sm font-bold mt-1">4</span>
              <span>פתחו אותה וסרקו את הברקוד עם הטלפון כדי להירשם בקלות.</span>
            </li>
          </ul>
        </Card>

        {/* PC Card */}
        <Card title="מחשב (PC / Mac)" icon={<Laptop className="w-10 h-10" />}>
          <ul className="space-y-4 list-none text-gray-300">
            <li className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon/20 text-neon flex items-center justify-center text-sm font-bold mt-1">1</span>
              <span>כנסו לאתר הרשמי: <a href="https://www.stremio.com" target="_blank" rel="noreferrer" className="text-neon underline hover:text-white">Stremio.com</a>.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon/20 text-neon flex items-center justify-center text-sm font-bold mt-1">2</span>
              <span>הורידו את הגרסה שמתאימה למחשב שלכם.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon/20 text-neon flex items-center justify-center text-sm font-bold mt-1">3</span>
              <span>התקינו והירשמו עם אימייל או פייסבוק בחינם.</span>
            </li>
          </ul>
        </Card>
      </div>

      <div className="flex justify-center pt-8">
        <Button onClick={() => navigate('/content')}>
          <span className="flex items-center gap-2">
            יש לי את האפליקציה, מה הלאה? <ArrowRight className="w-5 h-5" />
          </span>
        </Button>
      </div>
    </div>
  );
};