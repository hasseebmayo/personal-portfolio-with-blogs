import React from 'react';
import { IExpProject } from './experience';
import Link from 'next/link';

function SingleExperienceProject({
 project_description,
 project_name,
 project_url,
 responsibilities,
 tools,
}: IExpProject) {
 return (
  <div className="mt-2 text-pretty font-sans text-xs text-gray-500">
   {project_url === '#' ? (
    <h2 className="font-bold"> {project_name}</h2>
   ) : (
    <Link href={project_url} target="_blank">
     <h2 className="font-bold"> {project_name}</h2>
    </Link>
   )}
   <p className="ml-1">{project_description}</p>
   <div className="mt-2">
    <h2 className="font-semibold"> - Responsibilities:</h2>
    <ul className="ml-5 mt-1 list-disc space-y-1">
     {responsibilities.map((rs, i) => (
      <li key={i + rs}>{rs}</li>
     ))}
    </ul>
   </div>
   <div className="mt-2">
    <h2 className="font-semibold"> - Tools:</h2>
    <ul className="ml-5 mt-1 list-disc space-y-1">
     {tools.map((rs, i) => (
      <li key={i + rs}>{rs}</li>
     ))}
    </ul>
   </div>
  </div>
 );
}

export default SingleExperienceProject;
