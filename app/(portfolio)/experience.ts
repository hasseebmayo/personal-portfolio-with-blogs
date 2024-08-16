export interface IExperience {
 company_name: string;
 company_url: string;
 status: 'full_time' | 'intern';
 working_date: string;
 position_name: string;
 projects: IExpProject[];
}
export interface IExpProject {
 project_name: string;
 project_description: string;
 project_url: string;
 responsibilities: string[];
 tools: string[];
}
export const experiences: IExperience[] = [
 {
  company_name: 'Digital Dynamic',
  company_url: '#',
  status: 'full_time',
  working_date: 'Dec 2023 - Present',
  position_name: 'Software Engineer/ MERN Stack Developer',
  projects: [
   {
    project_name: 'Teleneo',
    project_description:
     'A telemedicine platform enabling user registration, appointment scheduling, and video consultations with approved doctors. Integrated video calls using Video SDK and payment processing via Stripe for a seamless user experience.',
    project_url: 'https://teleneo.app',
    responsibilities: [
     'Developed and integrated user registration and appointment scheduling features.',
     'Implemented video consultations using Video SDK for seamless communication.',
     'Ensured doctor approval process by admin for secure consultations.',
     'Integrated Stripe for payment processing to handle transactions.',
     'Collaborated with the UX/UI team to enhance user experience and interface.',
     'Provided technical support and troubleshooting for video calls and payments.',
    ],
    tools: ['Vs Code', 'Github', 'Docker', 'AWS'],
   },
   {
    project_name: 'Communi App',
    project_url: '#',
    project_description:
     'A USA-based telemedicine platform enabling health workers to provide consultations to patients based on their insurance number. The platform facilitates video calls and chat functionality for effective communication between health workers and patients. Integrated with Video SDK for seamless video calls and Stripe for secure payment processing.',
    responsibilities: [
     'Developed backend using Node js and typescript',
     'Implemented CI/CD pipeline using docker and github actions',
     'Implemented user registration and appointment scheduling features.',
     'Implemented Video call featuring using Twilio for seamless communication.',
     'Implemented Chat using socket.io for seamless communication.',
    ],
    tools: ['Vs Code', 'Github', 'Docker', 'AWS'],
   },
   {
    project_name: 'Education App',
    project_url: '#',
    project_description:
     'A school-based app designed to manage multiple schools, allowing the addition of teachers, staff, students, and parents. Parents can monitor their children`s progress and results. The app features a school-specific feed where teachers can post updates about students and school activities.',
    tools: ['Vs Code', 'Github', 'Docker', 'AWS'],
    responsibilities: [
     'Developed Backend using Node js and typescript',
     'Implemented CI/CD pipeline using docker and github actions',
     'Implemented school management features such as teacher, staff, student, and parent.',
     'Implemented school-specific feed where teachers can post updates about students and school activities.',
    ],
   },
  ],
 },
 {
  company_name: 'WebWrite',
  company_url: 'https://webwrite.co',
  status: 'full_time',
  working_date: 'Aug 2022 - Sep 2023',
  position_name: 'Mern Developer',
  projects: [
   {
    project_name: 'Coach Me',
    project_url: '#',
    project_description:
     'A web-based admin panel and app designed for gym coaches to manage clients and their workouts, track client progress, and view completed workouts in a real-time feed. Coaches can create and assign workout programs to clients, ensuring personalized fitness plans and efficient progress monitoring.',
    responsibilities: [
     'Developed the admin panel using react js',
     'Implemented Payment gateway using stripe to help coachs process payments',
     'Implemented a feed where coach can see all users feed.',
     'Implemented a workout program builder where coach can create and assign workout programs to clients.',
    ],
    tools: ['VS Code', 'Github', 'AWS'],
   },
   {
    project_name: 'Gluteology Panel',
    project_url: '#',
    project_description:
     'Expanded upon the existing gym admin panel project by incorporating additional features such as meal planning and referral code functionality. Coaches can now seamlessly create personalized workout and meal plans, assign daily exercises, and manage referral codes. Admin responsibilities include client management and overseeing payments,providing a comprehensive solution for enhanced user experience. Clients can access their personalized plans, including workout and meal details, through the app',
    responsibilities: [
     'Implemented meal planning feature.',
     'Implemented referral code feature.',
     'Implemented client management feature.',
     'Implemented payment feature.',
     'Implemented a feed where coach can see all users feed.',
    ],
    tools: ['VS Code', 'Github', 'AWS'],
   },
  ],
 },
];
