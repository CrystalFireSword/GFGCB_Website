
'use client';

import * as React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { adventCalendarData, devAdventCalendarData, sysDesignAdventCalendarData, type AdventDay } from '@/lib/advent-calendar-data';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Music2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

type AdventManorVariant = 'dsa' | 'development' | 'system-design';

interface AdventManorProps {
  data: AdventDay[];
  onDayClick: (day: AdventDay) => void;
  selectedDay: AdventDay | null;
  variant?: AdventManorVariant;
}

const ManorAccent = ({ style }: { style: React.CSSProperties }) => (
    <Star className="absolute text-[var(--manor-accent-color)] opacity-50 animate-twinkle" style={style} />
);

const AdventManor: React.FC<AdventManorProps> = ({ data, onDayClick, selectedDay, variant = 'dsa' }) => {
  const isDayOpenable = (day: number) => {
    // For prototype, all days are openable.
    return true; 
  };

  const getDayData = (day: number) => data.find(d => d.day === day);

  const getCategoryLabel = (variant: AdventManorVariant) => {
    switch (variant) {
      case 'dsa': return 'DSA';
      case 'development': return 'Development';
      case 'system-design': return 'System Design';
    }
  };

  const stars = React.useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => {
      const style = {
        top: `${Math.random() * 110 - 5}%`, // Allow some stars to go slightly off-screen
        left: `${Math.random() * 110 - 5}%`,
        width: Math.random() * 8 + 2,
        height: Math.random() * 8 + 2,
        animationDelay: `${Math.random() * 2.5}s`,
        animationDuration: `${Math.random() * 1.5 + 1}s`,
        transform: `rotate(${Math.random() * 360}deg)`,
      };
      return <ManorAccent key={i} style={style} />;
    });
  }, []);

  const renderWindow = (day: number) => {
    const dayData = getDayData(day);
    if (!dayData) return <div className="manor-window is-empty" />;

    const isOpen = selectedDay?.day === day;

    return (
      <div
        className={cn(
          "manor-window", 
          `day-${day}`, 
          !isDayOpenable(day) && "is-locked",
          isOpen && "is-open"
        )}
        onClick={() => isDayOpenable(day) && onDayClick(dayData)}
        data-day={day}
      >
        <div className="window-content">
          <div className="window-number">{day}</div>
          <div className="window-category">{getCategoryLabel(variant)}</div>
          <div className="shutter-left" />
          <div className="shutter-right" />
          <div className="window-glow" />
        </div>
      </div>
    );
  };
  
  return (
    <div className="manor-facade" data-variant={variant}>
        {stars}
      <div className="manor-roof">
        <div className="chimney left" />
        <div className="roof-peak-accent" />
        <div className="chimney right" />
      </div>
      <div className="manor-body">
        {renderWindow(1)}
        {renderWindow(2)}
        {renderWindow(3)}
        {renderWindow(4)}
        {renderWindow(5)}
        {renderWindow(6)}
        {renderWindow(7)}
        {renderWindow(8)}
        {renderWindow(9)}
        {renderWindow(10)}
        {renderWindow(11)}
        {renderWindow(12)}
        <div className="main-door-container">
            <div className="pediment text-center">ADVENT CALENDAR</div>
             <div className="main-door">
               <div className="door-panel left" />
               <div className="door-panel right" />
               <div className="door-knob" />
             </div>
        </div>
        {renderWindow(13)}
        {renderWindow(14)}
        {renderWindow(15)}
        {renderWindow(16)}
        {renderWindow(17)}
        {renderWindow(18)}
        {renderWindow(19)}
        {renderWindow(20)}
        {renderWindow(21)}
        {renderWindow(22)}
        {renderWindow(23)}
        {renderWindow(24)}
      </div>
    </div>
  );
};


