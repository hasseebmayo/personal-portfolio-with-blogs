import { experiences } from './experience';
import SingleWorkExperience from './single-work-experience';

const WorkExperienceSection = () => {
 return (
  <section className="flex min-h-0 flex-col gap-y-3">
   <h1 className="text-xl font-bold">Experience</h1>
   {experiences.map((experience, i) => (
    <SingleWorkExperience {...experience} key={experience.company_name + i} />
   ))}
  </section>
 );
};

export default WorkExperienceSection;
