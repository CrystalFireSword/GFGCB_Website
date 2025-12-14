
'use client';

import * as React from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from 'date-fns';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const clubEvents = [
  { date: new Date(2024, 6, 10), title: 'React Workshop' },
  { date: new Date(2024, 6, 22), title: 'Project Showcase' },
  { date: new Date(2024, 7, 5), title: 'Alumni Tech Talk' },
];

type UserEvent = {
  id: number;
  title: string;
};

export default function EventsPage() {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [userEvents, setUserEvents] = React.useState<Record<string, UserEvent[]>>({});
  const [newEventTitle, setNewEventTitle] = React.useState('');

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const handleAddEvent = () => {
    if (selectedDate && newEventTitle) {
      const dateKey = format(selectedDate, 'yyyy-MM-dd');
      const currentEvents = userEvents[dateKey] || [];
      if (currentEvents.length < 2) {
        const newEvent = { id: Date.now(), title: newEventTitle };
        setUserEvents(prev => ({
          ...prev,
          [dateKey]: [...currentEvents, newEvent],
        }));
        setNewEventTitle('');
      }
    }
  };
  
  const handleRemoveEvent = (date: Date, eventId: number) => {
    const dateKey = format(date, 'yyyy-MM-dd');
    setUserEvents(prev => ({
      ...prev,
      [dateKey]: prev[dateKey].filter(e => e.id !== eventId),
    }));
  };

  return (
    <>
      <div className="container py-12 md:py-20 lg:py-24 animate-fade-in">
        <div className="space-y-6 text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Events Calendar
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Stay up to date with our workshops, competitions, and community gatherings.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card p-4 sm:p-6 rounded-2xl shadow-lg border border-border/50">
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" size="icon" onClick={prevMonth} aria-label="Previous month">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <h2 className="text-xl sm:text-2xl font-bold font-headline text-center">
              {format(currentDate, 'MMMM yyyy')}
            </h2>
            <Button variant="ghost" size="icon" onClick={nextMonth} aria-label="Next month">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center font-semibold text-muted-foreground mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-xs sm:text-sm">{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {days.map(day => {
              const dayKey = format(day, 'yyyy-MM-dd');
              const dayClubEvents = clubEvents.filter(e => isSameDay(e.date, day));
              const dayUserEvents = userEvents[dayKey] || [];

              return (
                <div
                  key={day.toString()}
                  className={cn(
                    'relative aspect-square p-1.5 sm:p-2 border rounded-lg transition-colors cursor-pointer',
                    !isSameMonth(day, monthStart) && 'text-muted-foreground/50 bg-background/50',
                    isSameDay(day, new Date()) && 'bg-accent/50',
                    'hover:bg-accent hover:border-primary/50'
                  )}
                  onClick={() => setSelectedDate(day)}
                >
                  <span className={cn('text-sm font-medium', isSameDay(day, new Date()) && 'font-bold text-primary')}>{format(day, 'd')}</span>
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 space-y-0.5 overflow-hidden">
                    {dayClubEvents.map(event => (
                      <Badge key={event.title} className="w-full truncate text-xs p-0.5 justify-center">{event.title}</Badge>
                    ))}
                     {dayUserEvents.map(event => (
                      <Badge key={event.id} variant="secondary" className="w-full truncate text-xs p-0.5 justify-center">{event.title}</Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedDate} onOpenChange={(isOpen) => !isOpen && setSelectedDate(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Events for {selectedDate && format(selectedDate, 'MMMM d, yyyy')}</DialogTitle>
            <DialogDescription>
              View club events and add your own reminders. You can add up to 2 personal events per day.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
             <h3 className="font-semibold">Club Events</h3>
              {clubEvents.filter(e => selectedDate && isSameDay(e.date, selectedDate)).length > 0 ? (
                clubEvents.filter(e => selectedDate && isSameDay(e.date, selectedDate)).map(event => (
                   <div key={event.title} className="flex items-center gap-2">
                    <Badge className="truncate">{event.title}</Badge>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No club events scheduled for this day.</p>
              )}
            <h3 className="font-semibold pt-4">Your Events</h3>
             {selectedDate && (userEvents[format(selectedDate, 'yyyy-MM-dd')] || []).map(event => (
              <div key={event.id} className="flex items-center justify-between gap-2 bg-secondary/20 p-2 rounded-md">
                <p className="text-sm font-medium">{event.title}</p>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => selectedDate && handleRemoveEvent(selectedDate, event.id)}>
                  <X className="h-4 w-4"/>
                </Button>
              </div>
            ))}
            {selectedDate && (userEvents[format(selectedDate, 'yyyy-MM-dd')] || []).length < 2 && (
              <div className="flex items-center gap-2 pt-2">
                <Input
                  placeholder="New event title..."
                  value={newEventTitle}
                  onChange={e => setNewEventTitle(e.target.value)}
                  className="h-9"
                />
                <Button size="icon" className="h-9 w-9" onClick={handleAddEvent}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            )}
            {selectedDate && (userEvents[format(selectedDate, 'yyyy-MM-dd')] || []).length >= 2 && (
                 <p className="text-sm text-muted-foreground pt-2">You've reached the event limit for this day.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
