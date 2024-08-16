import React from 'react';

const EducationSection = () => {
 return (
  <section className="flex min-h-0 flex-col gap-y-3">
   <h1 className="text-xl font-bold">Education</h1>
   <div className="rounded-lg bg-card text-card-foreground">
    <div className="flex flex-col space-y-1.5">
     <div className="flex items-center justify-between gap-x-2 text-base">
      <h3 className="font-semibold leading-none">
       University of Education,Lahore
      </h3>
      <div className="text-sm tabular-nums text-gray-500">
       Sep 2019 - Nov 2023
      </div>
     </div>
    </div>
    <h4 className="mt-2 text-pretty font-sans text-sm text-muted-foreground">
     Majored in Information Technology
    </h4>
   </div>
  </section>
 );
};

export default EducationSection;
