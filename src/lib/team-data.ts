export type Member = {
  id: string;
  name: string;
  designation: string;
  year: string;
  imageUrl: string;
  imageHint: string;
};

export const organizers: Member[] = [
  { id: 'person-1', name: 'person1', designation: 'President', year: '4th Year', imageUrl: 'https://picsum.photos/seed/p1/400/400', imageHint: 'profile portrait' },
];

export const teams: Record<string, Member[]> = {
  technical: [
    { id: 'person-4', name: 'person4', designation: 'Technical Lead', year: '3rd Year', imageUrl: 'https://picsum.photos/seed/p4/400/400', imageHint: 'profile portrait' },
    { id: 'person-5', name: 'person5', designation: 'Member', year: '2nd Year', imageUrl: 'https://picsum.photos/seed/p5/400/400', imageHint: 'profile portrait' },
    { id: 'person-13', name: 'person13', designation: 'Member', year: '2nd Year', imageUrl: 'https://picsum.photos/seed/p13/400/400', imageHint: 'profile portrait' },
    { id: 'person-14', name: 'person14', designation: 'Member', year: '1st Year', imageUrl: 'https://picsum.photos/seed/p14/400/400', imageHint: 'profile portrait' },
    { id: 'person-15', name: 'person15', designation: 'Member', year: '1st Year', imageUrl: 'https://picsum.photos/seed/p15/400/400', imageHint: 'profile portrait' },
  ],
  design: [
    { id: 'person-6', name: 'person6', designation: 'Design Lead', year: '3rd Year', imageUrl: 'https://picsum.photos/seed/p6/400/400', imageHint: 'profile portrait' },
    { id: 'person-7', name: 'person7', designation: 'Member', year: '2nd Year', imageUrl: 'https://picsum.photos/seed/p7/400/400', imageHint: 'profile portrait' },
    { id: 'person-16', name: 'person16', designation: 'Member', year: '2nd Year', imageUrl: 'https://picsum.photos/seed/p16/400/400', imageHint: 'profile portrait' },
    { id: 'person-17', name: 'person17', designation: 'Member', year: '1st Year', imageUrl: 'https://picsum.photos/seed/p17/400/400', imageHint: 'profile portrait' },
    { id: 'person-18', name: 'person18', designation: 'Member', year: '1st Year', imageUrl: 'https://picsum.photos/seed/p18/400/400', imageHint: 'profile portrait' },
  ],
  editorial: [
    { id: 'person-8', name: 'person8', designation: 'Editorial Lead', year: '3rd Year', imageUrl: 'https://picsum.photos/seed/p8/400/400', imageHint: 'profile portrait' },
    { id: 'person-9', name: 'person9', designation: 'Member', year: '2nd Year', imageUrl: 'https://picsum.photos/seed/p9/400/400', imageHint: 'profile portrait' },
    { id: 'person-19', name: 'person19', designation: 'Member', year: '2nd Year', imageUrl: 'https://picsum.photos/seed/p19/400/400', imageHint: 'profile portrait' },
    { id: 'person-20', name: 'person20', designation: 'Member', year: '1st Year', imageUrl: 'https://picsum.photos/seed/p20/400/400', imageHint: 'profile portrait' },
    { id: 'person-21', name: 'person21', designation: 'Member', year: '1st Year', imageUrl: 'https://picsum.photos/seed/p21/400/400', imageHint: 'profile portrait' },
  ],
  events: [
    { id: 'person-10', name: 'person10', designation: 'Events Lead', year: '3rd Year', imageUrl: 'https://picsum.photos/seed/p10/400/400', imageHint: 'profile portrait' },
    { id: 'person-11', name: 'person11', designation: 'Member', year: '2nd Year', imageUrl: 'https://picsum.photos/seed/p11/400/400', imageHint: 'profile portrait' },
    { id: 'person-22', name: 'person22', designation: 'Member', year: '2nd Year', imageUrl: 'https://picsum.photos/seed/p22/400/400', imageHint: 'profile portrait' },
    { id: 'person-23', name: 'person23', designation: 'Member', year: '1st Year', imageUrl: 'https://picsum.photos/seed/p23/400/400', imageHint: 'profile portrait' },
    { id: 'person-24', name: 'person24', designation: 'Member', year: '1st Year', imageUrl: 'https://picsum.photos/seed/p24/400/400', imageHint: 'profile portrait' },
  ],
  'social-media': [
    { id: 'person-12', name: 'person12', designation: 'Social Media Lead', year: '3rd Year', imageUrl: 'https://picsum.photos/seed/p12/400/400', imageHint: 'profile portrait' },
    { id: 'person-25', name: 'person25', designation: 'Member', year: '2nd Year', imageUrl: 'https://picsum.photos/seed/p25/400/400', imageHint: 'profile portrait' },
    { id: 'person-26', name: 'person26', designation: 'Member', year: '2nd Year', imageUrl: 'https://picsum.photos/seed/p26/400/400', imageHint: 'profile portrait' },
    { id: 'person-27', name: 'person27', designation: 'Member', year: '1st Year', imageUrl: 'https://picsum.photos/seed/p27/400/400', imageHint: 'profile portrait' },
    { id: 'person-28', name: 'person28', designation: 'Member', year: '1st Year', imageUrl: 'https://picsum.photos/seed/p28/400/400', imageHint: 'profile portrait' },
  ],
};