export default function AdventCalendarPage() {
    const [selectedDay, setSelectedDay] = React.useState<AdventDay | null>(null);
    const [isCardVisible, setIsCardVisible] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState<AdventManorVariant>('dsa');
    const [isMuted, setIsMuted] = React.useState(false);
    const audioRef = React.useRef<HTMLAudioElement>(null);

    React.useEffect(() => {
      const audio = audioRef.current;
      if (audio) {
        audio.volume = 0.3;
        audio.play().catch(error => console.log("Autoplay was prevented.", error));
      }
    }, []);

    const toggleMute = () => {
        const audio = audioRef.current;
        if (audio) {
            audio.muted = !audio.muted;
            setIsMuted(audio.muted);
        }
    };


    const handleDayClick = (dayData: AdventDay) => {
        if (selectedDay?.day === dayData.day && isCardVisible) {
            handleCloseCard();
            return;
        }

        if (isCardVisible) {
            handleCloseCard(true, () => {
                openCard(dayData);
            });
        } else {
            openCard(dayData);
        }
    };
    
    const openCard = (dayData: AdventDay) => {
        setSelectedDay(dayData);
        setTimeout(() => {
            setIsCardVisible(true);
        }, 500); 
    };

    const handleCloseCard = (isSwitching = false, onClosed?: () => void) => {
        setIsCardVisible(false);
        setTimeout(() => {
            if (!isSwitching) {
              setSelectedDay(null);
            }
            if (onClosed) {
                onClosed();
            }
        }, 300); 
    };

    return (
        <div className={cn("bg-bg-main min-h-screen w-full flex flex-col items-center animate-fade-in transition-colors duration-500 cursor-wand", isCardVisible && "has-modal-open")}>
             <audio ref={audioRef} loop src="https://studio.google.com/static/ugc/assets/sounds/jingle-bells-orchestral.mp3" />

             <div className="absolute top-4 right-4 z-20">
                <Button variant="ghost" size="icon" onClick={toggleMute} className="text-gold hover:bg-gold-light/20 hover:text-gold">
                    {isMuted ? <VolumeX /> : <Music2 />}
                    <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
                </Button>
            </div>

             <div className="container py-8 md:py-12 z-10 text-center">
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">ADVENT CALENDAR</h1>
                <p className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto font-body mt-2">
                    A journey through computer science, one window at a time.
                </p>
            </div>

            <div className="flex-grow flex items-center justify-center z-10 p-4 w-full">
                <Tabs defaultValue="dsa" className="w-full max-w-4xl" onValueChange={(value) => setActiveTab(value as AdventManorVariant)}>
                    <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 bg-bg-main/50 backdrop-blur-sm text-cream/80 border border-gold-light/20 tabs-list-style">
                        <TabsTrigger value="dsa" className="data-[state=active]:bg-gold-light/20 data-[state=active]:text-gold tabs-trigger-style">DSA</TabsTrigger>
                        <TabsTrigger value="development" className="data-[state=active]:bg-gold-light/20 data-[state=active]:text-gold tabs-trigger-style">Development</TabsTrigger>
                        <TabsTrigger value="system-design" className="data-[state=active]:bg-gold-light/20 data-[state=active]:text-gold tabs-trigger-style">System Design</TabsTrigger>
                    </TabsList>
                    <TabsContent value="dsa">
                       <AdventManor data={adventCalendarData} onDayClick={handleDayClick} selectedDay={selectedDay} variant="dsa" />
                    </TabsContent>
                    <TabsContent value="development">
                        <AdventManor data={devAdventCalendarData} onDayClick={handleDayClick} selectedDay={selectedDay} variant="development" />
                    </TabsContent>
                    <TabsContent value="system-design">
                        <AdventManor data={sysDesignAdventCalendarData} onDayClick={handleDayClick} selectedDay={selectedDay} variant="system-design" />
                    </TabsContent>
                </Tabs>
            </div>

            <AnimatePresence>
                {isCardVisible && selectedDay && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => handleCloseCard()}
                    >
                        <motion.div
                            className="reward-card"
                            data-variant={activeTab}
                            initial={{ scale: 0.5, y: "100vh" }}
                            animate={{ scale: 1, y: 0, rotate: -2 }}
                            exit={{ scale: 0.5, y: "100vh", opacity: 0}}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                            onClick={(e) => e.stopPropagation()} 
                        >
                            <div className="card-sheen" />
                            <div className="reward-header">
                                <span className="reward-day">Day {selectedDay.day}</span>
                                <h3 className="reward-title">{selectedDay.title}</h3>
                            </div>
                            <p className="reward-explanation">{selectedDay.explanation}</p>
                            <button onClick={() => handleCloseCard()} className="close-button">X</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
