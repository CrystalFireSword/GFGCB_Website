
'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            About GFG CB
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            We are a passionate community of student developers, designers, and tech enthusiasts dedicated to fostering a vibrant tech culture on campus.
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
        
        <div 
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80 text-center"
        >
          <div className="text-left">
          <h2>Our Mission</h2>
          <p className="text-muted-foreground">
            Our mission is to provide a platform for students to learn, collaborate, and grow their skills in various fields of technology. We aim to bridge the gap between academic learning and real-world application by organizing hands-on workshops, coding competitions, and collaborative projects.
          </p>
          <h2 className="text-secondary">Our Vision</h2>
          <p className="text-muted-foreground">
            We envision a campus where every student with an interest in technology has the opportunity and resources to pursue their passion. We strive to create an inclusive and supportive environment that encourages innovation, creativity, and continuous learning.
          </p>
          <h2 className="text-primary">What We Do</h2>
          <p className="text-muted-foreground">
            As a GeeksForGeeks affiliated campus body, we host a wide range of activities throughout the academic year:
          </p>
          <ul className="space-y-2">
             <li className="flex items-start">
              <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <span><strong>Workshops & Tech Talks:</strong> From web development to machine learning, we cover a broad spectrum of topics.</span>
            </li>
             <li className="flex items-start">
              <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <span><strong>Coding Contests:</strong> Regular competitions to challenge your problem-solving abilities.</span>
            </li>
             <li className="flex items-start">
              <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <span><strong>Project Development:</strong> Opportunities to work on real-world projects in teams.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <span><strong>Mentorship Programs:</strong> Connecting junior and senior students for guidance and support.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <span><strong>Community Events:</strong> Fun and engaging events to foster connections among members.</span>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
