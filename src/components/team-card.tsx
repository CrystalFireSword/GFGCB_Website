import { Card, CardContent } from '@/components/ui/card';
import type { Member } from '@/lib/team-data';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function TeamCard({ member }: { member: Member }) {
  return (
    <Card className="text-center transition-all hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="flex flex-col items-center p-6">
        <Avatar className="h-24 w-24 mb-4 border-2 border-primary/50">
          <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.imageHint} />
          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-semibold font-headline">{member.name}</h3>
        <p className="text-primary font-medium">{member.designation}</p>
        <p className="text-sm text-muted-foreground">{member.year}</p>
      </CardContent>
    </Card>
  );
}
