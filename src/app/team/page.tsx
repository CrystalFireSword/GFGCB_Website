
import { TeamCard } from '@/components/team-card';
import { organizers, teams } from '@/lib/team-data';

export default function TeamPage() {
  return (
    <div className="container py-12 md:py-20 lg:py-24 animate-fade-in">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-6 text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Our Team
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Meet the dedicated individuals who make GFG CB a success.
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight font-headline mb-8 text-center">Organizer</h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1 max-w-xs">
                    {organizers.map((member) => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
          </div>

          {Object.entries(teams).map(([teamName, members]) => (
            <div key={teamName}>
              <h2 className="text-3xl font-bold tracking-tight font-headline mb-8 text-center capitalize">
                {teamName.replace('-', ' ')} Team
              </h2>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl">
                  {members.map((member) => (
                    <TeamCard key={member.id} member={member} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
