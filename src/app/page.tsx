'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, Code, Contact, Users, Trophy, Lightbulb, Target } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const heroImages = [
  PlaceHolderImages.find(p => p.id === 'hero-image'),
  PlaceHolderImages.find(p => p.id === 'tech-collaboration'),
  PlaceHolderImages.find(p => p.id === 'workshop'),
].filter(Boolean) as (typeof PlaceHolderImages[number])[];

export default function Home() {
  return (
    <div className="flex flex-col animate-fade-in">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-20 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-primary/80 tracking-wide uppercase">SSN College of Engineering</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                  GeeksforGeeks Campus Body
                </h1>
                <p className="max-w-[600px] mx-auto lg:mx-0 text-muted-foreground md:text-xl leading-relaxed">
                  Where learning is shared, practiced, and celebrated together. Join a vibrant community of developers, problem solvers, and innovators at SSN.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Button asChild size="lg" className="group">
                  <Link href="/team">
                    Meet the Team
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            <div className="w-full max-w-md mx-auto">
              <Carousel 
                opts={{ loop: true }}
                className="w-full"
              >
                <CarouselContent>
                  {heroImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                        <Image
                          alt={img.description || `Hero Image ${index + 1}`}
                          className="object-cover w-full h-full transition-transform hover:scale-105"
                          src={img.imageUrl}
                          data-ai-hint={img.imageHint}
                          width={600}
                          height={600}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-primary font-medium">
                What We Offer
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Bridging Theory and Practice
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Through coding sessions, workshops, contests, and collaborative projects, we nurture a culture of curiosity and consistency, empowering you to excel.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
            <FeatureCard
              icon={<Code className="h-8 w-8 text-primary" />}
              title="Coding Sessions & Contests"
              description="Sharpen your problem-solving skills through regular coding challenges and competitive programming contests."
            />
            <FeatureCard
              icon={<Lightbulb className="h-8 w-8 text-primary" />}
              title="Workshops & Tech Talks"
              description="Explore cutting-edge technologies and learn from industry experts, seniors, and peers across diverse tech domains."
            />
            <FeatureCard
              icon={<Target className="h-8 w-8 text-primary" />}
              title="Real-World Projects"
              description="Work on collaborative projects that prepare you for real-world challenges and enhance your practical skills."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Community & Networking"
              description="Connect with fellow tech enthusiasts, build lasting relationships, and grow together as a community."
            />
            <FeatureCard
              icon={<Trophy className="h-8 w-8 text-primary" />}
              title="Competitions & Events"
              description="Participate in hackathons, coding challenges, and technical events that push your boundaries."
            />
            <FeatureCard
              icon={<CalendarDays className="h-8 w-8 text-primary" />}
              title="Year-Round Activities"
              description="Engage in continuous learning through our diverse calendar of events, workshops, and mentorship programs."
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                Our Philosophy
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                More Than a Technical Club
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At SSN, the GeeksforGeeks Campus Body is a place where we grow, connect, and innovate together. We believe in the power of shared knowledge and collaborative learning.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                By nurturing curiosity and consistency, we create an environment where every student can transform from a learner into an innovator, ready to tackle tomorrow's challenges.
              </p>
              <div className="pt-4">
                <p className="text-xl font-semibold text-primary">
                  Powered by Geeks... for Geeks! ✨
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatCard number="500+" label="Active Members" />
              <StatCard number="50+" label="Events Annually" />
              <StatCard number="100+" label="Projects Completed" />
              <StatCard number="24/7" label="Community Support" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
              Ready to Join the GFG Family?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our team, participate in upcoming events, and become part of SSN's most vibrant tech community.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button asChild size="lg">
              <Link href="/advent-calendar">
                <Trophy className="mr-2 h-5 w-5"/>
                Advent Calendar
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Contact className="mr-2 h-5 w-5"/>
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="grid gap-4 text-center items-start justify-items-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
       <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <div className="grid gap-1">
        <h3 className="text-lg font-bold font-headline">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function StatCard({ number, label }: { number: string, label: string }) {
  return (
    <div className="p-6 rounded-lg border bg-card text-center">
      <div className="text-3xl font-bold text-primary">{number}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}