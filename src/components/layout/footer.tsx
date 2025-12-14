
"use client"

import * as React from 'react';
import { Linkedin, Mail, Instagram } from 'lucide-react';
import { Logo } from '@/components/logo';

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <div className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <p className="text-lg font-bold font-headline">GFG CB</p>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} GFG CB. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:contact@gfgcb.com" className="text-muted-foreground transition-colors hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
