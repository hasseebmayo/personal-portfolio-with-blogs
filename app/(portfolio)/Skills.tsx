import { Badge } from '@/components/ui/badge';
import React from 'react';

const SkillsSection = () => {
 const skills = [
  'Typescript',
  'Javascript',
  'NodeJs',
  'ReactJs',
  'Tailwindcss',
  'Redux/Zustand',
  'Docker',
  'Github Actions',
  'AWS',
  'CI/CD Pipeline',
  'NextJs',
 ];
 return (
  <section className="flex min-h-0 flex-col gap-y-3">
   <h1 className="text-xl font-bold">Skills</h1>
   <div className="flex flex-wrap gap-1">
    {skills.map(skill => (
     <Badge key={skill} variant={'default'}>
      {skill}
     </Badge>
    ))}
   </div>
  </section>
 );
};

export default SkillsSection;
