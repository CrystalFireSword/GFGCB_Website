'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Heart, Rocket, Users } from 'lucide-react';
import Image from 'next/image';

const aboutImages = [
  PlaceHolderImages.find(p => p.id === 'hero-image'),
  PlaceHolderImages.find(p => p.id === 'tech-collaboration'),
  PlaceHolderImages.find(p => p.id === 'workshop')
].filter(Boolean) as (typeof PlaceHolderImages[number])[];

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20 lg:py-24 overflow-hidden animate-fade-in">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-6 text-center">
          <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-primary font-medium">
            SSN College of Engineering
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
            About GeeksforGeeks Campus Body
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto leading-relaxed">
            A vibrant community of developers, problem solvers, and innovators at SSN College of Engineering, where learning is best when shared, practiced, and celebrated together.
          </p>
        </div>

        <div className="my-12">
          <Carousel
            opts={{
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {aboutImages.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
                    <Image
                      alt={img.description || `About Image ${index + 1}`}
                      className="object-cover transition-transform hover:scale-105 w-full h-full"
                      src={img.imageUrl}
                      width={1200}
                      height={600}
                      data-ai-hint={img.imageHint}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="grid gap-8 md:grid-cols-3 my-12">
          <ValueCard
            icon={<Heart className="h-6 w-6" />}
            title="Our Belief"
            description="Learning is most effective when it's shared, practiced, and celebrated as a community."
          />
          <ValueCard
            icon={<Rocket className="h-6 w-6" />}
            title="Our Approach"
            description="Bridging theory and practice through hands-on coding, workshops, and real-world projects."
          />
          <ValueCard
            icon={<Users className="h-6 w-6" />}
            title="Our Community"
            description="More than a club—a place where we grow, connect, and innovate together."
          />
        </div>
        
        <div 
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80"
        >
          <div className="text-left space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We strive to bridge the gap between theoretical knowledge and practical application by creating an ecosystem where students can actively engage with technology. Through coding sessions, workshops, contests, and collaborative projects, we empower students to sharpen their problem-solving skills, explore cutting-edge technologies, and prepare for real-world challenges in the tech industry.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We envision SSN College of Engineering as a hub of innovation where every student passionate about technology has the resources, mentorship, and community support to transform their ideas into reality. By nurturing a culture of curiosity and consistency, we aim to develop problem solvers and innovators who are ready to shape the future of technology.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary">What Makes Us Different</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The GeeksforGeeks Campus Body at SSN goes beyond being just a technical club. We are a family of tech enthusiasts who believe in collaborative growth and shared success. Our approach combines structured learning with creative freedom, competitive spirit with supportive mentorship, and individual growth with community building.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary">What We Do</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As an official GeeksforGeeks affiliated campus body, we organize a comprehensive range of activities designed to enhance your technical skills and professional development:
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Coding Sessions & Workshops:</strong> Regular hands-on sessions covering web development, machine learning, competitive programming, app development, cloud computing, and emerging technologies.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Competitive Programming Contests:</strong> Weekly coding challenges and contests to enhance your algorithmic thinking and problem-solving abilities.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Real-World Project Development:</strong> Team-based projects that simulate industry scenarios, helping you build practical experience and a strong portfolio.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Tech Talks & Guest Sessions:</strong> Insights from industry professionals, alumni, and tech leaders on current trends, career paths, and industry best practices.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Mentorship Programs:</strong> Structured mentorship connecting juniors with experienced seniors for guidance on academics, projects, placements, and career development.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Hackathons & Technical Events:</strong> Exciting competitions where you can showcase your skills, collaborate with peers, and win exciting prizes.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Community Building Events:</strong> Fun social events, tech quizzes, and networking sessions that foster lasting friendships and professional connections.</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/30 rounded-lg p-8 text-center">
              <p className="text-2xl font-bold text-primary mb-3">
                Powered by Geeks... for Geeks! ✨
              </p>
              <p className="text-muted-foreground text-lg">
                Join us in creating a culture where curiosity meets consistency, and where every student can grow from a learner into an innovator. Together, we're building the tech leaders of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold font-headline mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}