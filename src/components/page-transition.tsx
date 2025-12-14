'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Star } from 'lucide-react';

const programmingFacts = [
  "The first computer programmer was a woman named Ada Lovelace.",
  "The term 'bug' in programming was coined when a real moth got stuck in a computer.",
  "Python was named after the British comedy group Monty Python.",
  "The first video game, 'Spacewar!', was created at MIT in 1962.",
  "JavaScript was created in just 10 days by Brendan Eich at Netscape.",
  "The world's first computer, the Z1, was built in Germany in 1938.",
  "APL is a programming language that uses a special keyboard with unique symbols.",
  "There are over 700 programming languages in the world.",
  "The first compiler was created by Grace Hopper in 1952.",
  "The concept of Object-Oriented Programming (OOP) was introduced in the 1960s."
];

const LoadingScreen = () => {
    const [fact, setFact] = React.useState('');

    React.useEffect(() => {
        setFact(programmingFacts[Math.floor(Math.random() * programmingFacts.length)]);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            rotate: 360,
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "linear"
                        }}
                    >
                        <Star className="text-primary w-8 h-8 mx-1" />
                    </motion.div>
                ))}
            </div>
            <div className="text-center px-4">
                <p className="text-lg font-semibold text-primary mb-2">Did you know?</p>
                <p className="text-md text-muted-foreground max-w-md">{fact}</p>
            </div>
        </motion.div>
    );
};

export function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isExiting, setIsExiting] = React.useState(false);

    React.useEffect(() => {
        setIsExiting(true);
        const timer = setTimeout(() => setIsExiting(false), 500); // Animation duration
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <AnimatePresence mode="wait">
            {isExiting && <LoadingScreen />}
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}