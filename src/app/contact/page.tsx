'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Mail, Instagram, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20 lg:py-24 animate-fade-in">
      <div className="mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Have questions? Want to collaborate or get involved? We'd love to hear from you! Connect with us through any of our social channels.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-14 w-14 rounded-full bg-[#2F8D46]/10 flex items-center justify-center">
                  <Mail className="h-7 w-7 text-[#2F8D46]" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 font-headline">Email Us</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drop us an email anytime
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:gfgcampusbody@ssn.edu.in">
                  gfgcampusbody@ssn.edu.in
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-14 w-14 rounded-full bg-[#2F8D46]/10 flex items-center justify-center">
                  <Instagram className="h-7 w-7 text-[#2F8D46]" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 font-headline">Instagram</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Follow us for updates
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="https://www.instagram.com/geeksforgeeks_ssn/" target="_blank" rel="noopener noreferrer">
                  @geeksforgeeks_ssn
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-14 w-14 rounded-full bg-[#2F8D46]/10 flex items-center justify-center">
                  <Linkedin className="h-7 w-7 text-[#2F8D46]" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 font-headline">LinkedIn</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connect professionally
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="https://www.linkedin.com/company/geeksforgeeks-campus-body-ssn/" target="_blank" rel="noopener noreferrer">
                  Visit Our Page
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-[#2F8D46]/5 to-background">
          <CardContent className="pt-8 pb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-[#2F8D46]/10 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-[#2F8D46]" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-xl mb-2 font-headline">Visit Us</h3>
                <p className="text-muted-foreground">
                  SSN College of Engineering<br />
                  Old Mahabalipuram Road, Kalavakkam<br />
                  Chennai - 603110, Tamil Nadu, India
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <div className="inline-block rounded-lg bg-[#2F8D46]/10 px-6 py-3">
            <p className="text-[#2F8D46] font-semibold">
              Join our community and be part of something amazing! ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}