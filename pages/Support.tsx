import React, { useState } from 'react';
import { HelpCircle, Facebook, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import { Button } from '../components/Button';
import { AccordionItemProps } from '../types';

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full flex justify-between items-center py-5 text-right focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-neon' : 'text-gray-200 group-hover:text-white'}`}>
          {question}
        </span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-neon" /> : <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-white" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 leading-relaxed pr-2 border-r-2 border-white/10 mr-1">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const Support: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-12 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <div className="inline-block p-3 rounded-full bg-white/5 mb-2">
            <HelpCircle className="w-10 h-10 text-neon" />
        </div>
        <h1 className="text-4xl font-bold text-white">עזרה ופתרון בעיות</h1>
        <p className="text-gray-400 text-lg">שאלות נפוצות שנתקלנו בהן</p>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 shadow-xl">
        <AccordionItem 
          question="הוידאו נתקע לי, מה עושים?" 
          answer="נסו לבחור מקור צפייה אחר (קובץ אחר) מתוך הרשימה בצד ימין או שמאל (תלוי במכשיר). לפעמים הקובץ הראשון עמוס מדי במשתמשים ולכן הוא נתקע. נסו קובץ עם כותרת [4K] או [1080p] אחרת."
        />
        <AccordionItem 
          question="הכתוביות לא מסונכרנות (דיליי)." 
          answer="במחשב: לחצו על האות G או H במקלדת כדי להזיז את הזמן קדימה או אחורה. בטלוויזיה: חפשו את אייקון השעון/כתוביות בנגן תוך כדי צפייה, שם תוכלו להגדיר 'Subtitle Delay' ולהזיז את הזמן."
        />
        <AccordionItem 
          question="אני לא מוצא סרטים בעברית." 
          answer="סטרימיו הוא בינלאומי. הסרטים הם באנגלית, אבל התרגום הוא בעברית. ודאו שביצעתם את שלב 3 (הגדרת שפה) ושתוסף ה-OpenSubtitles מותקן לכם."
        />
         <AccordionItem 
          question="האם זה עובד באייפון (iOS)?" 
          answer="לצערנו, אפל חוסמת את התוספים של סטרימיו באייפון. ניתן להשתמש ב-Stremio Web דרך הדפדפן, אך החוויה הכי טובה היא במחשב, אנדרואיד או טלוויזיה חכמה."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 pt-6 pb-10">
        {/* Facebook Community */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/20 text-center space-y-4 flex flex-col justify-between">
          <div>
            <Facebook className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">הקהילה בפייסבוק</h3>
            <p className="text-gray-300">עדיין מסתבכים? הקהילה שלנו תשמח לעזור לכם בכל שאלה.</p>
          </div>
          <Button href="https://www.facebook.com/groups/26703773529210913" target="_blank" className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none shadow-blue-900/50 mt-4">
            מעבר לקבוצה &gt;
          </Button>
        </div>

        {/* Support */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-900/40 to-black border border-pink-500/20 text-center space-y-4 flex flex-col justify-between">
          <div>
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-white mb-2">תמיכה במפתחים</h3>
            <p className="text-gray-300">המדריך נבנה בהתנדבות מלאה. עזרנו לכם? נשמח לקפה ☕</p>
          </div>
          <Button href="https://buymeacoffee.com/danshamirr5" target="_blank" className="w-full bg-pink-600 hover:bg-pink-700 text-white border-none shadow-pink-900/50 mt-4">
            תמיכה סמלית &lt;3
          </Button>
        </div>
      </div>
    </div>
  );
};