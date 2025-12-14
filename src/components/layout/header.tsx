'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/team', label: 'Team' },
  { href: '/events', label: 'Events' },
  { href: '/advent-calendar', label: 'Advent Calendar' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block font-headline">
              GFG CB
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary' : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-8" />
             <span className="font-bold font-headline">GFG CB</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
            <ModeToggle />
            <div className="md:hidden">
                <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Open Menu</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                    <div className="px-2">
                        <div className="flex items-center py-2">
                        <Link href="/" className="flex items-center" onClick={() => setSheetOpen(false)}>
                            <Logo className="h-8 w-8 mr-2"/>
                            <span className="font-bold font-headline">GFG CB</span>
                        </Link>
                        </div>
                        <div className="flex flex-col space-y-3 pt-6">
                        {navLinks.map((link) => (
                            <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setSheetOpen(false)}
                            className={cn(
                                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                                pathname === link.href ? 'bg-accent text-primary font-semibold' : 'text-foreground/70'
                            )}
                            >
                            {link.label}
                            </Link>
                        ))}
                        </div>
                    </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
