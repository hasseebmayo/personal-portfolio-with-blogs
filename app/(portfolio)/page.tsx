import SkillsSection from './Skills';
import AboutSection from './about';
import EducationSection from './education';
import ProfileSection from './profile-section';
import WorkExperienceSection from './work-experience';

export default function Home() {
 return (
  <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
   <ProfileSection />
   <AboutSection />
   <WorkExperienceSection />
   <EducationSection />
   <SkillsSection />
  </section>
 );
}
