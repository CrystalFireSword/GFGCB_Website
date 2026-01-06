"use client"

import * as React from 'react';
import { Linkedin, Mail, Instagram, MapPin, ExternalLink } from 'lucide-react';
import { Logo } from '@/components/logo';
import Link from 'next/link';

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="border-t bg-gradient-to-b from-background to-[#2F8D46]/5">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Logo className="h-10 w-10" />
              <div>
                <p className="text-xl font-bold font-headline text-[#2F8D46]">GFG Campus Body</p>
                <p className="text-xs text-muted-foreground">SSN College of Engineering</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering students through coding, collaboration, and innovation. Powered by Geeks... for Geeks!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-[#2F8D46] font-headline">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-[#2F8D46] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-[#2F8D46] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-[#2F8D46] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/advent-calendar" className="text-muted-foreground hover:text-[#2F8D46] transition-colors">
                  Advent Calendar
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-[#2F8D46] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-[#2F8D46] font-headline">Connect With Us</h3>
            <div className="space-y-3">
              <a 
                href="mailto:gfgcampusbody@ssn.edu.in" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#2F8D46] transition-colors group"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="group-hover:underline">gfgcampusbody@ssn.edu.in</span>
              </a>
              <a 
                href="https://www.instagram.com/geeksforgeeks_ssn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#2F8D46] transition-colors group"
              >
                <Instagram className="h-4 w-4 flex-shrink-0" />
                <span className="group-hover:underline">@geeksforgeeks_ssn</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="https://www.linkedin.com/company/geeksforgeeks-campus-body-ssn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#2F8D46] transition-colors group"
              >
                <Linkedin className="h-4 w-4 flex-shrink-0" />
                <span className="group-hover:underline">GFG Campus Body SSN</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-[#2F8D46] font-headline">Location</h3>
            <div className="flex gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#2F8D46]" />
              <address className="not-italic">
                SSN College of Engineering<br />
                Old Mahabalipuram Road<br />
                Kalavakkam, Chennai - 603110<br />
                Tamil Nadu, India
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} GeeksforGeeks Campus Body, SSN College of Engineering. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:gfgcampusbody@ssn.edu.in" 
                className="h-9 w-9 rounded-full bg-[#2F8D46]/10 flex items-center justify-center text-[#2F8D46] hover:bg-[#2F8D46] hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a 
                href="https://www.instagram.com/geeksforgeeks_ssn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-[#2F8D46]/10 flex items-center justify-center text-[#2F8D46] hover:bg-[#2F8D46] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/geeksforgeeks-campus-body-ssn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-[#2F8D46]/10 flex items-center justify-center text-[#2F8D46] hover:bg-[#2F8D46] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}