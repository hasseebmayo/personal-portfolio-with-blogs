import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { IExperience } from './experience';
import SingleExperienceProject from './single-project';

const SingleWorkExperience = ({
 company_name,
 status,
 company_url,
 position_name,
 working_date,
 projects,
}: IExperience) => {
 return (
  <div className="rounded-lg bg-card text-card-foreground">
   <div className="flex flex-col space-y-1.5">
    <div className="flex items-center justify-between gap-x-2 text-base">
     <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
      {company_url === '#' ? (
       company_name
      ) : (
       <Link href={company_url} target="_blank">
        {company_name}
       </Link>
      )}
      <Badge variant={'secondary'}>{status}</Badge>
     </h3>
     <div className="text-sm tabular-nums text-gray-500">{working_date}</div>
    </div>
    <h4 className="font-sans text-sm leading-none">{position_name}</h4>
   </div>
   {projects.map((project, i) => (
    <SingleExperienceProject {...project} key={project.project_name + i} />
   ))}
   <div className="mt-3 h-[2px] w-full bg-gray-500" />
  </div>
 );
};

export default SingleWorkExperience;
